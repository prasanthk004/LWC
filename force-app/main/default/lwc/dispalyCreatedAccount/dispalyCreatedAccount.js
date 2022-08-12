import { LightningElement,wire,track} from 'lwc';
import getAccountDataLimit from '@salesforce/apex/AccountInfo.getAccountDataLimit';
 import getAccountObj from '@salesforce/apex/EmailOnAccountCreation.getAccountObj';

export default class DispalyCreatedAccount extends LightningElement {


    @track accountList;

     @wire(getAccountObj) wiredAccountData({data,error})
     {
         if(data)
         {
             this.accountList=data;
            console.log(data);
         }
         else if(error)
         {
             console.log(error);
         }
    }

    connectedCallback()
    {
        //console.log(wiredAccountData);
        //.log(wiredAccountData.data);


    }
 



}