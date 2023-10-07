import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ListPackage() {
  const [data, setData] = useState({ packageDetails: [], serviceDetails: [] }); // Initialize serviceDetails as an array

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
          const initialResponse = await axios.get('https://fservices.azurewebsites.net/api/packages/1');

          if (initialResponse.data && initialResponse.data.packageDetails) {
              
              const serviceIds = initialResponse.data.packageDetails.map(pd => pd.serviceId);
              const serviceResponses = await Promise.all(serviceIds.map(id => axios.get(`https://fservices.azurewebsites.net/api/services/${id}`)));

              const services = serviceResponses.map(response => response.data);

              setData({
                  packageDetails: initialResponse.data.packageDetails,
                  serviceDetails: services
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
          <div key={idx} className="col-12 col-sm-12 col-md-6 col-lg-3 package-detail">
            <div className="package-img">
            <img src={service.image} alt={service.name} className="w-100" style={{ height: "220px" }} />
            </div>
            <div className="package-detail">
              <p>{service.name}</p>
              <span>{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }
