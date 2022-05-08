import React from 'react'
import style from "./careerpage.module.css";
import { useState } from "react";
import axios from "axios";
const Form = () => {
     const [fullName, setFullName] = useState("");
     const [email, setEmail] = useState("");
     const [phone, setPhone] = useState("");
     const [profile, setProfile] = useState("");
 
    
     const formHandler = (e) => {
       e.preventDefault();
       alert(
         "Successfully submitted your application!Check profiles Page to see your profile."
       );
       try {
         axios.post(
           `https://thaikoodam-bridge-backend.herokuapp.com/profiles/career/members`,
           {
             name: fullName,
             email,
             phone,
             profile,
           }
         );
       } catch (error) {
         console.log("error", error);
       }
     };
    
    return (
      <form onSubmit={formHandler}>
        <fieldset className={style.regForm}>
          <div className={style.controlMargin}>
            <label for="full_name">
              Your Full Name:<span>*</span>
            </label>
            <input
              type="text"
              q
              name="fullName"
              id="full_name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className={style.controlMargin}>
            <label for="Email">
              Email:<span>*</span>
            </label>
            <input
              type="email"
              name="email"
              id="Email"
              placeholder="smithbob@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.controlMargin}>
            <label for="phone">
              Phone Number:<span>*</span>
            </label>
            <input
              type="number"
              name="phn"
              id="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className={style.controlMargin}>
            <label for="profile">
              Profile:<span>*</span>
            </label>
            <input
              type="text"
              name="Profile"
              id="profile"
              required
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
            />
          </div>
          <div className={style.controlMargin}>
            <label for="message">Your Message:</label>
            <textarea
              name="msg"
              id="message"
              min="5"
              max="150"
              
            ></textarea>
          </div>
          {/* <div className={style.profile}>
              <label for="profile" required>
                What is your profile?<span>*</span>
              </label>
              <br></br>
              <label for="instrumentalist">Instrumentalist</label>
              <input type="radio" name="Profile" id="instrumentalist" />

              <label for="vocalist">Vocalist</label>
              <input type="radio" name="Profile" id="vocalist" />
            </div> */}
          <div className={style.button}>
            <input type="submit" className={style.submitButton} />
          </div>
        </fieldset>
      </form>
    );
}

export default Form
