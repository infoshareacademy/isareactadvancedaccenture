import { Link } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PageWrapper } from "../../common/page-wrapper";
import { Burger } from "../../common/types";
import { getBurgers } from "../../services/burgers";

export const Menu = () => {
  const { data, error } = useSuspenseQuery({
    queryKey: ["burgers"],
    queryFn: getBurgers,
    staleTime: 5000,
  });

  if (error) {
    return <PageWrapper title="An error occurred">{error.message}</PageWrapper>;
  }

  return (
    <PageWrapper title="Menu">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Ingredients</TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((burger: Burger) => (
              <TableRow key={burger.id}>
                <TableCell>
                  <Link to={burger.id}>{burger.name}</Link>
                </TableCell>
                <TableCell align="right">{burger.ingredients}</TableCell>
                <TableCell align="right">{burger.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </PageWrapper>
  );
};
