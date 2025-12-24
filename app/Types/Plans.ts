interface PlanTypes{
    title:string;
    price:string;
    discount:string;
    p:string;
    comment:string;
    features: {
        1:string;2:string;3:string;4:string;5:string;
    }
}
export const Plans: PlanTypes[] = [
  {
    title: "Starter",
    price: "$0",
    discount: "100%",
    p:'0 $',
    comment: "Best for casual shoppers",
    features: {
      1: "Browse all clothing collections",
      2: "Standard delivery",
      3: "Basic customer support",
      4: "Access to seasonal sales",
      5: "Easy return policy",
    },
  },
  {
    title: "Fashion Plus",
    price: "$9.99 / month",
    discount: "10%",
    p:'9.99 $',
    comment: "Most popular plan",
    features: {
      1: "10% discount on all clothes",
      2: "Free standard shipping",
      3: "Early access to new collections",
      4: "Priority customer support",
      5: "Extended return window",
    },
  },
  {
    title: "Fashion Pro",
    price: "$19.99 / month",
    discount: "35%",
    p:'19.99 $',
    comment: "For frequent buyers",
    features: {
      1: "20% discount on all items",
      2: "Free express delivery",
      3: "VIP-only collections",
      4: "24/7 premium support",
      5: "Free returns anytime",
    },
  },
];
