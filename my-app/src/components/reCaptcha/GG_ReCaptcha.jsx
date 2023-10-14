import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const GG_ReCaptcha = () => {
  //   const [recaptchaValue, setRecaptchaValue] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (recaptchaValue) {
      console.log("reCAPTCHA validation succeeded");
    } else {
      console.log("reCAPTCHA validation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ReCAPTCHA
        sitekey="6Lf3GJ4oAAAAADI0HjH-4wENEUJH0IQ6qZo-S8Fa"
        onChange={(value) => setRecaptchaValue(value)}
      />
    </form>
  );
};

export default GG_ReCaptcha;
