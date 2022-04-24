
import { useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

const Contact = () => {

  const params = useParams();
  const [contact, setContact] = useState("");

  const fetchContact= async () => {
    try {
      const result = await axios.get(
        `http://localhost:3001/profiles/${params.musician}/${params.musicianId}/${params.musicianNum}`
      );
      setContact(result.data);
    } catch (error) {
      console.log("error", error);
    }
  };
  
  fetchContact();

 
    return (
      <div>
        <h2>Contact</h2>
            <p>Phone:{contact.phone}</p>
            <p>Email:{contact.name}@gmail.com</p>
      </div>
    );
}

export default Contact
