import { LightningElement,track,wire} from 'lwc';
import getAccountData from '@salesforce/apex/AccountInfo.getAccountData';
 import getAccountDataLimit from '@salesforce/apex/AccountInfo.getAccountDataLimit';
 

export default class AccountDataTable extends LightningElement {
@track Cols=[{label:'Account Name',fieldName:'Name',type:'text'},{label:'Phone',fieldName:'Phone',type:'Phone'},{label:'Website',fieldName:'Website',type:'url'},{label:'Annual Revenue',fieldName:'AnnualRevenue',type:'currency'}];
//@track data=[{Name:'Prasanth',Phone:'9000988522',Website:'pk.com'},{Name:'Saravanan',Phone:'9741478979',Website:'SS.com'}];
@track accountList;
@track accountListLimt;
@track x="List 10 Accounts"  ;

@wire(getAccountData) wiredAccountData({data,error})
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
 @wire(getAccountDataLimit) wiredAccountDataLimit({data,error})
 {
    if(data)
    {
        this.accountListLimt=data;
       console.log(data);
    }
    else if(error)
    {
        console.log(error);
    }

}

btnClick(event)
{
 
    
    
    if(this.x=="List 10 Accounts")
    {
 
        this.template.querySelector(".dt").data=this.accountListLimt;
        this.x="Show All"

    }
    else{
   

        this.template.querySelector(".dt").data=this.accountList;
        this.x="List 10 Accounts"

     }
   
   


}

}