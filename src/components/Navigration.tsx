import { Avatar, Box, Button } from "@mui/material";
import logo from "../assets/images/logo.png";
import { AiOutlineTrophy } from "react-icons/ai";
import { GrMenu } from "react-icons/gr";
const Navigration = () => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "auto",
        maxHeight: "50px !important",
        display: "flex !important",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 0 !important",
        paddingRight: "1rem !important",
      }}
    >
      <Box component="img" src={logo} height="auto !important" width="150px" />
      <Box className="nav-links">
        <span>Drugs</span>|<span>Calculators</span>|<span>Articles</span>|
        <span>News</span>|<span>Quizzes</span>|<span>Surveys</span>|
        <span>Webinars</span>|<span>Guidelines</span>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <GrMenu /> &nbsp; &nbsp;
        <Button
          variant="outlined"
          sx={{
            p: 0,
            color: "orange",
            borderRadius: "15px",
            fontWeight: "700 !important",
          }}
        >
          <AiOutlineTrophy color="black" />
          274
        </Button>
        &nbsp;
        <Avatar
          sx={{
            background: "none !important",
            border: "1px solid black",
            color: "black",
            height: "30px",
            width: "30px",
          }}
        >
          A
        </Avatar>
      </Box>
    </Box>
  );
};

export default Navigration;
