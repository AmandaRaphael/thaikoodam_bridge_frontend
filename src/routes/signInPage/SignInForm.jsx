import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log("data login", data);

    try {
      const result = await axios.post(
        "https://thaikoodam-bridge-backend.herokuapp.com/user/login",
        data
      );

      console.log(
        result.status === 200 ? "Successful login" : "Couldn't login"
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
        <FormLabel>Login Form</FormLabel>
        <TextField
          id="username"
          name="username"
          type="text"
          label="Username"
          required={true}
        />
        <TextField
          id="password"
          name="password"
          type="password"
          label="Password"
          required={true}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
      <div>
        <h2>
          New User? <NavLink to="/signUp">signUp</NavLink>
        </h2>
      </div>
     
    </Box>
  );
}
