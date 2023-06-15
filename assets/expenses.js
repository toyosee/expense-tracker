// Getting all DOM elements from HTML
const Expenses = document.getElementById('expenses')
const ExpAmount = document.getElementById('amount')
const ExpDate = document.getElementById('date')
const Btn = document.getElementById('update')
const clearBtn = document.getElementById('clear')
const TblBody = document.getElementById('expenseTableBody')

// Declare Empty array to hold expenses
let expenses = []

// Get expenses from local storage location
const itemsFromLocal = localStorage.getItem("expenses")
const expensesFromLocalStorage = JSON.parse(itemsFromLocal)

// Check if there are items in local storage then populate table
if(expensesFromLocalStorage){
     expenses = expensesFromLocalStorage
     populate(expenses);
 }

// function to get all input value from input field
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

// Function to populate the table with data
function populate(update){
    let table = '';
    //let t = ''

    for(let i = 0; i < update.length; i++){
        let expense = update[i]

        table += `<tr>
        <td> ${expense.expense} </td>
        <td> ₦${expense.amount} </td>
        <td> ${expense.date} </td>
        <td><i class="fas fa-trash-alt delete-icon" onclick="deleteExpense(${i})"></i></td>
        </tr>`
        //console.log(t += expense.amount)
        
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

// Event listiners to handle add and delet button events
Btn.addEventListener("click", addExpense);
clearBtn.addEventListener("dblclick", clear)
