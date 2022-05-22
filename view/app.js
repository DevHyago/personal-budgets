let modal = document.querySelector('#register-expense');
let listExpense = document.querySelector('#listExpense');
let bd = new Bd();

//Event click add expense
function addExpense () {
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
      year.value = '';
      month.value = '';
      day.value = '';
      type.value = '';
      description.value = '';
      amount.value = '';
   }else{
      $('#register-expense').modal('show');
      modal.querySelector('.modal-header').classList.add('text-danger');
      modal.querySelector('.modal-title').innerHTML = 'Erro na validação de dados';
      modal.querySelector('.modal-body').innerHTML = 'Existem dados obrigatórios que não foram preenchidos!';
      modalFooter.classList.add('btn-danger');
      modalFooter.innerHTML = 'Voltar e corrigir';
   } 

};

function loadExpenseList(){
   let expenses = bd.retrieveAllRecords();
   
   loadExpenseListInHtml(expenses);

}


//Pesquisar despesa
function searchExpense(){
   let year = document.querySelector('#ano').value;
   let month = document.querySelector('#mes').value;
   let day = document.querySelector('#dia').value;
   let type = document.querySelector('#tipo').value;
   let description = document.querySelector('#descricao').value;
   let amount = document.querySelector('#valor').value;

   let expense = new Expense(year, month, day, type, description, amount);

   let filterExpense = bd.search(expense);
   
   loadExpenseListInHtml(filterExpense);

}


/******* INCLUINDO DESPESAS NO HTML ******/
function loadExpenseListInHtml(list = []){

   listExpense.innerHTML = '';

   list.forEach((Element, index) => {

      //Criando Linha
      let line = listExpense.insertRow();
      //Criando Colunas
      line.insertCell(0).innerHTML = `${Element.day}/${Element.month < 10 ? '0'.concat(Element.month) : Element.month}/${Element.year}`;
      switch(parseInt(Element.type)){
         case 1:
            line.insertCell(1).innerHTML = `Alimentação`;
         break;
         case 2:
            line.insertCell(1).innerHTML = `Educação`;
         break;
         case 3:
            line.insertCell(1).innerHTML = `Lazer`;
         break;
         case 4:
            line.insertCell(1).innerHTML = `Saúde`;
         break;
         case 5:
            line.insertCell(1).innerHTML = `Transporte`;
         break;
         case 6:
            line.insertCell(1).innerHTML = `Conta`;
         break;
         default:
            line.insertCell(1).innerHTML = `Outros`;
      } 
      line.insertCell(2).innerHTML = Element.description; 
      line.insertCell(3).innerHTML = `R$ ${Element.amount}`;  

   })

}
