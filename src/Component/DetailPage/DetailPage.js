import styles from "./DetailPage.module.css";
//item
const item = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};
//trang detail
function DetailPage() {
  // console.log(item);

  return (
    <div className="">
      <div className="row py-4">
        <div className="col">
          <h3>{item.name}</h3>
          <p>
            <i className="fa-sharp fa-solid fa-location-dot"></i> {item.address}
          </p>
          <p>
            <strong className={styles.textColor1}>{item.distance}</strong>
          </p>
          <p>
            <strong className={styles.textColor2}>{item.price}</strong>
          </p>
        </div>
        <div className="col text-end">
          <button className="btn bg-btn">Reserve or Book Now!</button>
        </div>
      </div>

      <div className=" row mb-3">
        {item.photos.map((photo) => (
          <div className="col-4 mb-3">
            <img src={`${photo}`} alt={item.name} />
          </div>
        ))}
      </div>

      <div className="detailFooter row mb-3">
        <div className="col">
          <div className="p-2">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
        <div className="col-3">
          <div className="bg-secondary bg-opacity-25 p-2">
            <h3>Perfect for a 9-night stay!</h3>
            <p>
              Located in the real heart of Krakow, <br /> this property has an
              excellent <br /> location score of 9.8!
            </p>
            <h3>
              ${item.nine_night_price} {`(9 nights)`}
            </h3>
            <button className="btn bg-btn fitWidth">
              Reserve or Book Now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
