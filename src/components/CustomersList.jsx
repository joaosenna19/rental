'use client'
import { Button} from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table";
import { Card , CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";
import CustomerRow from "@/components/CustomerRow";


const CustomersList = () => {

  const [customers, setCustomers] = useState([])

  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:3000/api/customers");
    const customers = await response.json();
    setCustomers(customers);
    console.log(customers);
  };

  useEffect(() => {
    fetchCustomers();
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
                  <TableHead>Email</TableHead>
                  <TableHead className="w-24">Phone</TableHead>
                  <TableHead className="w-12" />
                </TableRow>
              </TableHeader>
              <TableBody>
              {customers.map((customer, index) => (
                <CustomerRow key={index} customer={customer}/>
              ))}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="justify-center">
            <Link href="/customers/form">
            <Button className="bg-black">Add Customer</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CustomersList;