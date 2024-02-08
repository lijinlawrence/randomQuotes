import axios from "axios";
import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [quotes, setQuotes] = useState("");

  const getQuotes = async () => {
    const response = await axios.get("https://dummyjson.com/quotes");
    const randomNumber = Math.floor(
      Math.random() * response.data.quotes.length
    );
    console.log(response.data.quotes);
    setQuotes(response.data.quotes[randomNumber]);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const changeQuotes = () => {
    getQuotes();
  };
  return (
    <div>
      <div className=" d-flex justify-content-center align-items-center mt-5  ">
        <div
          className="card rounded-3 shadow-lg w-50 "
          
        >
          <div className="card-body   d-flex justify-content-center align-items-center flex-column">
            <p className="fs-4">{quotes?.quote}</p>
            <p className="text-center fs-1 fw-bold text-danger">
              -{quotes?.author}
            </p>
            <button onClick={changeQuotes} className="btn btn-dark">
              Find Quotes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
