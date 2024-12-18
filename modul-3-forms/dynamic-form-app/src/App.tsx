import { useState, useEffect } from "react";
import { useForm, useWatch, useFieldArray } from "react-hook-form";
import {
  TextField,
  FormLabel,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";

type FormData = {
  name: string;
  surname: string;
  age: number;
  year: number;
  hobbys: { value: string }[];
};

function App() {
  const [newHobby, setNewHobby] = useState("");
  const { register, handleSubmit, control, setValue } = useForm<FormData>();
  const ageFieldValue = useWatch({ control, name: "age" });
  const { fields, append, remove } = useFieldArray({ control, name: "hobbys" });

  const onSubmit = (data: FormData) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const onAddHobby = () => {
    append({ value: newHobby });
    setNewHobby(""); // reset formularza do hobby
  };

  useEffect(() => {
    if (ageFieldValue) {
      setValue("year", 2024 - ageFieldValue);
    }
  }, [ageFieldValue, setValue]);

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
        Sign to our app
      </Typography>
      <FormLabel>Name</FormLabel>
      <TextField margin="normal" {...register("name")} />
      <FormLabel>Surname</FormLabel>
      <TextField margin="normal" {...register("surname")} />
      <FormLabel>Age</FormLabel>
      <TextField
        margin="normal"
        {...register("age", { valueAsNumber: true })}
      />
      <FormLabel>Year of birth</FormLabel>
      <TextField
        margin="normal"
        {...register("year", { valueAsNumber: true })}
      />
      <FormLabel>Hobbys</FormLabel>
      <Grid container marginTop={2}>
        {fields.map((field, index) => (
          <Grid
            item
            alignItems="stretch"
            style={{ display: "flex" }}
            key={field.id}
          >
            <TextField {...register(`hobbys.${index}.value`)} />
            <Button
              variant="contained"
              color="error"
              onClick={() => remove(index)}
            >
              X
            </Button>
          </Grid>
        ))}
      </Grid>

      <Grid container marginTop={2}>
        <Grid item alignItems="stretch">
          <TextField
            value={newHobby}
            onChange={(e) => setNewHobby(e.target.value)}
          />
        </Grid>
        <Grid item alignItems="stretch" style={{ display: "flex" }}>
          <Button color="primary" variant="contained" onClick={onAddHobby}>
            Add
          </Button>
        </Grid>
      </Grid>
      <Button type="submit">Send</Button>
    </Box>
  );
}

export default App;
