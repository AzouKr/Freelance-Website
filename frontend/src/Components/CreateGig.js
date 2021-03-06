import React from "react";
import NavBar from "./NavBar";
import Section from "./Section";
import "./createGig.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import UploadClient from "@uploadcare/upload-client";
import Footer from "./Footer";
import slideshow from "../img/slidshow2.gif";



function CreateGig() {
  let history = useHistory();
  const [description, setdescription] = useState("");
  const [image1, setimage1] = useState("");
  const [image2, setimage2] = useState("");
  const [image3, setimage3] = useState("");
  const [url1, seturl1] = useState("");
  const [url2, seturl2] = useState("");
  const [url3, seturl3] = useState("");
  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [price, setprice] = useState(0);
  const [info, setinfo] = useState([]);
  const [err, seterr] = useState("");

  const upload = (e) => {
    e.preventDefault();
    const client = new UploadClient({ publicKey: "0074a132b6c1cd126d61" });
    client.uploadFile(image1).then((response) => {
      seturl1(response.cdnUrl);
    });
    client.uploadFile(image2).then((response) => {
      seturl2(response.cdnUrl);
    });

    client.uploadFile(image3).then((response) => {
      seturl3(response.cdnUrl);
    });
  };

  useEffect(() => {
    Axios.defaults.withCredentials = true;
  Axios.get("http://localhost:3001/api/user/login").then((response) => {
    setinfo(response.data.user);
  });
  }, [])

  const create = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/api/Creategig", {
      email: info.email,
      title: title,
      description: description,
      image1: url1,
      image2: url2,
      image3: url3,
      price: price,
      type: category,
    }).then((response) => {
      seterr(response.data.message);
      if(response.data.bool){
        window.setTimeout(() => {
          history.push("/main");
        }, 1000);
      }
    });
  };

  

  return (
    <div>
      <NavBar />
      <Section />
      <div className="body">
      <div className="create-gig">
      <img src={slideshow} alt="Slideshow" className="Slide2" />
        <div className="gig-overview">
          <div className="gig-title-section">
            <label className="gig-title-text">GIG TITLE</label>
            <textarea
              type="text"
              placeholder="i will do something i'm really good at"
              className="title-input"
              onChange={(e) => {
                settitle(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="gig-category-section">
            <label className="gig-title-gategory">CATEGORY</label>
            <select
              className="gig-select-gategory"
              onChange={(e) => {
                setcategory(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="Graphics & Design">Graphics & Design</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Writing & Translation">
                Writing & Translation
              </option>
              <option value="Video & Animation">Video & Animation</option>
              <option value="Music & Audio">Music & Audio</option>
              <option value="Programming & Tech">Programming & Tech</option>
            </select>
          </div>
          <div className="gig-description-section">
            <label className="gig-title-description">Description</label>
            <div className="editor">
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
          <div className="gig-package-section">
            <label className="gig-title-price">Price</label>
            <input
              className="price-dc"
              placeholder="Price"
              onChange={(e) => {
                setprice(e.target.value);
              }}
            ></input>
          </div>
          <div className="gig-image-section">
            <label className="gig-title-image">Images</label>
            <div className="images-grid">
              <div className="grid-1">
                <img src={url1} alt="image1" className="image1"></img>
                <input
                  className="imageuploader-gig1"
                  type="file"
                  onChange={(event) => {
                    setimage1(event.target.files[0]);
                  }}
                />
              </div>

              <div className="grid-2">
                <img src={url2} alt="image2" className="image2"></img>
                <input
                  className="imageuploader-gig2"
                  type="file"
                  onChange={(event) => {
                    setimage2(event.target.files[0]);
                  }}
                />
              </div>
              <div className="grid-3">
                <img src={url3} alt="image3" className="image3"></img>
                <input
                  className="imageuploader-gig3"
                  type="file"
                  onChange={(event) => {
                    setimage3(event.target.files[0]);
                  }}
                />
              </div>
            </div>
            <button className="photo-sumbit" onClick={upload}>
              Upload
            </button>
          </div>
          <button className="gig-sumbit" onClick={create}>
            Create
          </button>
          <p className="error">{err}</p>
        </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CreateGig;
