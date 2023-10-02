import HotelItem from "./HotelItem";

const hotels = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

function Hotels() {
  return (
    <section className="pt-4">
      <h2 className="mb-3 fw-bold">Homes guest love</h2>

      <div className="row gx-3 py-3">
        {hotels.map((hotel, index) => (
          <HotelItem hotel={hotel} className="col" key={index}/>
        ))}
      </div>
    </section>
  );
}

export default Hotels;
