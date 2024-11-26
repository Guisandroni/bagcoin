import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from '@mui/material';
import { NumericFormat } from 'react-number-format';

interface EditarOrcamentoModalProps {
  open: boolean;
  onClose: () => void;
  saldoAtual: number;
  onSave: (novoSaldo: number) => void;
}

interface CustomProps {
  onChange: (event: { target: { value: string } }) => void;
  name: string;
}

const NumericFormatCustom = React.forwardRef<HTMLInputElement, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              value: values.value,
            },
          });
        }}
        thousandSeparator="."
        decimalSeparator=","
        prefix="R$ "
        decimalScale={2}
      />
    );
  },
);

const EditarOrcamentoModal: React.FC<EditarOrcamentoModalProps> = ({
  open,
  onClose,
  saldoAtual,
  onSave,
}) => {
  const [valor, setValor] = useState<string>(saldoAtual.toString());
  const [error, setError] = useState<string>('');

  const handleSubmit = () => {
    if (!valor) {
      setError('Por favor, insira um valor');
      return;
    }

    const numeroValor = parseFloat(valor.replace(/\D/g, '')) / 100;
    if (numeroValor < 0) {
      setError('O valor não pode ser negativo');
      return;
    }

    onSave(numeroValor);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Editar Orçamento</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Novo Saldo"
          fullWidth
          value={valor}
          onChange={(e) => {
            setValor(e.target.value);
            setError('');
          }}
          InputProps={{
            inputComponent: NumericFormatCustom as any,
          }}
          error={!!error}
          helperText={error}
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button 
          onClick={onClose}
          variant="outlined"
          sx={{ borderRadius: 2 }}
        >
          Cancelar
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            bgcolor: '#00a86b',
            '&:hover': {
              bgcolor: '#008f5b'
            },
            borderRadius: 2
          }}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarOrcamentoModal;