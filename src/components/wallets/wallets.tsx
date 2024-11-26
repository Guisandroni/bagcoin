"use client"

import { Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardActions, Typography, IconButton, Box, Divider } from "@mui/material"

interface Wallet {
  id: string
  name: string
  balance: number
  icon: string
}

interface WalletsListProps {
  wallets: Wallet[]
  onAddWallet?: () => void
}

export function WalletsList({ wallets, onAddWallet }: WalletsListProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value)
  }

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" fontSize="1rem">
            Orçamentos
          </Typography>
        }
        action={
          <IconButton onClick={onAddWallet} size="small">
            <Plus />
          </IconButton>
        }
      />
      <Divider />
      <CardContent>
        {wallets.length === 0 ? (
          <Box sx={{ py: 6, textAlign: "center", color: "text.secondary" }}>
            Você não tem nenhuma conta cadastrada
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {wallets.map((wallet) => (
              <Box
                key={wallet.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 1,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      overflow: "hidden",
                    }}
                  >
                   
                  </Box>
                  <Typography fontWeight="medium">{wallet.name}</Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                  <Typography variant="body2" color="text.secondary">
                    Saldo de
                  </Typography>
                  <Typography fontWeight="medium">
                    {formatCurrency(wallet.balance)}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </CardContent>
      
    </Card>
  )
}
