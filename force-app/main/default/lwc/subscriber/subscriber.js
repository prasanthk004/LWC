import { LightningElement, track,wire } from 'lwc';
import{CurrentPageReference} from 'lightning/navigation'
 
 import { registerListener } from 'c/pubsub';
 import { unregisterListener } from 'c/pubsub';

export default class Subscriber extends LightningElement {

    @track inmessage="test Text"
    @wire(CurrentPageReference) pageRef;
    @track msgArr=[];

    connectedCallback()
    {
        
        registerListener("passInput",this.showInput,this);
        registerListener("sendText",this.displayMessage,this);
    }

    displayMessage(msg)
    {
     
        this.msgArr.push(msg);


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
    
}