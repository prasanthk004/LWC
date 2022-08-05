import { LightningElement, track } from 'lwc';

export default class ParentComp extends LightningElement {
    
    @track parentVal="This text from parent";
    @track pVal="Actual parent text"
    i=0;

    handleClick( )
    {
      

        this.parentVal= this.template.querySelector(".dt").value
    }
    handlepress(event)
    {
        this.parentVal= this.template.querySelector(".dt").value
    }

    handleonParent(event)
    {  
        alert("Child to parent")
        this.pVal="Changed text via child button "+event.detail.firstParm+" "+event.detail.SecondParm;
 
    }
}