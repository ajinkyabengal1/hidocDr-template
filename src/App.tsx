import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import MainLayout from "./pages/Home";
import axios from "axios";
import "./assets/styles/MainStyles.css";
import { Data } from "./interface";
const App = () => {
  const [data, setdata] = useState<Data>({});
  const getData = async () => {
    const res = await axios.post(
      "http://devapi.hidoc.co:8080/hidoc-us/drug/getDrugList"
    );

    setdata(res.data.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <MainLayout data={data} />
    </Box>
  );
};

export default App;
