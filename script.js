//VALUES AND VARIABLES
let income = 0;
let expenses = [];

//SELECTING ELEMENTS
const incomeInputEl = document.getElementById("incomeInput");
const expenseNameEl = document.getElementById("expenseName");
const expenseAmountEl = document.getElementById("expenseAmount");
const addExpenseBtnEl = document.getElementById("addExpenseBtn");
const totalIncomeEl = document.getElementById("totalIncome");
const totalExpenseEl = document.getElementById("totalExpense");
const remainingBalanceEl = document.getElementById("remainingBalance");
const messageEl = document.getElementById("message");
const expenseListEl = document.getElementById("expenseList");

function updateSummary() {
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = income - totalExpenses;

  // update DOM
  totalIncomeEl.textContent = income;
  totalExpenseEl.textContent = totalExpenses;
  remainingBalanceEl.textContent = remaining;
}
