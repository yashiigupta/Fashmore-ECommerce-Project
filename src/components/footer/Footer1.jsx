function Footer1()
{
  return (
    <div className = "bg-footerBg text-white text-center flex justify-center items-center py-24">
      <footer>
        <p className = "text-2xl font-bold font-rubik">JOIN SHOPPING COMMUNITY TO</p>
        <p className = "text-2xl font-bold font-rubik mb-3">GET MONTHLY PROMO</p>
        <p className = "font-medium mb-4">Type your email down below and be young wild Fashmore generation</p>
        <div className = "flex justify-center items-center">
          <input placeholder = "Add your email here" className = "text-sm text-black p-2 pr-8 rounded-tl-md  rounded-bl-md"></input>
          <div className = "bg-white p-1 rounded-tr-md rounded-br-md"><button className = "text-xs p-1.5 px-2 rounded-[4px] bg-black text-white">SEND</button></div>
        </div>
      </footer>
    </div>
  )
}

export default Footer1;