import { NavLink } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites, id]);

  return (
    <div className={style.cardpic}>
      {isFav ? (
        <button onClick={handleFavorite} className={style.favBtn}>❤️</button>
      ) : (
        <button onClick={handleFavorite} className={style.favBtn}>🤍</button>
      )}
      <NavLink to={`/detail/${id}`}>
        <div>
          <img src={image} alt="" />
          <h1>{name}</h1>
          <h2>Status: {status}</h2>
          <h2>Species: {species}</h2>
          <h2>Gender: {gender}</h2>
          <h2>Origin: {origin}</h2>
        </div>
      </NavLink>
      <button
        onClick={() => {
          onClose(id);
        }}
        className={style.closebtn}
      >
        X
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
