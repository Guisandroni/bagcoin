import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Download, Filter, Menu, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  subtitle: string;
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, subtitle, showSearch = false }) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
      <Box >
        <Typography variant="h6" fontWeight="bold" color="#ffffff">{title}</Typography>
        <Typography variant="h6" fontWeight="bold">{subtitle}</Typography>
      </Box>
      <Box>
        {showSearch ? (
          <>
            <IconButton size="small">
              <Search size={20} />
            </IconButton>
            <IconButton size="small">
              <Filter size={20} />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton size="small">
              <Download size={20} />
            </IconButton>
            <IconButton size="small">
              <Filter size={20} />
            </IconButton>
            <IconButton size="small">
              <Menu size={20} />
            </IconButton>
          </>
        )}
      </Box>
    </Box>
  );
}