import React, { useState } from "react";

const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
  const [otp_value, setOtp_value] = useState(new Array(6).fill(""));

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp_value([
      ...otp_value.map((d, idx) => (idx === index ? element.value : d)),
    ]);

    //Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="wrapper">
      <h1 className="main-heading">Sign in</h1>
      <p className="sub-text">Sign in using your mobile number.</p>
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm" onSubmit={loginSubmit}>
            <div className="input-field">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Phone"
                name="phone"
                autoComplete="false"
              />
            </div>
            <button className="main-button" type="submit" id="sign-in-button">
              Sign in
            </button>
          </form>
        </div>
      ) : (
        <div className="main-div">
          <form>
            <h2>Phone Verification</h2>
            <p>Enter the OTP sent to you to verify your Phone Number</p>

            {otp_value.map((data, index) => {
              return (
                <input
                  className="otp-field"
                  type="text"
                  name="otp_value"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  onFocus={(e) => e.target.select()}
                  autoComplete="false"
                />
              );
            })}

            <p className="otp-data">OTP Entered - {otp_value.join("")}</p>
            <div className="button-div" onSubmit={otpSubmit}>
              <button
                className="clr-btn"
                onClick={(e) => setOtp_value([...otp_value.map((v) => "")])}
              >
                Clear
              </button>
              <button
                className="verify-btn"
                onClick={(e) => alert("Entered OTP is " + otp_value.join("") + "You are logged in.")}
                type="submit"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
        // <div className="form-wrapper" onSubmit={otpSubmit}>
        //   <form id="otpForm">
        //     <div className="input-field">
        //       <label>Enter OTP</label>
        //       <input
        //         type="number"
        //         placeholder="One time password"
        //         name="otp_value"
        //         autoComplete="false"
        //       />
        //     </div>
        //     <button className="main-button" type="submit">
        //       Verify OTP
        //     </button>
        //   </form>
        // </div>
      )}
    </div>
  );
};

export default SignIn;
