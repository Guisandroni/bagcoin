import React, { useState } from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions, 
  TextField, 
  Button, 
  IconButton,
  InputAdornment,
  styled
} from '@mui/material';
import { Tag, X } from 'lucide-react';

interface CategoryFormProps {
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
  },
}));

const ColorButton = styled(IconButton)(({ theme, color }) => ({
  width: 40,
  height: 40,
  backgroundColor: color,
  '&:hover': {
    backgroundColor: color,
  },
}));

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F06292', '#AED581', '#FFD54F'];

export const CategoryForm: React.FC<CategoryFormProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the new category
    console.log('New category:', { name, color: selectedColor });
    onClose();
  };

  return (
    <StyledDialog open={true} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        Criar Nova Categoria
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <X />
        </IconButton>
      </DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome da Categoria"
            type="text"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Tag color={selectedColor} />
                </InputAdornment>
              ),
            }}
          />
          <div style={{ marginTop: 16 }}>
            {colors.map((color) => (
              <ColorButton
                key={color}
                color={color}
                onClick={() => setSelectedColor(color)}
                sx={{ margin: 0.5 }}
              >
                {color === selectedColor && <Tag color="white" />}
              </ColorButton>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button type="submit" variant="contained" color="primary">
            Criar
          </Button>
        </DialogActions>
      </form>
    </StyledDialog>
  );
};

