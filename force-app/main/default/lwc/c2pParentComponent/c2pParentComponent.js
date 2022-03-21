import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal=false;
    clickHandler(event){
        this.showModal=true;
    }
    closehandler(){
        this.showModal=false;
    }
}
