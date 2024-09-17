import Organic  from './OrganicFarmFood';
import Comp1 from '../components/Comp1';
import Comp2 from '../components/Comp2';
import Comp3 from '../components/Comp3';
import Comp4 from '../components/Comp4';
import Hero from "../components/Hero";
import { Products } from "../components/Products";
import ProductsShowcase from '../components/ProductsShowcase';

const HomePage = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', maxWidth: '100%', overflow: 'hidden' }}>
            {/* Hero Section */}
            <Hero />
            <Products />

            {/* Content Section */}
            <div style={{ marginTop: '0px', flexGrow: 1, paddingTop: '0px' }}>
                <Organic  />
            </div>

            <div style={{ flexGrow: 1, padding: '2px', maxWidth: '100%' }}>
                <Comp1 />
            </div>

            <div style={{ marginTop: '5px', flexGrow: 1, padding: '3px', marginLeft: '3px', marginRight: '3px', maxWidth: '100%' }}>
                <Comp2 />
            </div>

            <div style={{ marginTop: '5px', flexGrow: 1, padding: '3px', marginLeft: '0px', marginRight: '0px', maxWidth: '100%' }}>
                <Comp3 />
            </div>   
            <div style={{ marginTop: '-5px', flexGrow: 1, padding: '3px' ,backgroundColor:'#f9f9f9'}}>
                <Comp4 />
            </div>

            <div style={{ marginTop: '10px', flexGrow: 1, padding: '3px', marginLeft: '0px', marginRight: '0px', maxWidth: '100%' }}>
                <ProductsShowcase />
            </div>
        </div>
    );
};

export default HomePage;
