import { LightningElement ,wire,track} from 'lwc';
 import getContacts from '@salesforce/apex/Contacts.getContacts'
 
   export default class CheckboxLWC extends LightningElement {

    @wire(getContacts) wiredContacts;
    @track count=0;
    @track lbl=0+" Items Selected";
    handleChangex(event)
    {
  
     

       
         let i;
          let x=this.template.querySelectorAll('.chkbx');
         
        
       
            
         for(i=0;i<x.length;i++)
          {
 
         x[i].checked=event.detail;
         }        
        
    

       
    
      
    }



    handleChangexy(event)
    {

      
      let i;
      let x=this.template.querySelectorAll('.chkbx');
     
    
   
        
     for(i=0;i<x.length;i++)
      {

       x[i].checked=event.detail;
     }        
    


    }


    countClick(event)
    {
      //alert(this.count);
        this.count++;
        lbl=this.count+" Items Selected";
        alert(event.target.title)
      
    }
}