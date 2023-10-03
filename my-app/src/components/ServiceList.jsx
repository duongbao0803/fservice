import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/style.css";

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

  if (loading) {
    return <div>Loading Service...</div>;
  }

  return (
    <div className="container">
      <>
        <div className="content service-list">
          <div className="row row-content">
            <div className="col-12 col-sm-12 col-md-12">
              <span>Những gói dịch vụ chúng tôi cung cấp</span>
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
                <div className="service-details">
                  <p>{service.name}</p>
                  <p>{service.description}</p>
                  <p>
                    <a href="">Tìm hiểu thêm</a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default ServiceList;
