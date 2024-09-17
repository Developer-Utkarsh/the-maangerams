import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Shop from "./pages/Shop";
import AboutPage from "/src/pages/AboutUs";
import ProductDescriptions from './components/ProductDescriptions';
import ProductsShowcase from './components/ProductsShowcase';


function App() {
    return (
        <Router>
            <div className="App">
            <Navbar />
            <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/shop" element={<Shop />} />

                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/" element={<ProductsShowcase />} />
                    <Route path="/product/:id" element={<ProductDescriptions />} />
                </Routes>
<Footer/>
            </div>
        </Router>
    );
}

export default App;
