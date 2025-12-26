'use client'

import ItemInfo from "@/app/Shop-comp/Iteminfo";
import { useSearchParams } from "next/navigation";
import { use } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Confirmegift from "@/app/Shop-comp/Confirmegift";
import Message from "@/app/Components/Message";
import Confirmebuy from "@/app/Shop-comp/Confirmebuy";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const searchParams = useSearchParams();
  
  const price = searchParams.get('price');
  const link = searchParams.get('link');
  const check = searchParams.get('check');
  
  const decodedPrice = decodeURIComponent(price || '');
  const decodedLink = decodeURIComponent(link || '');
  const decodedId = decodeURIComponent(id);
  
  const [isGiftMode, setIsGiftMode] = useState<string>(check || '');
  const [isBuyMode, setIsBuyMode] = useState<boolean>(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState<boolean>(false);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  
  // Cleanup timeouts on component unmount
  useEffect(() => {
    return () => {
      // Any existing cleanup will happen here
    };
  }, []);

  const handleBack = () => {
    router.push('/Shop');
  };

  const handleBuy = () => {
    setIsBuyMode(true);
  };

  const handleGift = () => {
    setIsGiftMode('true');
  };

  const handleCancel = () => {
    setIsGiftMode('false');
    setIsBuyMode(false);
    setShowErrorMessage(true);
    
    const timeoutId = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  };

  const handleConfirmGift = () => {
    setIsGiftMode('false');
    setShowSuccessMessage(true);
    
    const timeoutId = setTimeout(() => {
      setShowSuccessMessage(false);
      router.push('/Shop');
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  };

  const handleConfirmBuy = () => {
    setIsBuyMode(false);
    setShowSuccessMessage(true);
    
    const timeoutId = setTimeout(() => {
      setShowSuccessMessage(false);
      router.push('/Shop');
    }, 5000);
    
    return () => clearTimeout(timeoutId);
  };

  return (
    <div>
      <ItemInfo 
        name={decodedId} 
        price={decodedPrice} 
        url={decodedLink} 
        buy={handleBuy} 
        back={handleBack} 
        gift={handleGift}
      />
     
      {isGiftMode === 'true' && (
        <Confirmegift 
          name={decodedId} 
          price={decodedPrice} 
          confirme={handleConfirmGift} 
          cancle={handleCancel}
        />
      )}
      
      {isBuyMode && (
        <Confirmebuy  
          name={decodedId} 
          price={decodedPrice} 
          confirme={handleConfirmBuy} 
          cancle={handleCancel}
        />
      )}
      
      {showSuccessMessage && (
        <Message 
          text="Congrats" 
          color="green" 
          comment={`Congrats! Your ${decodedId} will arrive soon...`}
        />
      )}
      
      {showErrorMessage && (
        <Message 
          text="Cancelled" 
          color="red" 
          comment="Your purchase has been cancelled."
        />
      )}
    </div>
  );
}