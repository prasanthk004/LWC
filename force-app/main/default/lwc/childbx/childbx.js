import { LightningElement ,api,track} from 'lwc';

export default class Childbx extends LightningElement {
    @api came="kpchild";
    
      
    handleChange(event)
    {
      //  alert("eventcreated")
       
        var x=event.target.checked;
  
        const cevent=new CustomEvent('optchg',{detail:x})
        if(event.target.checked==true)
        {
            this.template.querySelector(".cbx2").checked=false;
            event.target.disabled=true    ;
            this.template.querySelector(".cbx2").disabled=false;

          }
      //  alert("eventcreated")
        this.dispatchEvent(cevent);
    }

    handleChangec(event)
    {
        
        var x=false;
        
       
        if(event.target.checked==true)
        {
            this.template.querySelector(".cbx1").checked=false;
            event.target.disabled=true    ;
            this.template.querySelector(".cbx1").disabled=false;

          }
         
       
        const clevent=new CustomEvent('chngopt',{detail:x})
       //  alert("eventcreated")
        this.dispatchEvent(clevent);

    }


}