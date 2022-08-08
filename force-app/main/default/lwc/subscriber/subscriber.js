import { LightningElement, track,wire } from 'lwc';
import{CurrentPageReference} from 'lightning/navigation'
 
 import { registerListener } from 'c/pubsub';
 import { unregisterListener } from 'c/pubsub';

export default class Subscriber extends LightningElement {

    @track inmessage="test Text"
    @wire(CurrentPageReference) pageRef;
    @track msgArr=[];
    @track myMsgArr=[];
    @track dmsg;

    connectedCallback()
    {
        
        registerListener("passInput",this.showInput,this);
        registerListener("sendText",this.displayMessage,this);

    }

    displayMessage(msg)
    {
      
        if(msg!="")
        {
            this.msgArr.push(msg);
            this.dmsg=true;
        }
            


         

        this.inmessage="";


    }
    showInput(values)
    {
       

        this.inmessage=values;
    }

    disconnectedCallback()
    {
        console.log("Calling disconnectedCallback")
        //unregisterListener("passInput",this.showInput,this);
    }
    
    handleClick()
    {
         this.msgArr.push(this.template.querySelector(".dt").value);
         this.dmsg=false;
         
    }
}