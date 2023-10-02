import styles from "./HotelItem.module.css";
//danh sach cac hotel
function HotelItem(props) {

  const linkHotel = "http://localhost:3000/detail";

  return (
    <div className={props.className}>
      <img
        src={`${props.hotel.image_url}`}
        className={`${styles.imgHotel}`}
        alt={`${props.hotel.name}`}
      />
      <h5 className={`${styles.typeName}`}>
        <a href={linkHotel}>{props.hotel.name}</a>
      </h5>

      <p>{`${props.hotel.city}`}</p>
      <h5>{`Starting from $${props.hotel.price}`}</h5>
      <p><span className="btn bg-primary text-light">{`${props.hotel.rate}`}</span>{`${props.hotel.type}`} </p>
    </div>
  );
}

export default HotelItem;
