import hm from '../../assets/h&m.png';
import zara from '../../assets/zara.png';
import ck from '../../assets/ck.png';
import chanel from '../../assets/chanel.png';
import mango from '../../assets/mango.png';
import levi from '../../assets/levis.png';
import { useState, useEffect } from 'react';
function HeroBar()
{
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className = "bg-footerBg h-20 py-3 flex items-center justify-center">
      <div className = "flex justify-around items-center" style = {{width: windowWidth}}>
        <img src = {hm} className = "h-7" />
        <img src = {zara} className = "h-14" />
        <img src = {ck} className = "h-14" />
        <img src = {chanel} className = "h-14" />
        <img src = {mango} className = "h-14" />
        <img src = {levi} className = "h-14" />
      </div>
    </div>
  )
}

export default HeroBar;