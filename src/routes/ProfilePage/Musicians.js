import {  NavLink, Outlet,useParams } from "react-router-dom";
import axios from "axios"
import { useState ,useEffect} from "react";
const Musicians = () => {

  let params = useParams();
  const [musician, setMusician] = useState("")
 
  
  const fetchMusician = async () => {
    try {
      const result = await axios.get(
        `https://thaikoodam-bridge-backend.herokuapp.com/profiles/${params.musician}`
      );
      setMusician(result.data)
      
    } catch (error) {
      console.log('error',error);
      
    }
  }
  useEffect(() => {
   fetchMusician();
  }, [params.musician])

  
  return (
    <main style={{ padding: ".5rem"}}>
      {musician && (
        <div>
          {" "}
          <h2>{musician.name}</h2>
          <p>Name: {musician.name}</p>
          <p>Profile: {musician.profile}</p>
          {/* <img
          style={{ width: "20rem" }}
          src={musician.img}
          alt="imageOFArtist"
        />{" "} */}
          <NavLink to={`/profiles/${musician._id}/${musician._id}`}>
            More Info
          </NavLink>
        </div>
      )}

      <Outlet />
    </main>
  );
};

export default Musicians;
