import { LightningElement,wire } from 'lwc';
import { getObjectInfo,getObjectInfos } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetInfoObjectDemo extends LightningElement {
   
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT})
    objectinfo

    objectApiNames=[ACCOUNT_OBJECT, OPPORTUNITY_OBJECT]
    objectinfos
    @wire(getObjectInfos, {objectApiNames:'$objectApiNames'})
   
    objectHandler({data}){
        if(data){
            console.log(data)
            this.objectinfos=data
        }
    }
}