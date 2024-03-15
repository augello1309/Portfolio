import Template from "../Template";
import "./Routes.css";
const ContactContain = () => {
  return (
    <div className="rowgrid">
      <div className="emailblock">
        <div className="email">
          Email:
          <button
            className="emailbutton"
            onClick={() =>
              navigator.clipboard.writeText("aja234@scarletmail.rutgers.edu")
            }
          >
            aja234@scarletmail.rutgers.edu
            <span>Click Email To Copy</span>
          </button>
        </div>
      </div>
      <div className="email">
        Phone Number:
        <button
          className="emailbutton"
          onClick={() => navigator.clipboard.writeText("6093500807")}
        >
          609-350-0807
          <span>Click Phone Number To Copy</span>
        </button>
      </div>
      <div className="email">
        LinkedIn Profile:
        <button
          className="emailbutton"
          onClick={() => navigator.clipboard.writeText("6093500807")}
        >
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/alexander-augello-558272253/"
          >
            https://www.linkedin.com/in/alexander-augello-558272253/
          </a>
        </button>
      </div>
    </div>
  );
};

function ContactInfo() {
  return (
    <Template
      children={null}
      page="Contact Info"
      body={ContactContain()}
    ></Template>
  );
}

export default ContactInfo;
