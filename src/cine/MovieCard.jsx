/* eslint-disable react/prop-types */

import { useContext, useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import MovieRating from "./MovieRating";
import { MovieContext } from "../context";

export default function MovieCard({ movie }) {
  const [showModal, setShowmodal] = useState(false);
  const { cartData, setCartData } = useContext(MovieContext);
  function handleShowModal() {
    setShowmodal(true);
  }

  //handle function
  const hadleAddToCart = (e, movie) => {
    e.stopPropagation();
    const found = cartData.find((item) => {
      return item.id === movie.id;
    });

    if(!found){
      setCartData([
        ...cartData,
        movie
      ])
    }else{
      console.log("movie already existes")
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={movie} setShowmodal={setShowmodal} />
      )}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={handleShowModal}
      >
        <img className="w-full object-cover" src={movie.cover} alt="" />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <MovieRating value={movie.rating} />
          </div>
          <button
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={(e) => hadleAddToCart(e, movie)}
          >
            <img src="tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </button>
        </figcaption>
      </figure>
    </>
  );
}
