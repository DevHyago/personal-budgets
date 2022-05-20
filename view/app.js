let modal = document.querySelector('#register-expense');
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
   let modalFooter = modal.querySelector('.modal-footer').querySelector('.btn');
   
   //console.log(`Ano: ${year.value} - Mês: ${month.value} - Dia: ${day.value} - Tipo: ${type.value} - Descrição: ${description.value} - Valor: ${amount.value}`);

   let expense = new Expense(year.value, month.value, day.value, type.value, description.value, amount.value);
   

   if(expense.dataValidation()){
      bd.sendToLocaleStorage(expense);
      $('#register-expense').modal('show');
      modal.querySelector('.modal-header').classList.add('text-success');
      modal.querySelector('.modal-title').innerHTML = 'Registro inserido com sucesso';
      modal.querySelector('.modal-body').innerHTML = 'Despesa foi cadastrada com sucesso!';
      modalFooter.classList.add('btn-success');
      modalFooter.innerHTML = 'Fechar';
   }else{
      $('#register-expense').modal('show');
      modal.querySelector('.modal-header').classList.add('text-danger');
      modal.querySelector('.modal-title').innerHTML = 'Erro na validação de dados';
      modal.querySelector('.modal-body').innerHTML = 'Existem dados obrigatórios que não foram preenchidos!';
      modalFooter.classList.add('btn-danger');
      modalFooter.innerHTML = 'Voltar e corrigir';
   } 

});

