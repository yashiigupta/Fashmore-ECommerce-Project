import React, { useContext, useEffect } from 'react'
import myContext from '../../context/data/myContext'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { toast } from 'react-toastify'

function ProductCard() {
    const context = useContext(myContext)
    const { mode, product ,searchkey, setSearchkey,filterType,setFilterType,
        filterPrice,setFilterPrice} = context

    const dispatch = useDispatch()
    const cartItems = useSelector((state)=> state.cart);
    console.log(cartItems)

    const addCart = (product)=> {
        dispatch(addToCart(product));
        toast.success('add to cart');

    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 class="sm:text-2xl font-medium title-font mb-2 text-gray-900 font-rubik" style={{ color: mode === 'dark' ? 'white' : '' }}>NEW ARRIVALS</h1>
                    <div class="h-1 w-20 bg-footerBg rounded"></div>
                </div>

                <div className="flex flex-wrap font-poppins">
                    {product.filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
                        .filter((obj) => obj.category.includes(filterType))
                        .filter((obj) => filterPrice ? obj.price === filterPrice : true)
                        .slice(0, 8)
                        .length > 0 
                        ? product.filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase()))
                            .filter((obj) => obj.category.includes(filterType))
                            .filter((obj) => filterPrice ? obj.price === filterPrice : true)
                            .slice(0, 8)
                            .map((item, index) => {
                                const { title, price, description, imageUrl, id } = item;
                                return (
                                    <div key={index} className="py-4 pr-4 md:w-1/4 drop-shadow-lg">
                                        <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                                            style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <div onClick={() => window.location.href = `/productinfo/${id}`} className="flex justify-center cursor-pointer">
                                                <img className="rounded-3xl w-full h-80 p-2 hover:scale-105 transition-scale-110 duration-300 ease-in-out" src={imageUrl} alt={title} />
                                            </div>
                                            <div className="pb-5 px-3 pt-2">
                                                <h1 className="title-font text-md font-medium text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h1>
                                                <p className="leading-relaxed mb-3" style={{ color: mode === '#757575' ? 'white' : '' }}>₹{price}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        : <div className="w-full text-center py-5">
                            <p className="text-lg font-semibold" style={{ color: mode === 'dark' ? 'white' : 'black' }}>No products match your search.</p>
                        </div>
                    }
                </div>
            </div>
        </section >
    )
}

export default ProductCard;