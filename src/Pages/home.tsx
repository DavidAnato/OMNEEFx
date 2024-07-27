import Hero from "../Components/Home/hero";
import Navbar from "../Components/navbar";
import OMNEEFxTrading from "../Components/Home/OMNEEFxTrading";
import TradingDef from "../Components/Home/def";
import TradingSuccess from "../Components/Home/tradingSuccess";
import TarifVIP from "../Components/Home/tarifVIP";
import Prefooter from "../Components/Home/prefooter";
import Footer from "../Components/footer";
import Tarif from "../Components/Home/tarif";
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <OMNEEFxTrading/>
    <TradingDef/>
    <Tarif/>
    <TradingSuccess/>
    <TarifVIP/>
    <Prefooter/>
    <Footer/>
    </>
  );
};

export default Home;
