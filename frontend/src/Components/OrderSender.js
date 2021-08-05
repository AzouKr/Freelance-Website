import React from "react";
import "./OrderSender.css";
import NavBar from "./NavBar";
import Section from "./Section";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";



function OrderSender(props) {
  let history = useHistory();


    useEffect(() => {
      Axios.defaults.withCredentials = true;
      Axios.get("http://localhost:3001/api/user/login").then((response) => {
        setinfo(response.data.user);
      });
      }, [])

    const [description, setdescription] = useState("");
    const subject = "Order of package " + "("+ props.location.aboutprops.title + ")";
    const [info, setinfo] = useState([]);
    const total = 3 + props.location.aboutprops.price;


    const send  = (e)  => {
        e.preventDefault();
        Axios.post("http://localhost:3001/api/sendEmail", {
          sendemail: info.email,
          recemail: props.location.aboutprops.email,
          subject: subject,
          description: description,
        });
        window.setTimeout(() => {
          history.push("/main");
        }, 1000);
        }


  return (
    <div>
      <NavBar />
      <Section />
      <div className="Email-container">
        <div className="check-out">
          <div className="first-box">
            <label className="Summary">Summary</label>
            <div className="tottal-con">
              <label className="Subtotal">Subtotal</label>
              <h1 className="origin-price">${props.location.aboutprops.price}</h1>
            </div>
            <div className="tottal-con1">
              <label className="service-fee">Service-Fee</label>
              <h1 className="VAT-price">$3</h1>
            </div>
          </div>
          <div className="space-between"></div>
          <div className="tottal-con2">
            <label className="Subtotal">Subtotal</label>
            <h1 className="origin-price">${total}</h1>
          </div>
          <button className="Send-order" onClick={send} >Send The Order</button>
        </div>
        <div className="email-desc">
        <label className="receiver">To :</label>
        <h1 className="receiver-email">{props.location.aboutprops.email}</h1>
        <label className="subject">subject :</label>
        <h1 className="subject-title">{subject}</h1>
        </div>
        <div className="editor-mail">
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={(e, editor) => {
                  const data = editor.getData();
                  setdescription(data);
                }}
              />
            </div>
      </div>
    </div>
  );
}

export default OrderSender;
