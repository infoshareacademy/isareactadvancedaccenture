import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PageWrapper } from "../../common/page-wrapper";
import { AddModalButton } from "./add-modal-button";
import { Row } from "./row";
import { Burger } from "../../common/types";
import { useQuery } from "@tanstack/react-query";
import { getBurgers } from "../../services/burgers";
import { CircularProgress } from "@mui/material";

export const Admin = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["burgers"],
    queryFn: getBurgers,
  });

  if (error) {
    return <PageWrapper title="An error occurred">{error.message}</PageWrapper>;
  }

  if (isLoading) {
    return (
      <PageWrapper>
        <CircularProgress />
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title="Admin">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell sx={{ width: "64px" }} />
              <TableCell sx={{ width: "64px" }} />
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((burger: Burger) => (
              <Row key={burger.id} burger={burger} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ alignSelf: "flex-end", marginTop: 1 }}>
        <AddModalButton />
      </Box>
    </PageWrapper>
  );
};
