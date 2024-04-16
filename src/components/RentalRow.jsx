import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const RentalRow = ({rental}) => {
    let {rentalDate, returnDate, customer, equipment, totalCost } = rental;
    returnDate = new Date(returnDate).toLocaleDateString();
    rentalDate = new Date(rentalDate).toLocaleDateString();
  return (
    <TableRow>
      <TableCell>{rentalDate}</TableCell>
      <TableCell>{returnDate}</TableCell>
      <TableCell>{`${customer.firstName} ${customer.lastName}` }</TableCell>
      <TableCell>{equipment.name}</TableCell>
        <TableCell>{totalCost}</TableCell>
      <TableCell className="text-right">
        <Button size="icon" className="px-6" variant="destructive">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default RentalRow;
