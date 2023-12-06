import { useEffect, useState } from "react";
import FunitureRecommendation from "./components/pages/FunitureRecommendation";
import Hero from "./components/pages/Hero";
import Navbar from "./components/pages/Navbar";
import OurProducts from "./components/pages/OurProducts";
import Partner from "./components/pages/Partner";
import WhyChooseUs from "./components/pages/WhyChooseUs";
import CardProduct from "./components/CardProduct";
import Newslatter from "./components/pages/Newslatter";
import Footer from "./components/pages/Footer";

function App() {
  const [dataFurniiture, setDataFurniiture] = useState([]);

  const getData = async () => {
    const response = await fetch(
      "https://656d83d6bcc5618d3c23510b.mockapi.io/products"
    );
    const data = await response.json();
    console.log(data);
    setDataFurniiture(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Partner />
        <FunitureRecommendation />
        <OurProducts>
          {dataFurniiture &&
            dataFurniiture.map((item) => (
              <CardProduct
                key={item.id}
                title={item.name}
                price={item.price}
                img={item.image}
              />
            ))}
        </OurProducts>
        <Newslatter />
      </main>
      <Footer />
    </>
  );
}

export default App;
