import {useState} from "react"
import validator from "validator"

const Form = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneType, setPhoneType] = useState("");
    const [staff, setStaff] = useState("student");
    const [bio, setBio] = useState("");
    const [emailNotifications, setEmailNotifications] = useState("");

    const [errors, setErrors] = useState([]);

    const validate = () => {
        if (name.length < 1) {errors.push("Name cannot be empty.")};
        if (email.length < 1) {errors.push("Email cannot be empty.")};
        if (!validator.isEmail(email)) { errors.push("Invalid email. Fix it. Try it again. You don't have to write all of that. That looks perfect.")}
        if (!validator.isMobilePhone(phoneNumber) && phoneNumber !== "") {errors.push("Invalid phone. Fix it. Try it again. You don't have to write all of that. That looks perfect.")}
        if (phoneNumber !== "" && phoneType === "") {errors.push("Select a phone type. It's gonna be like a drop down menu something.")}
        if (bio.length > 280) {errors.push("Keep it shorter. We don't wanna know that much about you.")}
    }
}

export default Form;