import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import { Burger, BurgerData } from "../../../../common/types";
import { useForm } from "react-hook-form";
import { editBurger } from "../../../../services/burgers";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  burger: Burger;
  cancelEditMode: () => void;
};

const cellFields: ("name" | "ingredients" | "price")[] = [
  "name",
  "ingredients",
  "price",
];

export const EditRow = ({ burger, cancelEditMode }: Props) => {
  const { register, getValues } = useForm({
    defaultValues: {
      name: burger.name,
      ingredients: burger.ingredients,
      price: burger.price,
    },
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data: BurgerData) => editBurger(burger.id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["burgers"] });
      cancelEditMode();
    },
  });

  const handleSaveClick = () => {
    const values = getValues();
    mutate(values);
  };

  return (
    <TableRow>
      {cellFields.map((field) => (
        <TableCell key={field}>
          <TextField size="small" label={field} {...register(field)} />
        </TableCell>
      ))}
      <TableCell>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={handleSaveClick}
        >
          <Icon>save</Icon>
        </Button>
      </TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          onClick={cancelEditMode}
        >
          <Icon>cancel</Icon>
        </Button>
      </TableCell>
    </TableRow>
  );
};
