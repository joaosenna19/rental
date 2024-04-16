import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const CustomerRow = ({customer}) => {
    const {firstName, lastName, phoneNumber, email} = customer;
  return (
    <TableRow>
      <TableCell>{`${firstName} ${lastName}`}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell className="text-right">
        <Button size="icon" className="px-6" variant="destructive">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default CustomerRow;
