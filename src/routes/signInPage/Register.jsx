import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Register() {
const [imageUploaded, setImageUploaded] = useState(null);
  const [username, setUsername] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      firstname: formData.get("firstname"),
      lastname: formData.get("lastname"),
      email: formData.get("email"),
      password: formData.get("password"),
      image:formData.get("image")
    };
    console.log("data", data);
    setData(data);
    setUsername(data.username);
    try {
     const res= await axios.post(
        "https://thaikoodam-bridge-backend.herokuapp.com/user/register",
        data
      );
      setImageUploaded(res.data.file.fileURL);
      alert(
        "Successfully registered"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const checkUsernameAvailability = async () => {
    try {
      await axios.post(
        `https://thaikoodam-bridge-backend.herokuapp.com/user/checkUsername/${username}`,
        data
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      sx={{
        width: 300,
        height: 300,
        margin: "0 auto",
      }}
    >
      <form onSubmit={handleSubmit}>
        <FormLabel>Registration Form</FormLabel>
        <TextField
          id="username"
          name="username"
          type="text"
          label="Username"
          required={true}
          onChange={checkUsernameAvailability}
        />
        <TextField
          id="firstname"
          name="firstname"
          type="text"
          label="First name"
          required={true}
        />
        <TextField
          id="lastname"
          name="lastname"
          type="text"
          label="Last name"
          required={true}
        />
        <TextField
          id="email"
          name="email"
          type="email"
          label="E-mail"
          required={true}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          required={true}
        />
        <input
          id="photo"
          name="image"
          type="file"
          label="userphoto"
          required={true}
        />
        {imageUploaded && <img src={imageUploaded} alt="pic" width="50px" height="50px"/>}
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <div>
        <h2>
          Already a user? <NavLink to="/signIn">signIn</NavLink>
        </h2>
      </div>
    </Box>
  );
}
