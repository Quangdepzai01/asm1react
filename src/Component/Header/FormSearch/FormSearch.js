import React from "react";
import styles from "./FormSearch.module.css";

import DateRanger from "../DateRange/DateRange";

export default function FormSearch() {
  const submitHandle = (e) => {
    e.preventDefault();
    window.location.replace("http://localhost:3000/search");
  };

  return (
    <div className={`container mx-2 ${styles.formSearch}`}>
      <form
        className="row bg-light p-2 align-self-center"
        onSubmit={submitHandle}
      >
        <div className="col-3 align-self-center">
          <div className="row text-center align-items-center">
            <span className="me-2 text-secondary col-1">
              <i className="fa fa-bed"></i>
            </span>
            <input
              className="p-1 col"
              type="text"
              //   value={searchInfos.place}
              placeholder="Where are you going?"
              name="place"
            />
          </div>
        </div>

        <div className="col align-self-center">
          <div className="row align-items-center text-center">
            <DateRanger />
          </div>
        </div>

        <div className="col align-self-center">
          <div className="row align-items-center text-center">
            <div className="col-1">
              <span for="startDate" className="me-1 text-secondary">
                <i className="fa fa-female"></i>
              </span>
            </div>

            <div className="col-10">
              <div className="row">
                <div className="col-4 text-start">
                  <input
                    name="adult"
                    className={`p-1 ${styles.inputNum}`}
                    type="number"
                    placeholder="adult"
                    min="0"
                    // value={searchInfos.adult}
                  />
                </div>

                <div className="col-4 text-start">
                  <input
                    name="children"
                    className={`p-1 ${styles.inputNum}`}
                    type="number"
                    placeholder="children"
                    min="0"
                    // value={searchInfos.children}
                  />
                </div>

                <div className="col-4 text-start">
                  <input
                    name="room"
                    className={`p-1 ${styles.inputNum}`}
                    type="number"
                    placeholder="room"
                    min="0"
                    // value={searchInfos.room}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 me-2 align-self-center text-end">
          <div className="fitHeight">
            <button type="submit" className="btn bg-btn text-light fitHeight" >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
