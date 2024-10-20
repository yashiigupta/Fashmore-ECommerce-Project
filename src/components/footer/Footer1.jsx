import React, { useRef } from 'react';

function Footer1() {
  const inputRef = useRef();

  const handleSendEmail = (e) => {
    alert('Your exclusive promo code has been sent to your email');
    inputRef.current.value = "";
  }

  return (
    <div className="bg-footerBg text-white text-center flex justify-center items-center py-24">
      <footer>
        <p className="text-2xl font-bold font-rubik">JOIN SHOPPING COMMUNITY TO</p>
        <p className="text-2xl font-bold font-rubik mb-3">GET OUR MONTHLY PROMO</p>
        <p className="font-medium mb-4">Type your email down below and be young wild Fashmore generation</p>
        <div className="flex justify-center items-center">
          <input ref={inputRef} placeholder="Add your email here" className="text-sm text-black p-2 pr-8 rounded-tl-md  rounded-bl-md" />
          <div className="bg-white p-1 rounded-tr-md rounded-br-md">
            <button className="text-xs p-1.5 px-2 rounded-[4px] bg-black text-white" onClick={handleSendEmail}>SEND</button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer1;