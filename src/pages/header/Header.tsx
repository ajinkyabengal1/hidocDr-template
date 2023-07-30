import { useState } from "react";
import Navigration from "../../components/Navigration";
import { Typography, Box, Grid, Button } from "@mui/material";
import Search from "../../components/Search";
import {Data} from '../../interface'
interface MainLayoutProps {
  data: Data;
}
const Header: React.FC<MainLayoutProps> = (props) => {
  
  const { data } = props as { data: Data };

  console.log(data);
  const [selectedButton, setSelectedButton] = useState<string>("");
  const buttonArr = [
    "Anesthesia",
    "Cardiology",
    "Critical Care",
    "Dentisty",
    "Dermatology",
    "Diabetology",
  ];

  return (
    <Box className="header">
      <Navigration />
      <Typography className="header-title" variant="h5">
        Your one stop Solution for &nbsp;&nbsp;
        <span>MEDIACAL LEARNING & UPDATES</span>
      </Typography>
      <Box
        sx={{
          display: "flex",
          padding: "0 10rem !important",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ display: "flex", textAlign: "end" }} variant="h5">
          <Box>Get The Knowledge Of</Box>
          <Box>Approved Drugs</Box>
        </Typography>
        <Box sx={{ padding: "1rem 0 !important" }}>
          <Search />
        </Box>
      </Box>
      <Grid container sx={{ padding: "0 5rem !important" }}>
        <Grid item md={6}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est mollitia
          dolorem ad explicabo perferendis nihil asperiores pariatur fugit,
          animi consequuntur temporibus quas praesentium voluptatum accusantium
          alias quos quo optio molestiae.
        </Grid>
        <Grid item container md={6}>
          {buttonArr.map((item: string) => (
            <Grid
              item
              md={4}
              sx={{ marginBottom: "0.5rem !important" }}
              onClick={() => setSelectedButton(item)}
            >
              <Button
                variant={selectedButton == item ? "contained" : "outlined"}
                sx={{
                  fontSize: "0.7rem !important",
                  padding: "0.5rem 1rem !important",
                }}
              >
                {item}
              </Button>
            </Grid>
          ))}{" "}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
