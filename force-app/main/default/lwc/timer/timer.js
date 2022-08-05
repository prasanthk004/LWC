import { LightningElement,track} from 'lwc';

export default class Timer extends LightningElement {
 
    @track counter=0 ;
    @track x;
    @track clock;
    @track times=[];
    
    connectedCallback()
    {
        this.counter=0;
        setInterval(() => {
            this.counter+=1;
            this.clock=this.DisplayTimeFormat(this.counter);


        }, 1000);

    }
   
    DisplayTimeFormat(t)
    {
         var h,m,s;
        var hShow,mShow,sShow;
         h=Math.floor(t/3600);
       
        t%=3600; 
        m=Math.floor(t/60);   
        t%=60;
        s=t;
        
        h=(h<1)?0:h;
        m=(m<1)?0:m;
        s=(s<1)?0:s;

        hShow=(h>0)?((h<10)?"0"+h+" H " :h+" H ") :"";
        mShow=(m>0)?((m<10)?"0"+m+" M ":m+" M "):"";
        sShow=(s<10)?"0"+s+" S ":s+" S";

        
        return  hShow+mShow+sShow;
 

    }
     
    handleClick(event)
    {

        if(event.target.label==="LAP")
        {
             this.times.unshift(this.clock)

        }
        else
        {
             while(this.times.length>0)
            {
                this.times.pop();
            }
        }
    }




}