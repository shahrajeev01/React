import RestaurantCard from "./RestaurantCard";
import { restaurantListt } from "../constant";
import "../index.css"; 
import { useState, useEffect } from "react";

const Body = () => {

    const [listofResturants, setListofResturants] = useState([]); 
    let [filteredRestaurant, setfilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    const handleSearch = ()=>{
      filteredRestaurant = listofResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );         
      setfilteredRestaurant(filteredRestaurant);
    };

    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    };

    useEffect(()=>{
      fetchData();
    },[]);



    const fetchData = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setListofResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);//optional chaining
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(listofResturants.length === 0){
      return <h1>Loading...</h1>
    }

    return (
      <div className="body">
        <input 
        type="text"
        className="search-box"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        onKeyDown={handleKeyPress}/>
        <button 
        onClick={handleSearch}>
          Search
        </button>
        <div className="filter">
          <button className="filter-btn"
          onClick={()=> {
            
            const filteredList = listofResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setListofResturants(filteredList)
          }}>
            Top rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    );
};

export default Body;