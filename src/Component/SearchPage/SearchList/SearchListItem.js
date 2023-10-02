import React from "react";
import styles from "./SearchList.module.css";
//item search
function SearchListItem(props) {
  const submitHandle = (e) => {
    e.preventDefault();
    window.location.replace("http://localhost:3000/detail");
  };
  const hotel = props.item;

  return (
    <div className="container-fluid mb-3">
    <form onSubmit={submitHandle} className={`bg-light p-2 row ${styles.searchForm}`}>
      <div className="col-4">
        <img src={`${hotel.image_url}`} alt={hotel.name}/>
      </div>
      <div className="col-8">
        <div className="headForm row">
          <h4 className="col-8">{hotel.name}</h4>
          <div className="col text-end">
            <span className="h5 p-1">{hotel.rate_text}</span>
            <span className="bg-btn btn">{hotel.rate}</span>
          </div>
        </div>

        <p className="my-1">{hotel.distance} from center</p>
        <p className="btn bg-btn3 my-1">{hotel.tag}</p>
        <h5>{hotel.description}</h5>
        <div className="row">
          <div className="col">
            <p>{hotel.type}</p>
            <p className="text-color3 h5">{hotel.free_cancel && `Free cancellation`}</p>
            <p className="text-color3">
              You can cancel later, so lock in this great price today!
            </p>
          </div>

          <div className="col text-end">
            <h4>${hotel.price}</h4>
            <p>Includes taxes and fees</p>
            <button type="submit" className="btn bg-btn text-light">See availability</button>
          </div>
        </div>
      </div>
    </form>
   </div>
  );
}

export default SearchListItem;
