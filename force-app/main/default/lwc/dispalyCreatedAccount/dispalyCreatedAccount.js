import { LightningElement,wire,track} from 'lwc';
import getDetails from  '@salesforce/apex/getDetails.EmailOnAccountCreation';

export default class DispalyCreatedAccount extends LightningElement {


    @track accountList;

    @wire(getAccountData) wiredAccountData ;

    


}