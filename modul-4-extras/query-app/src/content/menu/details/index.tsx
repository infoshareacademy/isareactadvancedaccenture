import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import { PageWrapper } from "../../../common/page-wrapper";
import { useQuery } from "@tanstack/react-query";
import { getBurger } from "../../../services/burgers";

const DetailsView = ({ id }: { id: string }) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["burgers", id],
    queryFn: () => getBurger(id),
  });

  if (error) {
    return <PageWrapper title="An error occurred">{error.message}</PageWrapper>;
  }

  return (
    <PageWrapper title={data?.name}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          <Avatar
            src={
              data && data.url
                ? data.url
                : "https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            }
            sx={{ width: "200px", height: "200px" }}
          />
          <Typography variant="h5">{data?.ingredients}</Typography>
          <Typography variant="h6">{data?.price}</Typography>
        </>
      )}
    </PageWrapper>
  );
};

export const Details = () => {
  const params = useParams();

  if (!params.id) {
    return null;
  }

  return <DetailsView id={params.id} />;
};
