import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ListPackage = () => {
  const { id } = useParams();
  const [data, setData] = useState({ packageDetails: [], serviceDetails: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const initialResponse = await axios.get(
          `https://fservices.azurewebsites.net/api/packages/${id}?typeId=${1}`
        );
        console.log("check initial", initialResponse.data.packageDetails);

        if (initialResponse.data && initialResponse.data.packageDetails) {
          const serviceIds = initialResponse.data.packageDetails.map(
            (pd) => pd.serviceId
          );

          const serviceResponses = await Promise.all(
            serviceIds.map((id) =>
              axios.get(
                `https://fservices.azurewebsites.net/api/services/${id}`
              )
            )
          );
          console.log("check serviceRes", serviceResponses);
          const services = serviceResponses.map((response) => response.data);
          setData({
            packageDetails: initialResponse.data.packageDetails,
            serviceDetails: services,
          });
        }

        setLoading(false);
      } catch (error) {
        console.error("There was an error fetching the data", error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container service-container">
      <div className="row row-content">
        {data.serviceDetails.map((service, idx) => (
          <div
            key={idx}
            className="col-12 col-sm-12 col-md-6 col-lg-4 package-detail"
          >
            <div className="package-img mb-3">
              <img
                src={service.image}
                alt={service.name}
                className="w-100"
                style={{ width: "50%", height: "250px", objectFit: "cover" }}
              />
            </div>
            <div className="package-detail">
              <h4>{service.name}</h4>
              <span>{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPackage;
