import React, { Component } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import config from "../../utils/cus-axios";
import { Spinner } from "react-bootstrap";

export default function PaymentResult(props) {
  const [paymentData, setPaymentData] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    const parsedData = {};
    queryParams.forEach((value, key) => {
      parsedData[key] = value;
    });
    setPaymentData(parsedData);
  }, []);

  console.log("check data: ", paymentData);
  paymentData.vnp_Amount = parseFloat(paymentData.vnp_Amount);

  const jsonData = JSON.stringify(paymentData);
  console.log("check amount", typeof parseFloat(paymentData.vnp_Amount));
  console.log("check object payment:", jsonData);

  const postPaymentData = async () => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await config.post("/api/payment", jsonData, { headers });
      console.log("check json", jsonData);
      console.log("check res postdata", res);
      if (res && res.status === 200) {
        navigate("/payment/success", {
          state: {
            jsonData,
          },
        });
        return;
      } else if (res.status === 400) {
        navigate("/payment/error", {
          state: {
            jsonData,
          },
        });
        return;
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  postPaymentData();

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className="text-center">
        <Spinner animation="border" variant="primary" />
      </div>
    </div>
  );
}
