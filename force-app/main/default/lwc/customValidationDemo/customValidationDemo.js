import { LightningElement,api } from 'lwc';
import Account_Object from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class CustomValidationDemo extends LightningElement {

    ObjectName=Account_Object
   
    name=''

    changeHandler(event){
        this.name=event.target.value

    }
    handleSubmit(event){
        event.preventDefault()
        const inputCmp= this.template.querySelector('lightning-input')
        const value=inputCmp.value
        if(!value.includes('Australia')){
            inputCmp.setCustomValidity("The Account must include 'Australia")
        }else {
            inputCmp.setCustomValidity("")
            const fields=event.detail.fields
            fields.Name= value
            this.template.querySelector('lightning-record-edit-form').submit(fields)

        }
        inputCmp.reportValidity()

    }
    successHandler(event){
       const  showEvent =new ShowToastEvent({
           title:"Account Created",
           message:"record ID" + event.detail.id,
           variant:"success"

       })
       this.dispatchEvent(showEvent)
    }
}