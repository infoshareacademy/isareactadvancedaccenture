import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { BurgerData } from "../../../common/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBurger } from "../../../services/burgers";

type Props = {
  handleClose: () => void;
  isOpen: boolean;
};

const fields: ("name" | "ingredients" | "price" | "url")[] = [
  "name",
  "ingredients",
  "price",
  "url",
];

export const AddModal = ({ handleClose, isOpen }: Props) => {
  const { register, handleSubmit } = useForm<BurgerData>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addBurger,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["burgers"] });
      handleClose();
    },
  });

  const onSubmit = (data: BurgerData) => {
    mutate(data);
  };

  return (
    <Dialog onClose={handleClose} open={isOpen} fullWidth>
      <DialogTitle>Add new burger</DialogTitle>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", padding: 3 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((field) => (
          <TextField key={field} label={field} {...register(field)} />
        ))}
        <Button type="submit">Add</Button>
      </Box>
    </Dialog>
  );
};
