
import { useCart } from '@/context/CartContext'; 
import { useWishlist } from '@/context/WishlistContext';
import { FaShoppingCart,FaSearch, FaRegHeart, FaRegUser, FaAngleDown } from 'react-icons/fa';




const DesktopNav = () => {
    const { cart } = useCart(); 
    const { wishlist } = useWishlist(); 
    
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const wishlistQuantity = wishlist.length; 

    return (
        <div className='hidden md:flex justify-between lg:max-w-[1439px] md:px-[32px] md:py-[24px] m-auto font-sans'>
            <div className='flex items-center gap-[50px] lg:gap-[119px]'>
                <div>
                    <a href="/">
                        <h2 className='max-w-[70px] md:max-w-full font-sans font-bold text-3xl'>Bandage</h2>
                    </a>
                </div>
                <ul className="flex items-center space-x-4 text-[8px] lg:text-sm">
                    <li>
                        <a href="/" className="text-gray-700 hover:text-purple-700 font-sans text-base">Home</a>
                    </li>
                    <li className='flex items-center'>
                        <a href="/products" className="text-gray-700 hover:text-purple-700 font-sans text-base">Shop</a>
                        <FaAngleDown className='ml-1 text-gray-700 hover:text-purple-700 font-sans' />
                    </li>
                    <li>
                        <a href="/about" className="text-gray-700 hover:text-purple-700 font-sans text-base">About</a>
                    </li>
                    <li>
                        <a href="/blog" className="text-gray-700 hover:text-purple-700 font-sans text-base">Blog</a>
                    </li>
                    <li>
                        <a href="/contact" className="text-gray-700 hover:text-purple-700 font-sans text-base">Contact</a>
                    </li>
                    <li>
                        <a href="/pages" className="text-gray-700 hover:text-purple-700 font-sans text-base">Pages</a>
                    </li>
                </ul>
            </div>

            <ul className="hidden md:flex items-center space-x-4 text-[#f02ef6]">
                <div className='flex items-center'>
                    <div className='flex items-center mr-1'>
                        <FaRegUser className='mr-1 text-[#f02ef6] hover:text-purple-700' />
                        <li>
                            <a href="/Login" className="text-[#f02ef6] hover:text-purple-700">Login</a>
                        </li>
                    </div>
                    /
                    <li className='ml-1'>
                        <a href="/Signup" className="text-[#f02ef6] hover:text-purple-700">Register</a>
                    </li>
                </div>
                <li>
                    <FaSearch className='text-[#f02ef6] hover:text-purple-700' />
                </li>
                <li className='flex items-center'>
                    <a href="/cart" className="text-[#f02ef6] hover:text-purple-700">
                        <FaShoppingCart />
                    </a>
                    {cartQuantity > 0 && (
                        <span className=" text-[#f02ef6] text-xs  py-1">
                            {cartQuantity}
                        </span>
                    )}
                </li>
                <li className='flex items-center'>
                    <a href="/wishlist" className="text-[#f02ef6] hover:text-purple-700">
                        <FaRegHeart className='text-[#f02ef6] hover:text-purple-700' />
                    </a>
                    {wishlistQuantity > 0 && (
                        
                        <span className="text-[#f02ef6] text-xs py-1">
                            {wishlistQuantity}
                        </span>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default DesktopNav;
