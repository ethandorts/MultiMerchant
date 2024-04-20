import { useState, useEffect } from 'react';
import Loader, { TailSpin } from 'react-loader-spinner';
import ImageCarousel from '../Components/ImageCarousel'

const LandingPage = () => {

  const [isPageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPageLoading(false);
    }, 4000);
  }, []);

  return (
    <>
    {isPageLoading ? (
      <div style={{justifyContent: 'center', display: 'flex', alignItems: 'center'}}>
      <TailSpin color="black" height={100} width={100} />
      <h1> Loading... </h1>
      </div>
    ): (
    <ImageCarousel />
    )}  
    </>
  )
}

export default LandingPage