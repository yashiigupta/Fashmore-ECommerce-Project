import React, { useContext, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import Filter from '../../components/filter/Filter'
import { addToCart } from '../../redux/cartSlice'
import { useNavigate } from "react-router-dom";

function AllUnderProducts() {
    const context = useContext(myContext)
    const navigate = useNavigate();
    const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
        filterPrice, setFilterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);

    const user = JSON.parse(localStorage.getItem('user'));

    const addCart = (e, product) => {
        e.stopPropagation();
        
        if (!user) {
            navigate('/signup');
            return; 
        }
    
        dispatch(addToCart(product));
        toast.success('Added to cart');
    };
    

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        setFilterPrice('');
        setFilterType('');
    }, []);

  return (
    <Layout>
      <Filter />
      <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                  <h1 class="sm:text-2xl font-medium title-font mb-2 text-gray-900 font-rubik" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <span style={{ color: '#E6c744' }}>ALL </span> 
                    <span style={{ color: 'black' }}>UNDER </span>
                    <span style={{ color: '#E6c744' }}>400</span>
                  </h1>
                  <div class="h-1 w-20 bg-black rounded"></div>
                </div>
                <div className="flex flex-wrap -m-4">
                    {product.filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
                        .filter((obj) => obj.category.includes(filterType))
                        .filter((obj) => filterPrice ? obj.price === filterPrice : true)
                        .filter((obj) => obj.price < 400)
                        .length > 0 
                        ? product.filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
                            .filter((obj) => obj.category.includes(filterType))
                            .filter((obj) => filterPrice ? obj.price === filterPrice : true)
                            .filter((obj) => obj.price < 400)
                            .map((item, index) => {
                                const { title, price, imageUrl, id, brandName } = item;
                                return (
                                    <div onClick={() => window.location.href = `/productinfo/${id}`} key={index} className="p-4 md:w-1/4 drop-shadow-lg">
                                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                                            style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <div className="flex justify-center cursor-pointer overflow-hidden h-80">
                                              <img className="rounded-2xl w-full object-cover p-2" src={imageUrl} alt="blog" />
                                            </div>
                                            <div className="px-5 pt-2 pb-5">
                                                <h1 className="title-font text-md font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    {title.length > 25 ? `${title.substring(0, 23)}...` : title}
                                                </h1>
                                                <p className="leading-relaxed mb-3 text-sm">
                                                    {brandName === "" || brandName == null ? null : `By ${brandName}`}
                                                </p>
                                                <p className="leading-relaxed mb-4 text-sm" style={{ color: mode === 'dark' ? 'white' : '' }}>₹{price}</p>
                                                <div className="flex justify-center">
                                                    <button type="button" 
                                                        onClick={(e) => addCart(e, item)}
                                                        className="focus:outline-none text-black bg-footerBg hover:text-white focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2">Buy Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        : <div className="w-full text-center py-1">
                            <p className="text-sm font-semibold font-rubikMono" style={{ color: mode === 'dark' ? 'white' : 'black' }}>No products match your search.</p>
                        </div>
                    }
                </div>
            </div>
        </section >
    </Layout>
  )
}

export default AllUnderProducts;