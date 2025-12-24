interface plantypes{
    title:string;
    price:string;
    discount:string;
    comment:string;
    features: {
        1:string;2:string;3:string;4:string;5:string;
    }
    buy:()=>void;
    help:()=>void;
    closehelp:()=>void

}

export const Plans:plantypes[]=[]