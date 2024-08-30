import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body1">My App Footer</Typography>
    </Box>
  );
};

export default Footer;
