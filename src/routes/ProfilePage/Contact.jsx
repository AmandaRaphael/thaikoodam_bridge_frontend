
import { useState,useEffect } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

const Contact = () => {

  const params = useParams();
  const [contact, setContact] = useState("");

  const fetchContact = async () => {
    setContact("")
    try {
      setContact("")
      const result = await axios.get(
                `https://thaikoodam-bridge-backend.herokuapp.com/profiles/${params.musician}/${params.musicianId}/${params.musicianNum}`
      );
      setContact(result.data);
      console.log("contact",result.data)
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
   fetchContact();
   
  }, [])


 
    return (
      <div>
        <h2>Contact</h2>
        <p>Phone:{contact.phone}</p>
        <p>
          Email:{contact.email ? contact.email : `${contact.name}@gmail.com`}
        </p>
      </div>
    );
}

export default Contact
