"use client";
import { Form, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";


const AddCustomer = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch("http://localhost:3000/api/customers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    reset();
  }

  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Add a Customer</h2>
      </div>
      <form className="space-y-4 justify-center mx-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4">
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="first-name">
              First Name
            </Label>
            <Input id="first-name" placeholder="Enter the name" required {...register("firstName")}/>
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="last-name">
              Last Name
            </Label>
            <Input id="last-name" placeholder="Enter the name" required {...register("lastName")}/>
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="phone-number">
              Phone Number
            </Label>
            <Input id="phone-number" placeholder="Phone number" required {...register("phoneNumber")}/>
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="email">
              Email address
            </Label>
            <Input id="email" placeholder="Email address" required {...register("email")}/>
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

export default AddCustomer;
