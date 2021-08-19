import React, { useState } from "react";
import "./otpbox.css";

const OTPBox = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <>
      <div className="main-div">
        <div>
          <h2>Phone Verification</h2>
          <p>Enter the OTP sent to you to verify your Phone Number</p>

          {otp.map((data, index) => {
            return (
              <input
                className="otp-field"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}

          <p className="otp-data">OTP Entered - {otp.join("")}</p>
          <div className="button-div">
            <button
              className="clr-btn"
              onClick={(e) => setOtp([...otp.map((v) => "")])}
            >
              Clear
            </button>
            <button
              className="verify-btn"
              onClick={(e) => alert("Entered OTP is " + otp.join(""))}
            >
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OTPBox;
