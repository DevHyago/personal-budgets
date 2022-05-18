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
}