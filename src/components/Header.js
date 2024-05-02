import { Typography, Box, useTheme } from "@mui/material";
import {brand,secondary} from "../GlobalTheme";

const Header = ({ title, subtitle }) => {
  
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={brand[100]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={brand[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;