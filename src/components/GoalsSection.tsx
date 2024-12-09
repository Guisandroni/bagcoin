
import { useState } from 'react'
import { 
  Box,
  Card,
  Typography,
  IconButton,
  LinearProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Menu,
  MenuItem,
  styled
} from '@mui/material'
import { Target, TrendingUp, Coffee, Car, Home, MoreVertical, Edit2, Plus } from 'lucide-react'

const IconWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'color',
})<{ color: string }>(({ color }) => ({
  width: 40,
  height: 40,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color,
  color: 'white',
}))

interface Goal {
  id: number
  title: string
  description: string
  current: number
  target: number
  icon: any
  color: string
}

export default function GoalsSection() {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: 1,
      title: 'Investimentos',
      description: 'Meta mensal',
      current: 800,
      target: 1000,
      icon: TrendingUp,
      color: '#1a73e8'
    },
    {
      id: 2,
      title: 'Férias',
      description: 'Meta anual',
      current: 3000,
      target: 8000,
      icon: Coffee,
      color: '#34a853'
    },
    {
      id: 3,
      title: 'Carro novo',
      description: 'Meta longo prazo',
      current: 15000,
      target: 50000,
      icon: Car,
      color: '#ea4335'
    }
  ])

  const [editDialogOpen, setEditDialogOpen] = useState(false)
  const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null)
  const [editValue, setEditValue] = useState('')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [addValueDialogOpen, setAddValueDialogOpen] = useState(false)
  const [additionalValue, setAdditionalValue] = useState('')

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, goal: Goal) => {
    setAnchorEl(event.currentTarget)
    setSelectedGoal(goal)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleEditClick = () => {
    if (selectedGoal) {
      setEditValue(selectedGoal.target.toString())
      setEditDialogOpen(true)
    }
    handleMenuClose()
  }

  const handleAddValueClick = () => {
    setAddValueDialogOpen(true)
    handleMenuClose()
  }

  const handleSaveEdit = () => {
    if (selectedGoal) {
      const newGoals = goals.map(goal => 
        goal.id === selectedGoal.id 
          ? { ...goal, target: Number(editValue) }
          : goal
      )
      setGoals(newGoals)
    }
    setEditDialogOpen(false)
  }

  const handleSaveAddValue = () => {
    if (selectedGoal) {
      const newGoals = goals.map(goal => 
        goal.id === selectedGoal.id 
          ? { ...goal, current: goal.current + Number(additionalValue) }
          : goal
      )
      setGoals(newGoals)
    }
    setAddValueDialogOpen(false)
    setAdditionalValue('')
  }

  return (
    <Box sx={{ p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" fontWeight="600">
          Minhas Metas
        </Typography>
        <Target size={24} />
      </Box>

      {goals.map(goal => (
        <Card key={goal.id} sx={{ mb: 2, p: 2, borderRadius: 3 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <IconWrapper color={goal.color}>
              <goal.icon size={20} />
            </IconWrapper>
            <Box sx={{ flex: 1, ml: 2 }}>
              <Typography variant="subtitle1" fontWeight="600">
                {goal.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {goal.description}
              </Typography>
            </Box>
            <IconButton onClick={(e) => handleMenuClick(e, goal)}>
              <MoreVertical size={20} />
            </IconButton>
          </Box>
          
          <LinearProgress
            variant="determinate"
            value={(goal.current / goal.target) * 100}
            sx={{
              height: 8,
              borderRadius: 4,
              bgcolor: '#e0e0e0',
              mb: 1,
              '& .MuiLinearProgress-bar': {
                bgcolor: goal.color,
              },
            }}
          />
          
          <Box sx={{ display: 'flex', justifyContent: 'space-between', color: 'text.secondary' }}>
            <Typography variant="body2">
              R$ {goal.current.toLocaleString('pt-BR')}
            </Typography>
            <Typography variant="body2" fontWeight="600">
              R$ {goal.target.toLocaleString('pt-BR')}
            </Typography>
          </Box>
        </Card>
      ))}

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleEditClick}>
          <Edit2 size={16} style={{ marginRight: 8 }} />
          Editar meta
        </MenuItem>
        <MenuItem onClick={handleAddValueClick}>
          <Plus size={16} style={{ marginRight: 8 }} />
          Adicionar valor
        </MenuItem>
      </Menu>

      <Dialog open={editDialogOpen} onClose={() => setEditDialogOpen(false)}>
        <DialogTitle>Editar Meta</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Valor da meta"
            type="number"
            fullWidth
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>R$</Typography>,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleSaveEdit} variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={addValueDialogOpen} onClose={() => setAddValueDialogOpen(false)}>
        <DialogTitle>Adicionar Valor</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Valor a adicionar"
            type="number"
            fullWidth
            value={additionalValue}
            onChange={(e) => setAdditionalValue(e.target.value)}
            InputProps={{
              startAdornment: <Typography sx={{ mr: 1 }}>R$</Typography>,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddValueDialogOpen(false)}>Cancelar</Button>
          <Button onClick={handleSaveAddValue} variant="contained">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}

