import { Clothestype } from "../Types/Clothesitems";
export let Allitems:Clothestype[]|null =[];

export const Callproducts =async() :Promise<Clothestype[]|null>=>{
    const res = await fetch('https://fakestoreapi.com/products');
    if(!res.ok){
        return null
    }
    const data = await res.json();
    
     Allitems =data.map((val:any):Clothestype=>({
        title: val.title,
        description: val.description,
        url: val.image,
        price: val.price,
        category:val.category,
        rating:{rate:val.rate,count:val.count},
        disponible: true,  
        livrison: true    
    }));
    return Allitems;
}