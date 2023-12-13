import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import config from "../../utils/cus-axios";

const ListPackage = () => {
  const { id } = useParams();
  const [data, setData] = useState({ packageDetails: [], serviceDetails: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = async () => {
    try {
      const initialResponse = await config.get(
        `/api/packages/${id}?typeId=${2}`
      );

      if (initialResponse.data && initialResponse.data.packageDetails) {
        const serviceIds = initialResponse.data.packageDetails.map(
          (pd) => pd.serviceId
        );

        const serviceResponses = await Promise.all(
          serviceIds.map((id) => config.get(`/api/services/${id}`))
        );
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
  };

  return (
    <div className="container service-container">
      <div className="row row-content">
        {loading
          ? Array.from({ length: 3 }).map((_) => (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 package-detail">
                <div className="package-img mb-3">
                  <Skeleton
                    height={250}
                    style={{ objectFit: "cover" }}
                    className="w-100"
                  />
                </div>
                <div className="package-detail">
                  <h4>
                    <Skeleton width={200} />
                  </h4>
                  <span>
                    <Skeleton count={2} />
                  </span>
                </div>
              </div>
            ))
          : data.serviceDetails?.map((service, idx) => (
              <div
                key={idx}
                className="col-12 col-sm-12 col-md-6 col-lg-4 package-detail mb-4"
              >
                <div className="package-img mb-3">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-100"
                    style={{
                      width: "50%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="package-detail">
                  <h4>{service.name}</h4>
                  <span style={{ textAlign: "justify" }}>
                    {service.description}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ListPackage;
