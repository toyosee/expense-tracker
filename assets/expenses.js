const Expenses = document.getElementById('expenses')
const ExpAmount = document.getElementById('amount')
const ExpDate = document.getElementById('date')
const Btn = document.getElementById('update')
const clearBtn = document.getElementById('clear')
const TblBody = document.getElementById('expenseTableBody')

// Empty array to hold expenses
const expenses = []
const approval = []

function addExpense(){

    // Getting value from input field
    let expense = Expenses.value;
    let amount = ExpAmount.value;
    let exDate = ExpDate.value;

    let newExpense = {expense: expense, amount: amount, date: exDate}
    expenses.push(newExpense)
    console.log(expenses)

    // Cearing input fields
    Expenses.value = ''
    ExpAmount.value = ''
    ExpDate.value = ''

    populate(expenses);
}

function populate(update){
    let table = '';

    for(let i = 0; i < update.length; i++){
        let expense = update[i]

        table += `<tr>
        <td> ${expense.expense} </td>
        <td> ${expense.amount} </td>
        <td> ${expense.date} </td>
        </tr>`
        
    }
    TblBody.innerHTML = table;

}

// function clear(){
//     expenses = []
//     TblBody.innerHTML = ''
// }


Btn.addEventListener("click", addExpense);
//clearBtn.addEventListener("dblclick", clear)
