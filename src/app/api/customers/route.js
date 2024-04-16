import { prisma } from "@/utilities/db";

export async function GET() {
  try {
    const customers = await prisma.customer.findMany();
    return Response.json(customers);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}

export async function POST(req) {
  try {
    const { firstName, lastName, phoneNumber, email } = await req.json();
    const customer = await prisma.customer.create({
      data: {
        firstName,
        lastName,
        phoneNumber,
        email,
      },
    });
    return Response.json(customer);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
