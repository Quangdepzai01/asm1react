import styles from "../Search.module.css";
//searchPopup
function SearchPopup() {
  const des = "destination";
  const checkDate = "checkInDate";

  return (
    <form className={`p-2 ${styles.bgForm}`}>
      <h3>Search</h3>
      <div className="pt-2">
        <label for={des} className="h5">Destination</label>
        <input type="text" name={des} className={styles.inputSearch}></input>
      </div>
      <div className="pt-2">
        <label for={checkDate} className="h5">Check-in Date</label>
        <input
          type="text"
          name={checkDate}
          className={styles.inputSearch}
        ></input>
      </div>

      <div className="pt-2">
        <label className="h5">Option</label>
        <div className="p-2">
          <div className="row">
            <div className="col-8 text-muted">
              <label for="minPrice">Min price per night</label>
            </div>

            <div className="col-4">
              <input name="minPrice" className={`${styles.inputSearch}`} />
            </div>
          </div>

          <div className="row">
            <div className="col-8 text-muted">
              <label for="maxPrice">Max price per night</label>
            </div>

            <div className="col-4">
              <input name="maxPrice" className={`${styles.inputSearch}`} />
            </div>
          </div>

          <div className="row">
            <div className="col-8 text-muted">
              <label for="adult" className="" >
                Adult
              </label>
            </div>
            <div className="col-4">
              <input name="adult" type="number" className={`${styles.inputSearch}`} min={0}/>
            </div>
          </div>

          <div className="row">
            <div className="col-8 text-muted">
              <label for="children" className="">
                Children
              </label>
            </div>
            <div className="col-4">
              <input name="children" type="number" className={`${styles.inputSearch}`} min={0}/>
            </div>
          </div>

          <div className="row">
            <div className="col-8 text-muted">
              <label for="room" className="">
                Room
              </label>
            </div>
            <div className="col-4">
              <input name="room" type="number" className={`${styles.inputSearch}`} min={0}/>
            </div>
          </div>
        </div>
      </div>

      <button className="btn text-light bg-btn fitWidth">Search</button>
    </form>
  );
}

export default SearchPopup;
