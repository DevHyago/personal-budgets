class Expense{
   constructor(year, month, day, type, description, amount){
      this.year = year;
      this.month = month;
      this.day = day;
      this.type = type;
      this.description = description;
      this.amount = amount;
   }

   dataValidation(){
      //Percorre todos os elementos do objeto
      for(let i in this){
         if(this[i] == undefined || this[i] == '' || this[i] == null){
            return false;
         }
      }
      return true;
   }

}