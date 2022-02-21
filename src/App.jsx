import "./App.css";
import data from "./data.json"
import dataPro from "./dataPro.json"
import Navbar from "./components/NavBar";
import StorieCards from "./components/StorieCards";
import SuggestedCategory from "./components/SuggestedCategory";
import ProductCard from "./components/ProductCard";
import ProductsOfTheWeek from "./components/ProductsOfTheWeek";

export default function App() {
  const storieCard = data.map( item => {
      return(
        <StorieCards 
          key={item.id}
          img={item.coverImg}
          user={item.user}
          />
      )
    }
  )

      const productCard = dataPro.map( item => {
      return(
        <ProductCard
          key={item.id}
          productTitle={item.productTitle}
          profilePicture={item.profilePicture}
          productImage={item.productImage}
          user={item.user}
          price={item.price}
          description={item.description}

          />
      )
    }
  ) 

      const productsOfTheWeek= dataPro.map( item => {
      return(
        <ProductCard
          key={item.id}
          productTitle={item.productTitle}
          profilePicture={item.profilePicture}
          productImage={item.productImage}
          user={item.user}
          price={item.price}
          description={item.description}

          />
      )
    }
  ) 
  return (

<div className="container">
  <Navbar />

  <section  
  className="storie-card-list">
  {storieCard}
  </section>

  <SuggestedCategory />

 <section  
  className="product-card-list">
  {productCard}
 </section>

{/* <section  
  className="product-of-the-week-list">
  {productCard}
  </section>*/}

  
  
</div>
  );
}

