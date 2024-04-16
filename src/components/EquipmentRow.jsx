import { TableRow, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const EquipmentRow = ({equipment}) => {
    const {name, description, dailyRate} = equipment;
  return (
    <TableRow>
      <TableCell>{name}</TableCell>
      <TableCell>{description}</TableCell>
      <TableCell>{dailyRate}</TableCell>
      <TableCell className="text-right">
        <Button size="icon" className="px-6" variant="destructive">
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default EquipmentRow;
