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

         if(expense != null){
            arrExpense.push(expense);
         }
         
      }
      return arrExpense;
   }

}