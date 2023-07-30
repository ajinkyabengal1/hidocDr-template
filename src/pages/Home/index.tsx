import { Box } from "@mui/material";
import Header from "../header/Header";
import Section from "../section/Section";
import Footer from "../footer/Footer";
import { Data } from "../../interface";
interface MainLayoutProps {
  data: Data;
}
const MainLayout: React.FC<MainLayoutProps> = (props) => {
  const { data } = props as { data: Data };
  return (
    <Box>
      <Header data={data} />
      <Section data={data} />
      <Footer />
    </Box>
  );
};

export default MainLayout;
