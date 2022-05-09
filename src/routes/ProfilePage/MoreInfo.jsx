import { useParams,NavLink,Outlet } from 'react-router-dom'
import axios from "axios";
import { useState,useEffect } from "react";
const MoreInfo = () => {
  const params = useParams()
  //let member = getMusician(parseInt(params.musicianId, 10));
  const [moreInfo,setMoreInfo]=useState("")
  const fetchMoreInfo = async () => {
    
    try {
      setMoreInfo("")
      const result = await axios.get(
        `https://thaikoodam-bridge-backend.herokuapp.com/profiles/${params.musician}/${params.musicianId}`
      );
      setMoreInfo(result.data);
    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
   fetchMoreInfo()
  }, [])

    return (
      <main >
        <h2>More Info</h2>
        <p>{moreInfo.moreInfo?moreInfo.moreInfo:`I am a ${moreInfo.profile}`}</p>
        <NavLink
          to={`/profiles/${moreInfo._id}/${moreInfo._id}/${moreInfo._id}`}
        >
          Contact
        </NavLink>
        <Outlet />
      </main>
    );
}

export default MoreInfo
