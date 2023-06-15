const Expenses = document.getElementById('expenses')
const ExpAmount = document.getElementById('amount')
const ExpDate = document.getElementById('date')
const Btn = document.getElementById('update')
const clearBtn = document.getElementById('clear')
const TblBody = document.getElementById('expenseTableBody')

// Empty array to hold expenses
let expenses = []

// Get expenses from local storage

const expensesFromLocalStorage = JSON.parse(localStorage.getItem("expenses"));
if(expensesFromLocalStorage){
     expenses = expensesFromLocalStorage
     populate(expenses);
 }


function addExpense(){

    // Getting value from input field
    let expense = Expenses.value;
    let amount = ExpAmount.value;
    let exDate = ExpDate.value;

    // Creating an object of all input fields and pushing to array
    let newExpense = {expense: expense, amount: amount, date: exDate}
    expenses.push(newExpense)
    console.log(expenses)

    // Cearing input fields
    Expenses.value = ''
    ExpAmount.value = ''
    ExpDate.value = ''

    // convert expenses array to string using JSON.stringify() method
    let expensesString = JSON.stringify(expenses);
    localStorage.setItem("expenses", expensesString);
    populate(expenses);
}

function populate(update){
    let table = '';

    for(let i = 0; i < update.length; i++){
        let expense = update[i]

        table += `<tr>
        <td> ${expense.expense} </td>
        <td> ₦${expense.amount} </td>
        <td> ${expense.date} </td>
        <td><i class="fas fa-trash-alt delete-icon" onclick="deleteExpense(${i})"></i></td>
        </tr>`
        
    }
    TblBody.innerHTML = table;

}

// Clear Single table entry
function deleteExpense(index) {
    let confirmation = `Are you sure you want to delete this item?
                        This action can not be reversed`
    const confirmDelete = window.confirm(confirmation);

    if(confirmDelete){
        expenses.splice(index, 1);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        populate(expenses);
    }
}

// Clear entire local storage and table
function clear(){
    localStorage.clear();
    expenses = []
    populate(expenses)
}


Btn.addEventListener("click", addExpense);
clearBtn.addEventListener("dblclick", clear)
