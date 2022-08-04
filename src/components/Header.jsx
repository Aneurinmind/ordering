import foody from "../assets/images/foody.png"
import cartIcon from "../assets/icons/cart.svg"
import {Link} from "react-router-dom"

export const Header = () => {
    return (
        // 导航栏 logo&文字
        <nav id="header" className="bg-block text-white">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                {/* 点击logo回到主页 */}
                <Link to="/" className="toggleColor text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
                    <img src = {foody} alt="logo" className="w-40 h-40 object-cover"/>
                </Link> 
                <div className="nav-menu-wrapper flex items-center justify-between space-x-10">
                    <Link to="/" className="text-xl">Home</Link>
                    <Link to="#about" className="text-xl">About</Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                    {/* 声明式路由 */}
                    <Link to="/cart">
                        <img src={cartIcon} alt="cart"/>
                    </Link>
                    <Link to="/login">Log In</Link>
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}