"use client";
import { FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const AddRentals = () => {
  const { register, handleSubmit, reset } = useForm();
  const [customers, setCustomers] = useState([]);
  const [equipments, setEquipments] = useState([]);

  const onSubmit = async (data) => {
    data.rentalDate = new Date(data.rentalDate).toISOString();
    data.returnDate = new Date(data.returnDate).toISOString();
    console.log(data);
    await fetch("http://localhost:3000/api/rentals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    reset();
  };

  const fetchCustomers = async () => {
    const response = await fetch("http://localhost:3000/api/customers");
    const customers = await response.json();
    setCustomers(customers);
  };

  const fetchEquipments = async () => {
    const response = await fetch("http://localhost:3000/api/equipments");
    const equipments = await response.json();
    const availableEquipments = equipments.filter(
      (equipment) => equipment.rental === null
    );

    console.log(availableEquipments);
    setEquipments(availableEquipments);
  };

  useEffect(() => {
    fetchCustomers();
    fetchEquipments();
  }, []);

  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Add a Rental</h2>
      </div>
      <form
        className="space-y-4 justify-center mx-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4">
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="rental-date">
              Rental Date
            </Label>
            <Input
              id="first-name"
              type="date"
              required
              {...register("rentalDate")}
            />
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="returnDate">
              Return Date
            </Label>
            <Input
              id="first-name"
              type="date"
              required
              {...register("returnDate")}
            />
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="customerId">
              Customer
            </Label>
            <select
              id="customerId"
              placeholder="Select a customer"
              required
              {...register("customerId")}
            >
              {customers.map((customer, index) => (
                <option key={index} value={customer.id}>
                  {customer.firstName} {customer.lastName}
                </option>
              ))}
            </select>
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="equipmentId">
              Equipment
            </Label>
            <select
              id="equipment"
              placeholder="Select equipment"
              required
              {...register("equipmentId")}
            >
              {equipments.map((equipment, index) => (
                <option key={index} value={equipment.id}>
                  {equipment.name}
                </option>
              ))}
            </select>
          </FormItem>
        </div>
        <div className="flex justify-end space-x-2">
          <Button type="submit" className="bg-green-500 hover:bg-green-600">
            Add
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddRentals;
