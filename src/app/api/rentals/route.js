import { prisma } from "@/utilities/db";

export async function GET() {
  try {
    const rentals = await prisma.rental.findMany({
      include: {
        customer: true,
        equipment: true,
      },
    });
    return Response.json(rentals);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}

export async function POST(req) {
  try {
    const { customerId, equipmentId, rentalDate, returnDate } =
      await req.json();
    const equipment = await prisma.equipment.findUnique({
      where: {
        id: equipmentId,
      },
    });

    const rentalDurationInDays =
      (new Date(returnDate) - new Date(rentalDate)) / (1000 * 60 * 60 * 24);
    const totalCost = rentalDurationInDays * equipment.dailyRate;

    const rental = await prisma.rental.create({
      data: {
        customerId: customerId,
        equipmentId: equipmentId,
        rentalDate: rentalDate,
        returnDate: returnDate,
        totalCost: totalCost,
      },
    });
    return Response.json(rental);
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
