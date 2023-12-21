import Footer from "../../../Shared/Footer/Footer";
import Navbar from "../../../Shared/Navbar/Navbar/Navbar";
import Banner from "../Banner/Banner";
import WhoUseThis from "../WhoUseThis/WhoUseThis";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WhoUseThis></WhoUseThis>
            <Footer></Footer>
        </div>
    );
};

export default Home;