import {
  TextField,
  FormLabel,
  Box,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

export const Sign = () => {
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
    >
      <Typography variant="h4" marginBottom={5}>
        Sign to conference
      </Typography>

      <FormLabel>Name</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Surname</FormLabel>
      <TextField margin="normal" />

      <FormLabel>Number</FormLabel>
      <TextField margin="normal" type="number" />

      <FormLabel>Work</FormLabel>
      <Select>
        <MenuItem value="employed">employed</MenuItem>
        <MenuItem value="unemployed">unemployed</MenuItem>
      </Select>

      {/* pokazuj tylko dla wyboru "employed" */}
      {/* {(
        <>
          <FormLabel>Company</FormLabel>
          <TextField margin="normal" />

          <FormLabel>Role</FormLabel>
          <TextField margin="normal" />
        </>
      )} */}

      <Button type="submit">Send</Button>
    </Box>
  );
};
