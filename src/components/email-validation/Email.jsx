import { useEffect, useState } from "react";
import "./Email.css";

const Emailvalidation = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(null); // null initially, true for valid, false for invalid

  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  useEffect(() => {
    const validateEmail = () => {
      if (email.match(pattern)) {
        setIsValid(true);
      } else {
        setIsValid(false);
      }
    };

    if (email === "") {
      setIsValid(null); // reset validity if email is empty
    } else {
      validateEmail();
    }
  }, [email, pattern]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="email-container">
      <h2 style={{ color: "black", padding: "50px" }}>Email Validation</h2>
      <div className="container">
        <form
          className={`form ${
            isValid === true ? "valid" : isValid === false ? "invalid" : ""
          }`}
        >
          <div className="form__field">
            <label type="email" className="form__label">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              id="email"
              className="form__input"
              value={email}
              onChange={handleChange}
            />
            <i class="ri-mail-line form__icon"></i>
            <div className="form__error">
              <i class="ri-information-fill"></i>
              <span>Invalid email format. </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Emailvalidation;
