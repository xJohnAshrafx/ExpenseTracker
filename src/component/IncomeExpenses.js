        import { useContext } from 'react'
        import React from 'react'
        import { GlobalContext } from './context/GlobalState'
        function IncomeExpenses() {
            const {transactions}=useContext(GlobalContext)
            
            const amounts=transactions.map(transaction=>transaction.amount);
            
            const Income=amounts
            .filter(item=>item>0)
            .reduce((acc,item)=>(acc+=item),0)
            .toFixed(2)


            const Expense=amounts
            .filter(item=>item<0)
            .reduce((acc,item)=>acc-=item,0)
            .toFixed(2)

            return (
            <>
            <div>
            <h4>Income</h4>
            <p className="money plus">{Income}</p>
            </div>
            <div>
            <h4>Expense</h4>
            <p className="money minus">{Expense}</p>
        </div>
        </>

        )
        }

        export default IncomeExpenses
