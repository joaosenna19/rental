"use client";
import { FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const AddEquipment = () => {
  const [categories, setCategories] = useState([]);

  const { register, handleSubmit, reset } = useForm();

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:3000/api/categories");
    const categories = await response.json();
    setCategories(categories);
  };

  const onSubmit = async (data) => {
    data.dailyRate = parseFloat(data.dailyRate);
    console.log(data);
    await fetch("http://localhost:3000/api/equipments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => response.json()).then((data) => console.log(data));
    reset();
  };



  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Add an Equipment</h2>
      </div>
      <form
        className="space-y-4 justify-center mx-5"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid gap-4">
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="name">
              Name
            </Label>
            <Input
              id="name"
              placeholder="Enter the name"
              required
              {...register("name")}
            />
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="description">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Enter the description"
              required
              {...register("description")}
            />
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="price">
              Daily price
            </Label>
            <Input
              id="price"
              placeholder="Enter the price"
              required
              {...register("dailyRate")}
            />
          </FormItem>
          <FormItem className="flex flex-col gap-2">
            <Label className="text-sm" htmlFor="category">
              Category
            </Label>
            <select
              id="category"
              placeholder="Select Category"
              required
              {...register("categoryId")}
            >
              {categories.map((category, index) => (
                <option key={index} value={category.id}>
                  {category.description}
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

export default AddEquipment;
