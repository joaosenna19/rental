"use client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";
import EquipmentRow  from "@/components/EquipmentRow";
import { useState } from "react";

const EquipmentsList = () => {
  const [equipments, setEquipments] = useState([]);

  const fetchEquipments = async () => {
    const response = await fetch("http://localhost:3000/api/equipments");
    const equipments = await response.json();
    setEquipments(equipments);
    console.log(equipments);
  };

  useEffect(() => {
    fetchEquipments();
  }, []);

  return (
    <div className="flex items-start ">
      <div className="w-full grid gap-4 px-4 mx-auto ">
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="w-24">Daily Cost</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
                {equipments.map((equipment, index) => (
                  <EquipmentRow key={index} equipment={equipment}/>
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-center">
            <Link href="/equipmentform">
              <Button className="bg-black">Add Equipment</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EquipmentsList;
