import yellowgirl from '../../assets/yellowgirl.jpeg';
import { useNavigate } from 'react-router-dom';
import { MdCurrencyRupee } from "react-icons/md";
export default function PayDay()
{
  const navigate = useNavigate();
  const shopNow = () => {
    navigate('/allproducts');
  }
  return (
    <div className = "flex mb-[30px] font-poppins">
      <div className ="h-[500px] flex flex-1" >
        <img className="w-full hover:scale-102 transition-transform duration-300 ease-in-out" src={yellowgirl} alt="blog" />
      </div>
      <div className = "flex flex-col flex-1 bg-[#F9DD55] justify-center items-center">
        <div className=" flex transform rotate-[-3deg] bg-white w-80 h-17 mb-3 font-rubikMono text-center items-center justify-center">
          <p className="font-bold text-5xl transform rotate-[2deg]">PAYDAY</p>
        </div>
        <p className="font-bold text-5xl font-rubikMono text-center">SALE NOW</p>
        <div className = "mt-8 mb-6">
          <p className = "flex items-center">Spend minimal <MdCurrencyRupee className = "p-0 m-0 text-md"/>100 get 30% off</p>
          <p>voucher code for your next purchase</p>  
        </div>
        <div className = "mb-6 text-[15px]">
          <p>1 Dec - 10 Dec 2024</p>
          <p>*Terms & Conditions apply</p>  
        </div>
        <button className = "bg-black text-white py-2 px-4 text-sm rounded-[4px] hover:bg-[#7f7f7f]" onClick={() => shopNow()}>SHOP NOW</button>
      </div>
    </div>
  )
}
