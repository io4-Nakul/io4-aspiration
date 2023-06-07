import React, { useEffect, useState } from "react";
import axios from "axios";

const Getapi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Axios get method to call the api ---
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setData(response?.data?.products);
        console.log("api response", response);
      })
      .catch((error) => console.log("error", error));
  }, []);
  console.log("1", data);
  return (
    <>
      <h1>nakul</h1>
      <p>this is get api component</p>
      <div style={{ display: "flex", flexWrap: "wrap"}}>
      {data?.map((item, index) => {
        console.log("item", item);
        
        return (
          <>
            <div className="card" style={{ width: "20rem", margin: "5%" }}>
              <img src={item?.thumbnail} alt="images_show" />
              <div className="card-body">
                <h5 className="card-title">Card title{item?.title}</h5>
                <p className="card-text">{item.description} </p>
                <p>Price: {item?.price}</p>
                <p>Rating: {item?.rating}</p>
                <h3>Stock: {item?.stock}</h3>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </>
        );
      })}
      </div>
    </>
  );
};

export default Getapi;
