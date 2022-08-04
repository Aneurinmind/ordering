import { BrowserRouter,Route,Routes } from "react-router-dom";
import { Header } from "../components/Header"; // 非路由组件

//路由组件
import Home from "../pages/Home"
import Login from "../pages/Login"
import Menu from "../pages/Menu"
import Register from "../pages/Register"
import Cart from "../pages/Cart"
import PaymentSuccess from "../pages/PaymentSuccess"


// 管理路由导航
const Navigation = () => {
    return(
        <BrowserRouter>
            <Header></Header>
            {/* 配置路由组件 */}
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Register/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/menu" element={<Menu/>} />
                <Route path="cart" element={<Cart/>} />
                <Route path="payment-success" element={<PaymentSuccess/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation