import { useMutation, useQuery } from "@tanstack/react-query";
import React, {useEffect, useState} from 'react';
import { fbLogin } from "../util/http";
import Facebooklogin from 'react-facebook-login';
import { useTheme } from "@mui/material";

import PropTypes from 'prop-types';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from '../components/LandingPageComps/AppAppBar';
import Hero from '../components/LandingPageComps/Hero';
import LogoCollection from '../components/LandingPageComps/LogoCollection';
import Highlights from '../components/LandingPageComps/Highlights';
import Pricing from '../components/LandingPageComps/Pricing';
import Features from '../components/LandingPageComps/Features';
import Testimonials from '../components/LandingPageComps/Testimonials';
import FAQ from '../components/LandingPageComps/FAQ';
import Footer from '../components/LandingPageComps/Footer';
// import getLPTheme,{brand,secondary} from '../GlobalTheme';
import { ColorModeContext, tokens } from "../CollabTheme";
import { useContext } from "react";

// const ToggleCustomTheme = ({ showCustomTheme, toggleCustomTheme }) => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         width: '100dvw',
//         position: 'fixed',
//         bottom: 24,
//       }}
//     >
//       <ToggleButtonGroup
//         color="primary"
//         exclusive
//         value={showCustomTheme}
//         onChange={toggleCustomTheme}
//         aria-label="Platform"
//         sx={{
//           backgroundColor: 'background.default',
//           '& .Mui-selected': {
//             pointerEvents: 'none',
//           },
//         }}
//       >
//         <ToggleButton value>
//           <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
//           Custom theme
//         </ToggleButton>
//         <ToggleButton value={false}>Material Design 2</ToggleButton>
//       </ToggleButtonGroup>
//     </Box>
//   );
// }

// ToggleCustomTheme.propTypes = {
//   showCustomTheme: PropTypes.shape({
//     valueOf: PropTypes.func.isRequired,
//   }).isRequired,
//   toggleCustomTheme: PropTypes.func.isRequired,
// };

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <>
      <AppAppBar mode={theme.palette.mode} toggleColorMode={colorMode.toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: colors.primary[400] }}>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        <Pricing />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
    </>
  );
}
export default Login;