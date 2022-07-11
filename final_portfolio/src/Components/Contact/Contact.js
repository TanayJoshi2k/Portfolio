import React, { useState, useEffect } from "react";
import classes from "./contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [nameError, setNameError] = useState("Name cannot be blank");
  const [emailError, setEmailError] = useState("Email cannot be blank");
  const [messageError, setMessageError] = useState("Mesaage cannot be blank");

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    if (!validateEmail(email)) {
      setEmailError("Invalid Email Format");
    } else {
      setEmailError("");
    }
    if (name === "") {
      setNameError("Name cannot be blank");
    } else {
      setNameError("");
    }

    if (email === "") {
      setEmailError("Email cannot be blank");
    } else {
      setEmailError("");
    }

    if (message === "") {
      setMessageError("Message cannot be blank");
    } else {
      setMessageError("");
    }
  }, [name, email, message]);

  return (
    <div className={classes.parentContainer}>
      <div id="contact" className={classes.metadata}>
        <div className={classes.container}>
          <p>Get In Touch</p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              className="bi bi-pin-map-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
              />
              <path
                fillRule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
              />
            </svg>
            <p>Find Me At</p>
            <p>Mumbai, IN</p>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              className="bi bi-mailbox"
              viewBox="0 0 16 16"
            >
              <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
              <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
            </svg>
            <p>Email me at</p>
            <p>tanaypjoshi@gmail.com</p>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ffffff"
              className="bi bi-pin-map-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"
              />
              <path
                fillRule="evenodd"
                d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"
              />
            </svg>
            <p>Call Me On</p>
            <p>+91 9930100047</p>
          </div>
        </div>
      </div>

      <div id="contact" className={classes.contactMeForm}>
        <div className={classes.container}>
          <p className={classes.heading}>Contact Me</p>
          <div className={classes.form}>
            <form
              action="https://formsubmit.co/cf3866e35057da7a76546033fc69d10f"
              method="POST"
            >
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError ? (
                  <div style={{ color: "gray" }}>{nameError}</div>
                ) : <div style={{ visibility:"hidden" }}>''</div>}
              </div>

              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError ? (
                  <div style={{ color: "gray" }}>{emailError}</div>
                ) : <div style={{ visibility:"hidden" }}>''</div>}
              </div>

              <div>
                <label>Message</label>
                <textarea
                  type="text"
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                {messageError ? (
                  <div style={{ color: "gray" }}>{messageError}</div>
                ) : <div style={{ visibility:"hidden" }}>''</div>}
              </div>
              <button
                className={
                  nameError || emailError || messageError
                    ? classes.disabled
                    : ""
                }
                type="submit"
                disabled={nameError || emailError || messageError}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
