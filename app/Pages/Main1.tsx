'use client'
import { useState } from 'react';
import { AiOutlineShoppingCart, AiOutlineClockCircle, AiOutlineStar, AiOutlineGlobal, AiOutlineUser, AiOutlineGift, AiOutlineReload, AiOutlineCar } from 'react-icons/ai';
import styles from './main.module.css';
import { useRouter } from 'next/navigation';
import Bigscrollclothes from "../Home-comp/Bigscrollclothes"
import Header from "../Components/Header"
import Textchange from "../Home-comp/Textchange";
import Man from "../Home-comp/Man";
import Squareexpericence from '../Home-comp/Squareexperience';
import Bigoffer from '../Home-comp/Bigoffer';
export default function Main1(){
const Firsttext: string[] = [
    "Premium Quality, Handpicked for You",
    "Over 500+ Satisfied Customers Trust Our Collection",
    "Affordable Luxury — Stylish Looks Without Breaking the Bank",
    "Eco-Friendly Materials for a Sustainable Wardrobe",
    "Fast Shipping & Hassle-Free Returns",
    "Limited Stock — Grab Your Favorite Pieces Before They’re Gone!",
    "Exclusive Collections You Won’t Find Anywhere Else",
    "Handcrafted Details for a Perfect Fit",
    "Customer Favorites — Rated 5 Stars",
    "Shop with Confidence — Secure Payments & Privacy Guaranteed",
    "Seasonal Trends Curated Just for You",
    "Join Our Loyalty Program & Enjoy Special Rewards"
  ];
  const Secondtext: string[] = [
  "Fast Delivery & Easy Returns",
  "Premium Quality You Can Trust",
  "Best Prices in the Market",
  "Secure Payments & Happy Customers"
];

  const Thirdtext: string[] = [
    "Premium Quality, Handpicked for You",
    "Over 500+ Satisfied Customers Trust Our Collection",
    "Affordable Luxury — Stylish Looks Without Breaking the Bank",
    "Eco-Friendly Materials for a Sustainable Wardrobe",
    "Fast Shipping & Hassle-Free Returns",
    "Limited Stock — Grab Your Favorite Pieces Before They’re Gone!",
    "Exclusive Collections You Won’t Find Anywhere Else",
    "Handcrafted Details for a Perfect Fit",
    "Customer Favorites — Rated 5 Stars",
    "Shop with Confidence — Secure Payments & Privacy Guaranteed",
    "Seasonal Trends Curated Just for You",
    "Join Our Loyalty Program & Enjoy Special Rewards"
  ];
const routes=useRouter();


 const [productsSold, setProductsSold] = useState(80);
  const [years, setYears] = useState(8);
  const [fastDelivery, setFastDelivery] = useState(5);
  const [satisfiedCustomers, setSatisfiedCustomers] = useState(2000);
  const [countriesServed, setCountriesServed] = useState(12);
  const [activeWorkers, setActiveWorkers] = useState(18);
  const [exclusiveProducts, setExclusiveProducts] = useState(20);
  const [returningCustomers, setReturningCustomers] = useState(10);


    return(
        <div>
            <Header/>
            <Bigscrollclothes/>
            <Textchange t={Firsttext}/>
            <div className={styles.row}>
            <Man url="https://media.gq-magazine.co.uk/photos/6752d1cc574fe314763cd1f0/master/w_1600,c_limit/ClothingEssentials_A-plain,-slouchy-hoodie.jpg" name="Oversized Hoodie" type="Men"/>
            <Man url="https://media.gq-magazine.co.uk/photos/6752d1cdb9d9ba7d03675069/master/w_1600,c_limit/ClothingEssentials_A-pair-of-classic-Shades---Chris-Pine.jpg" name="Black Double-Breasted Overcoat" type="Men"/>
            </div>

            <div className={styles.btnmid}>{/** here just mid screen btn*/}
            <button className={styles.btn} onClick={()=>routes.push('/Shop')}>Shop Now</button>
            </div>
           <div className={styles.space}></div>
            <div className={styles.experiencedsquares}> {/**here is just the experience boxes */}
                  <Squareexpericence 
        text="Products Sold"
        comment="Over 10,000 happy customers"
        icon={<AiOutlineShoppingCart size={40} />}
        setnum={setProductsSold}
        num={productsSold}
        howmuch={3}
      />
      <Squareexpericence 
        text="Years of Experience"
        comment="Trusted in online retail"
        icon={<AiOutlineClockCircle size={40} />}
        setnum={setYears}
        num={years}
        howmuch={0}
      />
      <Squareexpericence 
        text="Fast Delivery"
        comment="Ships in 24-48 hours"
        icon={<AiOutlineCar size={40} />}
        setnum={setFastDelivery}
        num={fastDelivery}
        howmuch={1}
      />
      <Squareexpericence 
        text="Satisfied Customers"
        comment="5-star reviews & feedback"
        icon={<AiOutlineStar size={40} />}
        setnum={setSatisfiedCustomers}
        num={satisfiedCustomers}
        howmuch={1}
      />
      <Squareexpericence 
        text="Countries Served"
        comment="Worldwide shipping"
        icon={<AiOutlineGlobal size={40} />}
        setnum={setCountriesServed}
        num={countriesServed}
        howmuch={0}
      />
      <Squareexpericence 
        text="Active Workers"
        comment="Professional team working 24/7"
        icon={<AiOutlineUser size={40} />}
        setnum={setActiveWorkers}
        num={activeWorkers}
        howmuch={1}
      />
      <Squareexpericence 
        text="Exclusive Products"
        comment="Unique items you won’t find elsewhere"
        icon={<AiOutlineGift size={40} />}
        setnum={setExclusiveProducts}
        num={exclusiveProducts}
        howmuch={1}
      />
      <Squareexpericence 
        text="Returning Customers"
        comment="Loved by thousands of shoppers"
        icon={<AiOutlineReload size={40} />}
        setnum={setReturningCustomers}
        num={returningCustomers}
        howmuch={1}
      />
      </div>
      <Textchange t={Secondtext}/> {/**here only for few texts in array */}
      <div className={styles.offer}><Bigoffer/></div> {/**handler all offers */}

      <div> {/**handler all  products + packs */}
      
      </div>
        </div>
    )
}