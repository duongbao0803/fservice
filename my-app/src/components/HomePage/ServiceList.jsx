import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

// import { service } from "../../data";

function ServiceList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //     .get("https://fservices.azurewebsites.net/api/packages")
  //     .then((response) => {
  //       const threeService = response.data.slice(0, 3);
  //       setData(threeService);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://fservices.azurewebsites.net/api/packages")
      .then((response) => {
        // const filterTypeID = typeID.filter((data) => data.typeId === 1);
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // if (loading) {
  //   return <div>Loading Service...</div>;
  // }

  return (
    <>
      <div className="container mb-5 mt-5 ">
        <div className="content service-list ">
          <div className="row row-content mb-3">
            <div className="col-12 col-sm-12 col-md-12">
              <h2 className="mb-4">Những gói dịch vụ chúng tôi cung cấp</h2>
            </div>
          </div>

          <div className="row row-content service d-flex justify-center">
            {data.map((packages) => (
              <div
                className="col-12 col-sm-12 col-md-6 col-lg-4"
                style={{ position: "relative" }}
              >
                <div className="service-img mb-3">
                  <img
                    src={packages.image}
                    alt="Dọn phòng"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="service-details  pb-4">
                  <h5>{packages.name}</h5>
                  <p className="text-justify">{packages.description}</p>
                  <div style={{ position: "absolute", bottom: "0" }}>
                    <Link to={`/detail/${packages.id}`}>Tìm hiểu thêm</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceList;
