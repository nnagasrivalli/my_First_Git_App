import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closehandler(){
        const myEvent =new CustomEvent('close',{
            detail: 'Closing Successful'
        }
        )
        this.dispatchEvent(myEvent)
    }
}