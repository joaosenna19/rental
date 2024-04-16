'use client'
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useEffect } from "react";
import RentalRow from "@/components/RentalRow";
import { useState } from "react";

const RentalsList = () => {
  const [rentals, setRentals] = useState([]);
  const fetchRentals = async () => {
    const response = await fetch("http://localhost:3000/api/rentals");
    const rentals = await response.json();
    setRentals(rentals);
    console.log(rentals);
  };


  useEffect(() => {
    fetchRentals();
  }, []);

  return (
    <div className="flex items-start ">
      <div className="w-full grid gap-6 px-4 mx-auto ">
        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Rental Date</TableHead>
                  <TableHead>Return Date</TableHead>
                  <TableHead>Customer Name</TableHead>
                  <TableHead>Equipment Rented</TableHead>
                  <TableHead>Total Cost</TableHead>
                  <TableHead />
                </TableRow>
              </TableHeader>
              <TableBody>
                {rentals.map((rental, index) => (
                  <RentalRow key={index} rental={rental} />
                ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-center">
            <Link href="/rentals/form">
              <Button className="bg-black">Add Rental</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RentalsList;
