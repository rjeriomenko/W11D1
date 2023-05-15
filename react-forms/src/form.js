import { useState } from "react";
import validator from "validator";
import "./form.css";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneType, setPhoneType] = useState("");
  const [staff, setStaff] = useState("student");
  const [bio, setBio] = useState("");
  const [emailNotifications, setEmailNotifications] = useState(false);

  const [errorMessages, setErrorMessages] = useState([]);

  const validate = () => {
    let errors = [];
    if (name.length < 1) {
      errors.push("Name cannot be empty.");
    }
    if (email.length < 1) {
      errors.push("Email cannot be empty.");
    }
    if (!validator.isEmail(email)) {
      errors.push(
        "Invalid email. Fix it. Try it again. You don't have to write all of that. That looks perfect."
      );
    }
    if (!validator.isMobilePhone(phoneNumber) && phoneNumber !== "") {
      errors.push(
        "Invalid phone. Fix it. Try it again. You don't have to write all of that. That looks perfect."
      );
    }
    if (phoneNumber !== "" && phoneType === "") {
      errors.push(
        "Select a phone type. It's gonna be like a drop down menu something."
      );
    }
    if (bio.length > 280) {
      errors.push("Keep it shorter. We don't wanna know that much about you.");
    }
    return errors;
  };

  const handleChange = (field) => {
    return (e) => {
      switch (field) {
        case "name":
          setName(e.target.value);
          break;
        case "email":
          setEmail(e.target.value);
          break;
        case "phoneNumber":
          setPhoneNumber(e.target.value);
          break;
        case "phoneType":
          setPhoneType(e.target.value);
          break;
        case "staff":
          if (e.target.checked) {
            setStaff(e.target.value);
          }
          break;
        case "bio":
          setBio(e.target.value);
          break;
        case "emailNotifications":
          setEmailNotifications(e.target.checked);
          break;
        default:
          break;
      }
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = validate();
    if (errors.length > 0) {
      setErrorMessages(errors);
    } else {
      let user = {
        name,
        email,
        phoneNumber,
        phoneType,
        staff,
        bio,
        emailNotifications,
      };
      console.log(user);
    }
  };

  const showErrors = () => {
    if (errorMessages.length === 0) {
      return null;
    } else {
      return (
        <ul className="error">
          {errorMessages.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
      );
    }
  };

  return (
    <>
    
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" placeholder="Name" onChange={handleChange("name")} />
      </label>
      <br />
      <br />
      <label>
        Email
        <input
          type="text"
          placeholder="Email"
          onChange={handleChange("email")}
        />
      </label>
      <br />
      <br />
      <label>
        Phone Number:
        <input
          type="text"
          placeholder="Phone Number"
          onChange={handleChange("phoneNumber")}
        />
      </label>
      <br />
      <br />
      <label>
        Phone Type
       <select onChange={handleChange("phoneType")}>
        <option value="" defaultChecked>Select Option</option>
        <option value="home">Home</option>
        <option value="mobile">Mobile</option>
        <option value="work">Work</option>
       </select>
      </label>
      <br />
      <br />
      <label>
        Instructor
        <input
          type="radio"
          name="staff"
          value="instructor"
          onChange={handleChange("staff")}
        />
      </label>
      <br />
      <label>
        Student
        <input
          type="radio"
          defaultChecked
          name="staff"
          value="student"
          onChange={handleChange("staff")}
        />
      </label>
      <br />
      <br />
      <input type="text" placeholder="Bio" onChange={handleChange("bio")} />
      <br />
      <br />
      <label>
        Email notifications
        <br />
        <input type="checkbox" onChange={handleChange("emailNotifications")} />
      </label>
      <br />
      <br />
      <button>Submit</button>
      <br/>
      <br/>
    {showErrors()}
    </form>
    </>
  );
};

export default Form;
