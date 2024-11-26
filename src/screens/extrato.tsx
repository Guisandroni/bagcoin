import React, { useState } from 'react';
import { Container } from '@mui/material';
import { Header } from '../components/extratoComponents/Header';
import { MonthSelector } from '../components/extratoComponents/MonthSelector';
import { TransactionItem } from '../components/extratoComponents/TransactionItem';
import { CategoryTabs } from '../components/extratoComponents/CategoryTabs';

export const Extrato = () => {
  const [currentMonth, setCurrentMonth] = useState('novembro');
  const [activeCategory, setActiveCategory] = useState('geral');
  const [navValue, setNavValue] = useState(1);

  return (
    <Container maxWidth="sm" sx={{ pb: 10 }}>
      <Header 
        title="transações"
        subtitle="todos os lançamentos"
        showSearch
      />
      
      <MonthSelector
        currentMonth={currentMonth}
        onPrevMonth={() => setCurrentMonth('outubro')}
        onNextMonth={() => setCurrentMonth('dezembro')}
      />

      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <TransactionItem
        type="roupas"
        title="roupas"
        category="CARTEIRA"
        amount="R$ 320,00"
        date="18 de novembro"
        status="paga"
        paymentType="único"
      />

      <TransactionItem
        type="mercado"
        title="mercado"
        category="CARTEIRA"
        amount="R$ 1.200,00"
        date="13 de novembro"
        status="paga"
        paymentType="único"
      />

      <TransactionItem
        type="salario"
        title="salario"
        category="CARTEIRA"
        amount="R$ 5.000,00"
        date="05 de novembro"
        status="recebido"
        paymentType="único"
      />

     
    </Container>
  );
}