import axios from "axios";
import React, { useState, useEffect } from "react";
import "../css/styleorderPackage.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Package() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fservices.azurewebsites.net/api/packages")
      .then((response) => {
        const typeID = response.data;
        const filterTypeID = typeID.filter((data) => data.typeId === 1);
        setData(filterTypeID);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading Banner...</div>;
  }

  return (
    <>
      <div className="banner" />
      <div className="container">
        <div className="search-filter">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-6">
              <div className="search">
                <input type="text" placeholder="Search here..." />
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-6">
              <div className="filter">
                <span>Sắp xếp theo: </span>
                <select name id>
                  <option value={1}>Sort nè</option>
                  <option value={1}>Sort</option>
                  <option value={1}>Sort</option>
                </select>
              </div>
            </div>
          </div>
          <div className="list_package">
            {data.map((packageList) => (
              <div className="row list_package-row">
                <>
                  <div className="col-md-4">
                    <div className="list_package-img">
                      <img
                        src={packageList.image}
                        alt=""
                        width="100%"
                        height="230px"
                      />
                    </div>
                  </div>
                  <div className="col-md-8">
                    <h4>{packageList.name}</h4>
                    <p>{packageList.description}</p>
                    <span>
                      Chỉ từ: <span style={{ color: "FF8228" }} />
                      {packageList.price}
                    </span>
                  </div>
                </>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Package;
