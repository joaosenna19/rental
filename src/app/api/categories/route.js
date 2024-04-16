import { prisma } from "@/utilities/db";

export async function GET() {
  try {
    const categories = await prisma.category.findMany();
    return Response.json(categories);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}

export async function POST(req) {
    try {
        const { description } = await req.json();
        const category = await prisma.category.create({
        data: {
            description,
        },
        });
        return Response.json(category);
    } catch (error) {
        return Response.json({ error: error.message });
    }
    }