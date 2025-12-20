import { useState, useEffect } from 'react';
import styles from './feedback.module.css';
import Humanfeedback from './Humanfeedback';

export default function Feedback() {
  type Humanfeedbackprops = {
    name: string;
    secname: string;
    rating: number;
    description: string;
    advice: string;
    favorite: string;
  }

  // Fake data - all 4 arrays
  const reviewsSet1: Humanfeedbackprops[] = [
    {
      name: "Sarah",
      secname: "Mitchell",
      rating: 5,
      description: "Just received my third order and I'm consistently impressed. The quality-to-price ratio is unbeatable. The cashmere sweater feels luxurious and has held up beautifully after multiple wears and washes. Exactly as pictured!",
      advice: "Don't hesitate on items you love - popular sizes sell out within hours sometimes.",
      favorite: "Pure cashmere crewneck sweater"
    },
    {
      name: "Marcus",
      secname: "Zhang",
      rating: 4,
      description: "Solid basics that work well for my office wardrobe. The cotton shirts don't wrinkle too much and the fit is modern without being trendy. Only docked one star because shipping took 10 days instead of the promised 5-7.",
      advice: "Size up if you're between sizes, especially for tops. Their sizing runs slightly small.",
      favorite: "Non-iron cotton dress shirt"
    },
    {
      name: "Priya",
      secname: "Sharma",
      rating: 2,
      description: "Really disappointed with the linen dress. The fabric was much thinner than expected, almost see-through. Color faded after first wash despite following instructions. Customer service offered a 15% discount code but I wanted a refund.",
      advice: "Be cautious with light-colored items - quality seems inconsistent.",
      favorite: "Linen midi dress"
    },
    {
      name: "Thomas",
      secname: "O'Connor",
      rating: 5,
      description: "Best online clothing purchase I've made this year. The wool coat arrived perfectly packaged, heavy weight, and looks exactly like the photos. Kept me warm through a Chicago winter. Worth every penny.",
      advice: "Invest in their winter collection during summer sales - huge discounts.",
      favorite: "Double-breasted wool coat"
    },
    {
      name: "Isabella",
      secname: "Rossi",
      rating: 3,
      description: "The jeans fit well in the waist but were oddly tight in the thighs. Fabric is decent quality but nothing special. For the price, I expected better. Might return if the return process isn't too complicated.",
      advice: "Check their return policy carefully - some items are final sale.",
      favorite: "High-rise skinny jeans"
    },
    {
      name: "Ahmed",
      secname: "Hassan",
      rating: 4,
      description: "Good value for sustainable fashion. The organic cotton t-shirts are soft and have kept their shape after multiple washes. Appreciate their transparency about manufacturing. Would order again.",
      advice: "Wash inside out to preserve print and color longevity.",
      favorite: "Organic cotton graphic tee"
    },
    {
      name: "Chloe",
      secname: "Dubois",
      rating: 1,
      description: "Terrible experience. Ordered a silk blouse that arrived with a small tear. Customer service asked for 15 photos (!) and then offered store credit instead of replacement. Return shipping cost me $12. Never again.",
      advice: "Avoid delicate items - quality control seems non-existent.",
      favorite: "Silk satin blouse"
    }
  ];

  const reviewsSet2: Humanfeedbackprops[] = [
    {
      name: "Ethan",
      secname: "Williams",
      rating: 5,
      description: "Obsessed with this store! Found them through Instagram and took a chance. The quality is phenomenal - attention to detail in stitching, fabric weight, and finishes. My go-to for workwear now.",
      advice: "Follow their Instagram for styling ideas - they post real customer photos.",
      favorite: "Wool-blend trousers"
    },
    {
      name: "Maya",
      secname: "Chen",
      rating: 3,
      description: "Mixed feelings. The sweater is soft and cozy but started pilling after 3 wears. For the price point, I expected better durability. Customer service was responsive and offered a partial refund though.",
      advice: "Buy a fabric shaver if you're getting their knitwear.",
      favorite: "Cable knit sweater"
    },
    {
      name: "Liam",
      secname: "Johnson",
      rating: 2,
      description: "Sizing is completely inconsistent. Ordered two pairs of chinos in the same size - one fit perfectly, the other was 2 inches smaller in the waist. Return process was a headache with multiple emails back and forth.",
      advice: "Order multiple sizes and return what doesn't fit, even if it's the same item.",
      favorite: "Stretch cotton chinos"
    },
    {
      name: "Sophie",
      secname: "Anderson",
      rating: 4,
      description: "Great summer staples! The linen shirt is breathable and doesn't wrinkle as much as I expected. Love the minimalist aesthetic. Shipping was faster than expected during a sale period.",
      advice: "Hand wash delicate items even if tag says machine washable.",
      favorite: "Linen button-down shirt"
    },
    {
      name: "Diego",
      secname: "Martinez",
      rating: 5,
      description: "Exceptional quality for the price. The leather jacket feels substantial and has broken in beautifully. I've gotten countless compliments. This is my third purchase and won't be my last.",
      advice: "Sign up for their loyalty program - points add up quickly.",
      favorite: "Lambskin leather jacket"
    },
    {
      name: "Emma",
      secname: "Taylor",
      rating: 3,
      description: "It's... fine. Nothing special but nothing terrible either. The dress fits okay, fabric is average, price was reasonable with the 20% discount. Would probably buy again on sale but not at full price.",
      advice: "Wait for sales - they have them pretty frequently.",
      favorite: "Wrap midi dress"
    },
    {
      name: "Kenji",
      secname: "Tanaka",
      rating: 4,
      description: "As someone who travels frequently, their wrinkle-resistant pieces are game-changers. Packed the blazer for a week-long trip and it looked fresh every day. Great for business travelers.",
      advice: "Their travel collection is worth the investment if you're frequently on the go.",
      favorite: "Technical blazer"
    }
  ];

  const reviewsSet3: Humanfeedbackprops[] = [
    {
      name: "Olivia",
      secname: "Brown",
      rating: 1,
      description: "Complete waste of money. The 'premium' dress arrived with loose threads and uneven hem. Color was completely different from website photos (more dull olive than vibrant green). Customer service ghosted me after first response.",
      advice: "Save your money and shop elsewhere - too many quality issues.",
      favorite: "Midi slip dress"
    },
    {
      name: "Noah",
      secname: "Garcia",
      rating: 5,
      description: "Surprised by the negative reviews - my experience has been flawless. The hoodie is heavyweight, soft, and has maintained its shape after multiple washes. Arrived in 3 days with free shipping over $100.",
      advice: "Bundle orders to hit the free shipping threshold.",
      favorite: "French terry hoodie"
    },
    {
      name: "Aisha",
      secname: "Al-Farsi",
      rating: 4,
      description: "Really impressed with the sustainable materials. The recycled polyester jacket looks and feels premium. Fit is true to size. Only complaint is the limited color options in plus sizes.",
      advice: "Check their size guide carefully - measurements are accurate.",
      favorite: "Recycled puffer jacket"
    },
    {
      name: "Ben",
      secname: "Carter",
      rating: 2,
      description: "Received someone else's order entirely - wrong item and wrong size. Customer service acknowledged the mistake but said replacement would take 3-4 weeks due to being backordered. Offered store credit but I wanted my item.",
      advice: "Double-check your order confirmation email immediately after purchase.",
      favorite: "Utility cargo pants"
    },
    {
      name: "Lena",
      secname: "Schmidt",
      rating: 3,
      description: "The sweater is comfortable but pills excessively. For $85, I expected better quality. It looks worn after just a month. Customer service did send a $20 credit after I complained, which was appreciated.",
      advice: "Stick to their basic cotton items - better quality consistency.",
      favorite: "Merino wool blend sweater"
    },
    {
      name: "Ravi",
      secname: "Patel",
      rating: 5,
      description: "Found my new favorite work shirt! The non-iron feature actually works - wore it straight from the suitcase during a business trip and it looked crisp. Perfect fit off the rack.",
      advice: "Their professional/workwear line is their strong suit - focus there.",
      favorite: "Non-iron dress shirt"
    },
    {
      name: "Zoe",
      secname: "Kim",
      rating: 4,
      description: "Good experience overall. The jeans fit well, fabric has some stretch but maintains shape. Appreciate the variety of lengths available. Shipping packaging was minimal (no excess plastic) which I love.",
      advice: "If you're between lengths, go shorter - they tend to stretch a bit.",
      favorite: "Straight leg jeans"
    }
  ];

  const reviewsSet4: Humanfeedbackprops[] = [
    {
      name: "Alex",
      secname: "Thompson",
      rating: 5,
      description: "Worth every penny! The trench coat is impeccably tailored and the fabric feels expensive. I've worn it in light rain and it held up perfectly. This is my second purchase and both exceeded expectations.",
      advice: "Invest in their outerwear - that's where the quality really shines.",
      favorite: "Water-resistant trench coat"
    },
    {
      name: "Grace",
      secname: "Wilson",
      rating: 3,
      description: "Ordered two dresses - one was perfect, the other had stitching coming undone. Seems like quality control is hit or miss. Customer service did send a replacement for the defective item quickly though.",
      advice: "Inspect items carefully upon arrival and contact support immediately if issues.",
      favorite: "Floral maxi dress"
    },
    {
      name: "Daniel",
      secname: "Lee",
      rating: 4,
      description: "Great for capsule wardrobe building. The neutral colors mix and match well, and the fabrics feel substantial. The t-shirts have maintained their shape after 6+ washes. Will be ordering more basics.",
      advice: "Build a cart over time - they frequently offer site-wide discounts.",
      favorite: "Heavyweight cotton tee"
    },
    {
      name: "Fatima",
      secname: "Ahmed",
      rating: 2,
      description: "Extremely disappointed. The silk skirt arrived with a small pull in the fabric. Customer service insisted it was 'normal wear' even though it arrived that way. Return process required me to pay shipping.",
      advice: "Take unboxing videos for expensive items as proof of condition.",
      favorite: "Silk wrap skirt"
    },
    {
      name: "James",
      secname: "Miller",
      rating: 5,
      description: "As a photographer, I appreciate good design and construction. Their minimalist pieces are well-executed with clean lines and quality materials. The wool trousers drape beautifully and are versatile.",
      advice: "Their minimalist collection is consistently good quality.",
      favorite: "Wool pleated trousers"
    },
    {
      name: "Nina",
      secname: "Petrov",
      rating: 3,
      description: "Average experience. Clothes are okay but not exceptional. The blazer fits well but fabric wrinkles easily. For the price, I expected better. Might keep it because returning seems complicated.",
      advice: "Only buy when there's at least a 30% discount.",
      favorite: "Unstructured blazer"
    },
    {
      name: "Carlos",
      secname: "Rodriguez",
      rating: 4,
      description: "Good value for sustainable fashion. The organic cotton sweatshirt is soft and has held up well. Love that they're transparent about their supply chain. Shipping was carbon-neutral which is a nice touch.",
      advice: "Check their sustainability reports if that matters to you.",
      favorite: "Organic cotton sweatshirt"
    }
  ];

  const [index, setIndex] = useState<number>(0);
  
  useEffect(() => {
    const timer = setInterval(() => { 
      setIndex(prev => prev === 6 ? 0 : prev + 1);
    }, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2 className={styles.txt}>Customer Reviews</h2>
      </div>
       <div className={styles.cycleIndicator}>
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <div 
        key={i}
        className={`${styles.indicatorDot} ${index === i ? styles.active : ''}`}
        onClick={() => setIndex(i)}
        title={`View review ${i + 1}`}
      />
    ))}
  </div>
      <div className={styles.upper}>
        <div className={styles.first}>
          {reviewsSet1[index] && <Humanfeedback {...reviewsSet1[index]} />}
        </div>
        <div className={styles.second}>
          {reviewsSet2[index] && <Humanfeedback {...reviewsSet2[index]} />}
        </div>
      </div>

      <div className={styles.lower}>
        <div className={styles.third}>
          {reviewsSet3[index] && <Humanfeedback {...reviewsSet3[index]} />}
        </div>
        <div className={styles.fourth}>
          {reviewsSet4[index] && <Humanfeedback {...reviewsSet4[index]} />}
        </div>
      </div>
    </div>
  );
}