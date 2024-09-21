import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import { Link } from 'react-router-dom';
import Footer1 from './Footer1';

function Footer() {
  const context = useContext(myContext);
  const { mode } = context;
  return (
    <div className = "position-stickt bottom-0">
      <Footer1 />
      <footer className="text-gray-600 body-font bg-black" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
        <div className="container px-5 py-20 mx-auto" >
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>Company</h2>
              <nav className="list-none text-[14px]">
                <li className="mb-2">
                  <a className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>About</a>
                </li>
                <li className="mb-2">
                  <a className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact us</a>
                </li>
                <li className="mb-2">
                  <a className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>Support</a>
                </li>
                <li>
                  <a className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
              <nav className="list-none text-[14px]">
                <li className="mb-2">
                  <Link to={'/returnpolicy'} className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
                </li>
                <li className="mb-2">
                  <Link to={'/about'} className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
                </li>
                <li className="mb-2">
                  <Link to={'/contact'} className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-4" style={{ color: mode === 'dark' ? 'white' : '' }}>Legal</h2>
              <nav className="list-none text-[14px]">
                <li className="mb-2">
                  <Link to={'/privacypolicy'} className="text-[#8E8E8E] hover:text-gray-400" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy Policy</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <Link to={'/'} className='flex'>
                <div className="flex ">
                  <h1 className= 'font-rubik font-bold text-white pb-3 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>FASHMORE</h1>
                </div>
              </Link>
              <div className = "mb-5">
                <p className = "text-sm text-[#8E8E8E]">Complete your style with awesome</p>
                <p className = "text-sm text-[#8E8E8E]">clothes from us.</p>
              </div>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <div className = "bg-footerBg p-0.2 rounded-sm px-0.5 mr-[10px]">
                  <a className="text-black">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                </div>
                <div className = "bg-footerBg p-0.2 rounded-sm px-0.5 mr-[10px]">
                  <a className="text-black">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                </div>
                <div className = "bg-footerBg p-0.2 rounded-sm px-0.5 mr-[10px]">
                  <a className="text-black">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-5" viewBox="0 0 24 24">
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                </div>
                <div className = "bg-footerBg p-0.2 rounded-sm px-0.5">
                  <a className="text-black">
                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-4 h-5" viewBox="0 0 24 24">
                      <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </div>
              </span>
            </div>
          </div>

        </div>
      </footer>
    </div>
  )
}

export default Footer