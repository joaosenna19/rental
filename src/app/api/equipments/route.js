import { prisma } from "@/utilities/db";

export async function GET() {
  try {
    const equipments = await prisma.equipment.findMany({
      include: {
        category: true,
        rental: true
      
      },
    });
    return Response.json(equipments);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}

export async function POST(req) {
  try {
    const { categoryId, name, description, dailyRate } = await req.json();
    const equipment = await prisma.equipment.create({
      data: {
        categoryId: categoryId,
        name,
        description,
        dailyRate: dailyRate,
      },
    });
    return Response.json(equipment);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
