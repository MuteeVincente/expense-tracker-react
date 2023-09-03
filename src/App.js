import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TranscationList';

import './App.css';
import TranscationList from './components/TranscationList';

function App() {
  return (
    <div>
      <Header/>
    <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
    </div>
    </div>
  );
}

export default App;
