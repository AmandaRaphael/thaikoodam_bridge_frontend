import {useRef,useEffect, useState} from "react";
import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import whitebg from "../../assets/whitebg.jpg"
import LogoLink from "../../components/navigation/LogoLink";
import axios from "axios";

const Profiles = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const [members, setMembers] = useState("")
  
  
  const fetchMembers = async () => {
    try {
      const result = await axios.get(
        `https://thaikoodam-bridge-backend.herokuapp.com/profiles/members`
      );
      setMembers(result.data)
   
      
    } catch (error) {
      console.log('error',error);
      
    }
  }
    
//gives an object with one property called current. which is used to refer focus here
  const inputRef = useRef(); 
   useEffect(() => {
     inputRef.current.focus();
     inputRef.current.style.fontSize = "20px";
     fetchMembers()
   }, []);
  
  return (
    <div
      className="profileDiv fontSize"
      style={{ backgroundImage: `url(${whitebg})` }}
    >
   <LogoLink/>
    
      <main style={{ display: "flex", color: "black" }}>
        <nav style={{ borderRight: "solid 1px", padding: "1rem" }}>
          <input
            ref={inputRef}
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {git push heroku main
                setSearchParams({});
              }
            }}
          />
                       
          {members && members
            .filter((member) => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = member.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map((member) => (
              <NavLink
                style={({ isActive }) => {
                  return {
                    display: "block",
                    margin: "1rem 0",
                    color: isActive ? "red" : "",
                  };
                }}
                to={`/profiles/${member._id}`}
                key={member._id}
              >
                {member.name}
              </NavLink>
            ))}
        </nav>
        <Outlet />
      </main>
    </div>
  );
};;

export default Profiles;
