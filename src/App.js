import './App.css';
import Balance from './component/Balance';
import Header from './component/Header';
import IncomeExpenses from './component/IncomeExpenses';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import { GlobalProvider } from './component/context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Header/>
      <div className='container'>
        <Balance/>
      </div>
      <div className="inc-exp-container">
        <IncomeExpenses/> 
      </div>
      <TransactionList/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
