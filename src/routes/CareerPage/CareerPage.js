import style from "./careerpage.module.css";
import LogoLink from "../../components/navigation/LogoLink.js";
import Form from "./Form";

const CareerPage = () => {
  return (
    <div className={style.container}>
      <LogoLink />
      <div className={style.content}>
        <div className={style.flex}>
        <h2>Job openings for Instrumentalist and vocalist</h2>
        <p>
          Would you like to join our band? If yes, fill up the form and we will
          get in touch with you soon.
        </p>
        <p>Your profile will be updated in ours site if you are selected!</p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default CareerPage;
