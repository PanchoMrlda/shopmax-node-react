import {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./views/Index";
import Navbar from "./views/Navbar";
import Footer from "./views/Footer";
import Shop from "./views/Shop";
import Contact from "./views/Contact";
import About from "./views/About";
import Cart from "./views/Cart";
import Checkout from "./views/Checkout";
import Thankyou from "./views/Thankyou";
import ShopSingle from "./views/ShopSingle";

function App() {
    useEffect(() => {
        const scripts = [
            "/js/jquery-3.3.1.min.js",
            "/js/jquery-ui.js",
            "/js/popper.min.js",
            "/js/bootstrap.min.js",
            "/js/owl.carousel.min.js",
            "/js/jquery.magnific-popup.min.js",
            "/js/aos.js",
            "/js/main.js"
        ];

        const load = async () => {
            for (const src of scripts) {
                await new Promise((resolve, reject) => {
                    const s = document.createElement("script");
                    s.src = src;
                    s.onload = resolve;
                    s.onerror = reject;
                    document.body.appendChild(s);
                });
            }
        };

        load();

        const socket = new WebSocket(`ws://localhost:5000/ws`);

        socket.onopen = () => {
            console.log("Connected to WS server");
            socket.send("Hello server");
        };

        socket.onmessage = (event) => {
            console.log("Message from server:", event.data);
        };

        return () => socket.close();
    }, []);
    return (<BrowserRouter future={{
        v7_startTransition: true
    }}>
        <div className="site-wrap">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/shop" element={<Shop/>}/>
                <Route path="/shop-single" element={<ShopSingle/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/thankyou" element={<Thankyou/>}/>
                {/* Other routes... */}
            </Routes>
            <Footer/>
        </div>
    </BrowserRouter>);
}

export default App;
