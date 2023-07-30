import React from "react";
import { Box } from "@mui/material";
import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";
const MainLayout = ({ data }) => {
  return (
    <Box>
      <Header data={data} />
      <Section data={data} />
      <Footer />
    </Box>
  );
};

export default MainLayout;
