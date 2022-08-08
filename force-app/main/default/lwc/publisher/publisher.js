import { LightningElement,track,wire } from 'lwc';
  import{CurrentPageReference} from 'lightning/navigation'
 
  import { fireEvent } from 'c/pubsub';
export default class Publisher extends LightningElement {

   @wire(CurrentPageReference) pageRef;
   @track x='';
   handlechange(event)
   {
 
 
 
      fireEvent(this.pageRef,"passInput","typing...")

    
     
   }

   handleClick()
   {
    
    fireEvent(this.pageRef,"sendText",this.template.querySelector(".dt").value);
    this.template.querySelector(".dt").value=""
    
   }
}