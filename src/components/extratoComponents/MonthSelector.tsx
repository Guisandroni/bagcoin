import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MonthSelectorProps {
  currentMonth: string;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({
  currentMonth,
  onPrevMonth,
  onNextMonth,
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: '#F1F5F9',
        borderRadius: '30px',
        px: 2,
        py: 1,
        mb: 2,
      }}
    >
      <IconButton onClick={onPrevMonth} size="small">
        <ChevronLeft size={20} />
      </IconButton>
      <Typography variant="subtitle1" fontWeight="medium">
        {currentMonth}
      </Typography>
      <IconButton onClick={onNextMonth} size="small">
        <ChevronRight size={20} />
      </IconButton>
    </Box>
  );
}