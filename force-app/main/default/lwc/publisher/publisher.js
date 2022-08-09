import { LightningElement,track,wire } from 'lwc';
  import{CurrentPageReference} from 'lightning/navigation'
 
  import { fireEvent } from 'c/pubsub';
import { registerListener } from 'c/pubsub';
export default class Publisher extends LightningElement {

   @wire(CurrentPageReference) pageRef;
   @track x='';
   @track msgArr=[];
   @track inmessage="Status"
   connectedCallback()
   {
      registerListener("passMsg",this.displayMessage,this)
      registerListener("ShowStatus",this.displaStatus,this)
   }
   handlechange(event)
   {
 
 
 
      fireEvent(this.pageRef,"passInput","typing...")

    
     
   }

   handleClick(event)
   {
    if(event.target.label=="Send")
    {
      fireEvent(this.pageRef,"sendText",this.template.querySelector(".dt").value);
      this.template.querySelector(".dt").value=""
    }
    else{
      this.msgArr=[];
    }
   
    
   }

   displayMessage(msg)
   {
      if(msg!="")
      {
         this.msgArr.push(msg);
         this.inmessage=""
      }
   }
   displaStatus(val)
   {
      this.inmessage=val
   }
}