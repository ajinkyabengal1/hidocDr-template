import { Box, Grid, Typography } from "@mui/material";
import logo from "../../assets/images/logo-dark.png";
import { TiSocialFacebook, TiSocialLinkedin } from "react-icons/ti";
import { SiYoutube } from "react-icons/si";
import {
  AiOutlineInstagram,
  AiOutlineFolder,
  AiOutlineFileText,
  AiFillCalculator,
  AiOutlineTrophy,
} from "react-icons/ai";
import { SiGooglemeet } from "react-icons/si";
const Footer = () => {
  return (
    <Box className="footer-container">
      <Grid container className="footer-grid">
        <Grid item container sm={12} md={7}>
          <Grid item sm={6} sx={{ padding: "1rem !important" }}>
            <img src={logo} alt="" />
            <Typography
              sx={{
                color: "white !important",
                paddingRight: "6rem !important",
                marginTop: "0.5rem !important",
                fontSize: "0.75rem",
              }}
            >
              Fastest Growing Medical Platform For Doctors
            </Typography>
            <Box
              sx={{
                marginTop: "1rem !important",
                paddingRight: "8rem !important",
                display: "flex !important",
                justifyContent: "space-between !important",
              }}
            >
              <TiSocialFacebook color="white" size="30px" />
              <AiOutlineInstagram color="white" size="30px" />
              <SiYoutube color="white" size="30px" />
              <TiSocialLinkedin color="white" size="30px" />
            </Box>
          </Grid>
          <Grid item sm={6} sx={{ color: "white !important" }}>
            <Typography variant="h5">REACH US</Typography>
            <Typography
              sx={{
                marginTop: "1rem !important",
                fontSize: "0.75rem !important",
                color: "white",
                paddingRight: "2rem !important",
              }}
            >
              Plase Contact below information for any other information
            </Typography>
            <Typography
              sx={{
                marginTop: "1rem !important",
                fontSize: "0.75rem !important",
                color: "white",
                paddingRight: "2rem !important",
              }}
            >
              <a href="">Email:</a>
              <p>info@hidoc.co</p>
            </Typography>
            <Typography
              sx={{
                marginTop: "1rem !important",
                fontSize: "0.75rem !important",
                color: "white",
                paddingRight: "2rem !important",
              }}
            >
              <a href="">Address:</a>
              <p>
                Hidoc Dr. Inc, 2055 limestone Rd, STE
                200-C,Wilminton,DE,19808,United States.
              </p>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          sm={12}
          md={5}
          sx={{ padding: "0 !important", margin: "0 !important" }}
          spacing={0}
        >
          <Typography
            variant="h6"
            sx={{
              color: "white",
              marginBottom: "1rem !important",
              paddingLeft: "4rem !important",
            }}
          >
            HIDOC DR. FEATURES
          </Typography>

          <Box className="footer-features">
            <span className="cyan">
              <Box
                className="icon"
                sx={{ backgroundColor: "#4da8bf !important" }}
              >
                <AiOutlineFolder color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
            <span className="orange">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#de501d !important" }}
              >
                <SiGooglemeet color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
            <span className="aqua">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#4d7ae3 !important" }}
              >
                <AiOutlineFileText color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
            <span className="aqua">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#439e31 !important" }}
              >
                <AiFillCalculator color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
          </Box>
          <Box
            className="footer-features"
            sx={{ transform: "translateY(-10px) !important" }}
          >
            <span className="orange-lite">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#d99307 !important" }}
              >
                <AiOutlineFileText color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
            <span className="aqua">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#4d7ae3 !important" }}
              >
                <AiOutlineTrophy color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
            <span className="cyan">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#4da8bf !important" }}
              >
                <AiOutlineFileText color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
            <span className="orange">
              {" "}
              <Box
                className="icon"
                sx={{ backgroundColor: "#de501d !important" }}
              >
                <AiOutlineFileText color="white" />
              </Box>
              <Typography
                className="typo"
                sx={{ fontSize: "0.65rem !important" }}
              >
                Drug Database
              </Typography>
            </span>
          </Box>
        </Grid>
      </Grid>
      <div className="footer-area-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="copyright text-center">
                <p>&copy; Copyright 2023 Hidoc Dr. Inc</p>
              </div>
              <div className="credits">
                <p>
                  Terms & Conditions | Privacy policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Footer;
