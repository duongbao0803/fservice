import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function ServiceList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://fservices.azurewebsites.net/api/packages")
      .then((response) => {
        const threeService = response.data.slice(0, 3);
        setData(threeService);
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
              <h3 className="mb-4">Những gói dịch vụ chúng tôi cung cấp</h3>
            </div>
          </div>

          <div className="row row-content service d-flex justify-center">
            {data.map((service) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                <div className="service-img">
                  <img
                    src={service.image}
                    alt="Dọn phòng"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="service-details text-justify">
                  <h5>{service.name}</h5>
                  <p>{service.description}</p>
                  <p>
                    <a href="#">Tìm hiểu thêm</a>
                  </p>
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
