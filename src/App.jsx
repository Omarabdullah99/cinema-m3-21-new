import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context";

export default function App() {
  const [cartData,setCartData]=useState([])
  // console.log('apicontext-addCard',cartData)
  return (
    <div>
      <MovieContext.Provider value={{cartData,setCartData}}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </div>
  );
}
