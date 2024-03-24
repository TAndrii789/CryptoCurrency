import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const AboutCoin = () => {

  const {id} = useParams();
  const [coin, setCoin] = useState()

  useEffect(() => {
    // fetch("https://api.coincap.io/v2/assets")
   
  }, [])
  
  return (
   <>
     <div className="container">Bitcoin{id}</div>
     <div className="container">Bitcoin{id}</div>
   </>
  );
}

export default AboutCoin