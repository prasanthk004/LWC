import { LightningElement,wire,track} from 'lwc';
  import getAccountObj from '@salesforce/apex/EmailOnAccountCreation.getAccountObj';

export default class DispalyCreatedAccount extends LightningElement {


    @track accountList;

     @wire(getAccountObj) wiredAccountData ;
     

     
 



}