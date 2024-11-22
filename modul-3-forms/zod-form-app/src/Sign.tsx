import {
  TextField,
  FormLabel,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    name: z.string(),
    surname: z.string(),
    number: z.string(),
    work: z.enum(["employed", "unemployed"]),
    company: z.string().optional(),
    role: z.string().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.work === "employed") {
      if (val.company === "") {
        ctx.addIssue({
          code: "custom",
          message: "Company i role jest wymagane",
          path: ["company"],
        });
      }

      if (val.role === "") {
        ctx.addIssue({
          code: "custom",
          message: "Company i role jest wymagane",
          path: ["role"],
        });
      }
    }
  });

type FormData = {
  name: string;
  surname: string;
  number: string;
  work: "employed" | "unemployed";
  company?: string;
  role?: string;
};

export const Sign = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const workFieldValue = useWatch({ control, name: "work" });

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const getFieldProps = (fieldName: keyof FormData) => ({
    ...register(fieldName),
    error: !!errors[fieldName],
    helperText: errors[fieldName]?.message,
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "50%",
        margin: "auto",
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h4" marginBottom={5}>
        Sign to conference
      </Typography>

      <FormLabel>Name</FormLabel>
      <TextField margin="normal" {...getFieldProps("name")} />

      <FormLabel>Surname</FormLabel>
      <TextField margin="normal" {...getFieldProps("surname")} />

      <FormLabel>Number</FormLabel>
      <TextField margin="normal" type="number" {...getFieldProps("number")} />

      <FormLabel>Work</FormLabel>
      <Select {...register("work")}>
        <MenuItem value="employed">employed</MenuItem>
        <MenuItem value="unemployed">unemployed</MenuItem>
      </Select>

      {workFieldValue === "employed" && (
        <>
          <FormLabel>Company</FormLabel>
          <TextField margin="normal" {...getFieldProps("company")} />

          <FormLabel>Role</FormLabel>
          <TextField margin="normal" {...getFieldProps("role")} />
        </>
      )}

      <Button type="submit">Send</Button>
    </Box>
  );
};
