import styles from './feedback.module.css';
import Humanfeedback from './Humanfeedback';
export default function Feedback(){
type Humanfeedbackprops={
name:string;
secname:string;
rating:number;
link:string;
description:string;
advice:string;
favorite:string
}
const users:Humanfeedbackprops[] = [
  {
    name: "Lina",
    secname: "Moreau",
    rating: 5,
    link: "https://instagram.com/lina.moreau",
    description:
      "Absolutely loved the quality. The fabric feels premium and the stitching is flawless. Delivery was faster than expected.",
    advice:
      "Check the size chart carefully — it’s accurate and helps avoid returns.",
    favorite:
      "Oversized beige trench coat"
  },
  {
    name: "Adam",
    secname: "Keller",
    rating: 4,
    link: "https://twitter.com/adamkeller",
    description:
      "Great streetwear vibe. Colors stay solid after washing and the fit is modern without being too tight.",
    advice:
      "Order early if you want popular sizes, they sell out fast.",
    favorite:
      "Black cargo pants"
  },
  {
    name: "Sofia",
    secname: "Rossi",
    rating: 5,
    link: "https://instagram.com/sofiarossi",
    description:
      "This shop surprised me. The clothes look even better in real life and feel very comfortable for daily wear.",
    advice:
      "Follow their new arrivals — the limited collections are worth it.",
    favorite:
      "White minimalist hoodie"
  },
  {
    name: "Youssef",
    secname: "Benali",
    rating: 4,
    link: "https://instagram.com/youssef.benali",
    description:
      "Clean designs and very good pricing for the quality you get. Packaging was also neat and professional.",
    advice:
      "If you’re between sizes, go one size up for a relaxed fit.",
    favorite:
      "Olive green bomber jacket"
  },
  {
    name: "Emma",
    secname: "Thompson",
    rating: 3,
    link: "https://dribbble.com/emmathompson",
    description:
      "The attention to detail is impressive. Feels like a premium brand without the crazy price tag.",
    advice:
      "Pair their basics with statement pieces — works perfectly.",
    favorite:
      "High-waist straight jeans"
  }
];


    return(
        <div className={styles.container}> {/**all feedbacks of random users here  fake data*/}

        {users.map((val,i)=> <div key={i} className={styles.boxhandler}><Humanfeedback name={val.name} secname={val.secname} rating={val.rating}  link={val.link} description={val.description} advice={val.advice}  favorite={val.favorite} /></div> )}

        </div>
    )
}