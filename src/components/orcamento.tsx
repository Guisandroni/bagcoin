import BalanceCard from "./BalanceCard"
import { WalletsList } from "./wallets/wallets"
import SavingsIcon from '@mui/icons-material/Savings';

const mockWallets = [
  {
    id: "1",
    name: "Saldo Atual",
    balance: 3480,
    icon: "/placeholder.svg?height=40&width=40"
  },

]

export  function Orcamento() {
  return (
    <main className="container max-w-md p-4 mx-auto space-y-6">
      <WalletsList wallets={mockWallets} />
    </main>
  )
}

