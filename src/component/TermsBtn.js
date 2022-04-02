import React from 'react';
import { Box } from '@mui/system';
import { Link, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";


const TermsBtn = () => {
    const navigate = useNavigate()
  return (
    <Box>
        <Typography>I agree to <Link onClick={() => navigate("/terms-and-condition")}>Terms and conditions</Link></Typography>
    </Box>
  )
}

export default TermsBtn