import { LightningElement, track,wire } from 'lwc';
import{CurrentPageReference} from 'lightning/navigation'
 
 import { registerListener } from 'c/pubsub';
 import { unregisterListener } from 'c/pubsub';

export default class Subscriber extends LightningElement {

    @track inmessage="test Text"
    @wire(CurrentPageReference) pageRef;

    connectedCallback()
    {
        
        registerListener("passInput",this.showInput,this);
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