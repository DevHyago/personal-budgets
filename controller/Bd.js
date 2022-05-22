class Bd{

   constructor(){
      let id = localStorage.getItem('id');

      if(id === null){
         localStorage.setItem('id', 0);
      }

   }
   
   generateId(){
      let nextId = localStorage.getItem('id');
      return parseInt(nextId) + 1;
   }

   sendToLocaleStorage(expense){

      let id = this.generateId();

      localStorage.setItem(id, JSON.stringify(expense));

      localStorage.setItem('id', id);
      
   }

   retrieveAllRecords(){
      
      let id = localStorage.getItem('id');
      let arrExpense = [];

      //Percorrer todos os registros
      for(let i = 1; i <= id; i++){

         let expense = JSON.parse(localStorage.getItem(i));

         if(expense == null){
            continue;
         }

         expense.id = i;

         arrExpense.push(expense);
         
      }
      return arrExpense;
   }

   search(expense){
      
      let filterExpense = [];

      filterExpense = this.retrieveAllRecords();
      
      //Ano
      if(expense.year != ''){
         filterExpense = filterExpense.filter(obj => obj.year == expense.year);
      }
      //Mes
      if(expense.month != ''){
         filterExpense = filterExpense.filter(obj => obj.month == expense.month);
      }
      //Dia
      if(expense.day != ''){
         filterExpense = filterExpense.filter(obj => obj.day == expense.day);
      }
      //Tipo
      if(expense.type != ''){
         filterExpense = filterExpense.filter(obj => obj.type == expense.type);
      }
      //Descrição
      if(expense.description != ''){
         filterExpense = filterExpense.filter(obj => obj.description == expense.description);
      }
      //Valor
      if(expense.amount != ''){
         filterExpense = filterExpense.filter(obj => obj.amount == expense.amount);
      }
      
      return filterExpense;

   }

   deleteExpense(id){
      localStorage.removeItem(id);
   }

}