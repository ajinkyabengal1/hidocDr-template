import { Box } from "@mui/material";
import  { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
const Search = () => {
  const ref: any = useRef<HTMLInputElement>();
  return (
    <Box className="search" onClick={() => ref?.current.focus()}>
      <span>Enter Drug Type</span>
      <input type="text" name="" id="" ref={ref} />
      <BiSearchAlt2 className="search-icon" />
    </Box>
  );
};

export default Search;
