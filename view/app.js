let btnExpense = document.querySelector('.btn-add-expense');
let bd = new Bd();

//Event click add expense
btnExpense.addEventListener('click', () => {
   let year = document.querySelector('#ano');
   let month = document.querySelector('#mes');
   let day = document.querySelector('#dia');
   let type = document.querySelector('#tipo');
   let description = document.querySelector('#descricao');
   let amount = document.querySelector('#valor');

   
   //console.log(`Ano: ${year.value} - Mês: ${month.value} - Dia: ${day.value} - Tipo: ${type.value} - Descrição: ${description.value} - Valor: ${amount.value}`);

   let expense = new Expense(year.value, month.value, day.value, type.value, description.value, amount.value);

   bd.sendToLocaleStorage(expense);

});

