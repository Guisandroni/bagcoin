import React from 'react';
import { Paper, BottomNavigation as MuiBottomNavigation, BottomNavigationAction, Fab } from '@mui/material';
import { Home, Menu, BarChart2, User, PlusCircle } from 'lucide-react';

interface BottomNavigationProps {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ value, onChange }) => {
  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: '20px 20px 0 0',
      }}
      elevation={3}
    >
      <MuiBottomNavigation
        value={value}
        onChange={onChange}
        sx={{
          height: 70,
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
          },
        }}
      >
        <BottomNavigationAction icon={<Home size={24} />} />
        <BottomNavigationAction icon={<Menu size={24} />} />
        <BottomNavigationAction
          icon={
            <Fab
              color="primary"
              sx={{
                position: 'relative',
                top: -20,
                bgcolor: '#00C853',
                '&:hover': {
                  bgcolor: '#00B34A',
                },
              }}
            >
              <PlusCircle size={24} />
            </Fab>
          }
        />
        <BottomNavigationAction icon={<BarChart2 size={24} />} />
        <BottomNavigationAction icon={<User size={24} />} />
      </MuiBottomNavigation>
    </Paper>
  );
}