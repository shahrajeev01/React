import { IMG_CDN_URL } from "../constant";
import "../index.css"; 

const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {
    cloudinaryImageId,
    name,
    cuisines,
    areaName,
    deliveryTime,
    totalRatingsString,
    costForTwo,
    avgRating,} = resData.info;

    return (
        <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{areaName}</h6>
      <span>
        <h4
          style={
            avgRating < 4 ? { backgroundColor: "red" } : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRating}
        </h4>
        <h4>{totalRatingsString}</h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>

    );
};

export default RestaurantCard;