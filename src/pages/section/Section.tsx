import { useEffect, useState, useRef } from "react";
import { Grid, Typography, Button, Card, Box } from "@mui/material";
import { Data, Drug, Survey } from "../../interface";
interface MainLayoutProps {
  data: Data;
}
const Section: React.FC<MainLayoutProps> = (props) => {
  const { data } = props;
  const boxRef = useRef<HTMLDivElement | null>();
  const [selectedDrug, setselectedDrug] = useState("ALLEGRA");
  const [info, setinfo] = useState<Drug>({});

  useEffect(() => {
    if (info?.drugName) {
      setselectedDrug(info?.drugName);
    }
  }, [info]);

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: "1rem !important",
          marginBottom: "2rem !important",
          padding: "0 7rem !important",
        }}
      >
        <Grid item md={6}>
          <Card
            sx={{
              border: "3px solid black",
              borderRadius: "0 !important",
              mr: "0.5rem !important",
            }}
          >
            <Box sx={{ borderBottom: "3px solid black" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textAlign: "center",
                  padding: "0.5rem 0rem !important",
                }}
              >
                Drug Data
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem !important",
                display: "flex",
                flexDirection: "column",
              }}
              ref={boxRef}
            >
              {data?.drugData?.map((item: Drug) => (
                <Button
                  onClick={() => setinfo(item)}
                  sx={{
                    display: "block !important",
                    padding: "0.5rem !important",
                    textAlign: "center",
                    border: "1px solid black",
                    margin: "0.5rem 0rem !important",
                  }}
                  variant={
                    selectedDrug == item.drugName ? "contained" : "outlined"
                  }
                >
                  {item.drugName}
                </Button>
              ))}
            </Box>
          </Card>
        </Grid>
        <Grid item md={6}>
          <Card
            sx={{ border: "3px solid black", borderRadius: "0 !important" }}
          >
            <Box sx={{ borderBottom: "3px solid black" }}>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textAlign: "center",
                  padding: "0.5rem 0rem !important",
                }}
              >
                Drug Details
              </Typography>
            </Box>
            <Box
              sx={{
                px: "1rem !important",
                height: boxRef?.current?.clientHeight,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography className="details-name">{info.drugName}</Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  marginTop: "2rem !important",
                  fontSize: "0.8rem !important",
                }}
              >
                {info.drugDetails}
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container sx={{ padding: "0 5rem !important" }} spacing={2}>
        <Grid item sm={12} md={3}>
          <img
            src={data?.exploreMore?.news?.urlToImage}
            alt=""
            className="section-image"
          />
        </Grid>
        <Grid item sm={12} md={3} sx={{ paddingLeft: "1rem !important" }}>
          <h2>{data?.exploreMore?.news?.title}</h2>
        </Grid>
        <Grid item sm={12} md={3}>
          <h2> {data?.exploreMore?.article?.articleTitle}</h2>
          <Typography variant="body1" color="initial">
            {data?.exploreMore?.article?.metaDescription}
          </Typography>
        </Grid>
        <Grid item sm={12} md={3}>
          {data?.exploreMore?.survey?.map((item: Survey) => (
            <>
              <h2>{item?.surveyName}</h2>
              <Typography>{item?.metaDescription}</Typography>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Section;
