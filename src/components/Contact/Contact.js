import { useState } from "react";
import { HiMail } from "react-icons/hi";

const Contact = () => {
  const [contactStatus, setContactStatus] = useState(false);
  return (
    <>
      <button
        className="mail"
        id="contact"
        onClick={() => setContactStatus((s) => !s)}
      >
        <HiMail className="mail" id="mail" />
      </button>

      {contactStatus && (
        <div className="form emailBox">
          <form
            className="form"
            action="https://formsubmit.co/c7bdc6daa6b8e16eeedc124a794b9e39"
            method="POST"
          >
            <p
              className="form"
              style={{
                margin: "20px 0 10px 50px",
                fontSize: "30px",
                fontWeight: "600",
                letterSpacing: "1px",
              }}
            >
              Contact Me
            </p>
            <div className="inputs form">
              <input
                className="form"
                type="hidden"
                name="_subject"
                value="E-mail from greazey.tk"
              />
              <p className="form" id="name">
                Name
              </p>
              <input
                className="form"
                type="text"
                name="name"
                placeholder="Enter Name"
                required
              />
              <p className="form" id="emailip">
                E-mail
              </p>
              <input
                className="form"
                type="email"
                name="email"
                placeholder="Enter E-mail"
                required
              />
              <p className="form" id="message">
                Message
              </p>
              <textarea
                className="form"
                style={{
                  height: "100px",
                  width: "270px",
                  borderRadius: "12px",
                }}
                type="text"
                name="message"
                placeholder="Write your message..."
                required
              />
              <input
                className="form"
                type="hidden"
                name="_next"
                value="https://greazey.tk/thankyou.html"
              />
              <input
                className="form"
                style={{
                  marginTop: "25px",
                  alignSelf: "center",
                  background: "#00ffaa",
                }}
                type="submit"
                value="Send"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Contact;
