import React, { useState } from 'react';
import styles from "./Former.module.css";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import Buttonr from '../../Buttons/Buttonr';

const Formr = () => {

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [message, setmessage] = useState("")

  const onSubmit = (event) => {
    event.preventDefault();

    setname(event.target[0].value)
    setemail(event.target[1].value)
    setmessage(event.target[2].value)
  };

  return (
    <section className={styles.container}>

      <div className={styles.contactdetails}>
        <div className={styles.btns}>
          <Buttonr
            text="VIA SUPPORT CHAT"
            icon={<MdMessage />}
          />
          <Buttonr
            text="VIA CALL"
            icon={<IoCall />}
          />
        </div>
        <Buttonr
          issecond_btn={true}
          text="VIA EMAIL FORM"
          icon={<MdMessage />}
        />

        <form onSubmit={onSubmit}>
          <div className={styles.formrs}>
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" name="name" />
          </div>
          <div className={styles.formrs}>
            <label htmlFor="Email">E-mail</label>
            <input type="email" id="Email" name="email" />
          </div>
          <div className={styles.formrs}>
            <label htmlFor="Text">Text</label>
            <textarea id="Text" name="text" rows="8" />
          </div>
          <div className={styles.ahm}
            style={{
              display: "flex",
              justifyContent: "end"
            }}>
            <Buttonr text="SUBMIT" />
          </div>
          <div> {"Entered Output: " + name + " " + email + " " + message}</div>
        </form>
      </div>

      <div className={styles.contactiner}>
        <img src="/images/Service 24_7-pana 1.png" alt="Contact illustration" />
      </div>

    </section>
  );
}

export default Formr;



