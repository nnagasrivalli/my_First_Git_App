import { LightningElement,api } from 'lwc';

export default class SetterChild extends LightningElement {
    userdata

    @api 
    get detail(){
        return this.userdata

    }
    set detail(data){
         let newage =data.age *2;
       this.userdata={...data, age:newage,"location":"California"}
    }
}
