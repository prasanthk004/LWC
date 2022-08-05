import { LightningElement,api,track } from 'lwc';

export default class ChildComp extends LightningElement {

    @api childName="TestChild";

    x=true;
    y=false;

    handleClick()
    {
        alert("alert from childevent")
        const ChildEvent=new CustomEvent('buttonclick',{
                detail:{
                    firstParm:'First',
                    SecondParm:'Second'
                }
        });
        this.dispatchEvent(ChildEvent);
    }


    
}