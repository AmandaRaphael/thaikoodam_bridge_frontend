import style from "./careerpage.module.css";
import LogoLink from "../../components/navigation/LogoLink.js";
import { useState } from "react";
import axios from "axios"
const CareerPage = () => {
  const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [profile, setProfile] = useState("");
    const [newMembers, setNewMembers] = useState("")
    
    const formHandler = (e) => {
        e.preventDefault()
try {
  axios.post(`http://localhost:3001/profiles/career/members`, {
    name: fullName,
    phone,
    
     });
} catch (error) {
    console.log('error',error);
    
}
    }
  return (
    <>
      <LogoLink />
      <div className={style.container}>
        <h2>Job openings for Instrumentalist and vocalist</h2>
        <p>Would you like to join our band?</p>
        <p>If yes, fill up the form and we will get in touch with you soon.</p>
        <p>Your profile will be updated in ours site if you are selected!</p>
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
              <label for="message">Your Message:</label>
              <textarea
                name="msg"
                id="message"
                min="5"
                max="150"
                rows="3"
                cols="62"
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
      </div>
    </>
  );
};

export default CareerPage;
