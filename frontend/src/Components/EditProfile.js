import React from "react";
import "./EditProfile.css";
import { useState } from "react";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import UploadClient from "@uploadcare/upload-client";

function EditProfile() {
  let history = useHistory();
  const location = useLocation().state;
  const [startDate, setStartDate] = useState(new Date());
  const [mobile, setmobile] = useState(0);
  const [adresse, setadresse] = useState("");
  const [country, setcountry] = useState("");
  const [region, setregion] = useState("");
  const [skills, setskills] = useState("");
  const [education, seteducation] = useState("");
  const [description, setdescription] = useState("");
  const [facebook, setfacebook] = useState("");
  const [twitter, settwitter] = useState("");
  const [instagram, setinstagram] = useState("");
  const [website, setwebsite] = useState("");
  const [info, setinfo] = useState("");
  const [image, setimage] = useState("");
  const [url, seturl] = useState("");

  const register = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/api/user/register", {
      username: location.username,
      email: location.email,
      password: location.password,
      mobile: mobile,
      adresse: adresse,
      date_birth: startDate,
      date: Date.now,
      country: country,
      region: region,
      skills: skills,
      education: education,
      description: description,
      facebook: facebook,
      twitter: twitter,
      instagram: instagram,
      website: website,
      image: url,
    }).then((response) => {
      setinfo(response.data.message);
      if(response.data.bool){
      window.setTimeout(() => {
        history.push("/main");
      }, 1000);
    }
    });
  };

  const upload = (e) => {
    e.preventDefault();
    const client = new UploadClient({ publicKey: "0074a132b6c1cd126d61" });
    client.uploadFile(image).then((response) => {
      seturl(response.cdnUrl);
    });
  };


  return (
    <div className="row">
      <div className="col-md-3 border-right">
        <div className="d-flex flex-column align-items-center text-center p-3 py-5">
          <img
            className="rounded-circle mt-5"
            alt="profile"
            width="150px"
            src={url}
          />
          <span className="font-weight-bold">{location.nom}</span>
          <span className="text-black-50">{location.email}</span>
          <span></span>
        </div>
        <h1 className="image-upload">Upload an image</h1>
        <input
          className="imageuploader"
          type="file"
          onChange={(event) => {
            setimage(event.target.files[0]);
          }}
        />

        <button className="photo-sumbit1" onClick={upload}>
          Upload
        </button>
      </div>
      <div className="col-md-5 border-right">
        <div className="p-3 py-5">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="text-right">Profile Settings</h4>
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <label className="labels">Mobile Number</label>
              <input
                type="text"
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
                className="form-control"
                placeholder="enter phone number"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Address</label>
              <input
                type="text"
                onChange={(e) => {
                  setadresse(e.target.value);
                }}
                className="form-control"
                placeholder="enter address"
              />
            </div>
            <div className="col-md-12">
              <label className="labels">Date Of Birth</label>
            </div>
            <div className="col-md-12">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              <label className="labels">Country</label>
              <input
                type="text"
                onChange={(e) => {
                  setcountry(e.target.value);
                }}
                className="form-control"
                placeholder="country"
              />
            </div>
            <div className="col-md-6">
              <label className="labels">State/Region</label>
              <input
                type="text"
                onChange={(e) => {
                  setregion(e.target.value);
                }}
                className="form-control"
                placeholder="state"
              />
            </div>
          </div>
          <label className="labels">Skills</label>
          <input
            type="text"
            onChange={(e) => {
              setskills(e.target.value);
            }}
            className="form-control"
            placeholder="Skills"
          />
          <label className="labels">Education</label>
          <input
            type="text"
            onChange={(e) => {
              seteducation(e.target.value);
            }}
            className="form-control"
            placeholder="Education"
          />
          <label className="labels">Description</label>
          <div className="editor1">
            <CKEditor
              editor={ClassicEditor}
              data={description}
              onChange={(e, editor) => {
                const data = editor.getData();
                setdescription(data);
              }}
            />
          </div>
          <br />
          *Not Required*
          <div className="col-md-12 social">
            <label className="labels">Facebook Account</label>
            <input
              type="text"
              onChange={(e) => {
                setfacebook(e.target.value);
              }}
              className="form-control"
              placeholder="enter the link here"
            />
          </div>
          <div className="col-md-12 social">
            <label className="labels">Twitter Account</label>
            <input
              type="text"
              onChange={(e) => {
                settwitter(e.target.value);
              }}
              className="form-control"
              placeholder="enter the link here"
            />
          </div>
          <div className="col-md-12 social">
            <label className="labels">Instagram Account</label>
            <input
              type="text"
              onChange={(e) => {
                setinstagram(e.target.value);
              }}
              className="form-control"
              placeholder="enter the link here"
            />
          </div>
          <div className="col-md-12 social">
            <label className="labels">Your Website</label>
            <input
              type="text"
              onChange={(e) => {
                setwebsite(e.target.value);
              }}
              className="form-control"
              placeholder="enter the link here"
            />
          </div>
          <div className="mt-5 text-center">
            <button className="photo-sumbit2" onClick={register}>
          Sumbit
        </button>
          </div>
        </div>
      </div>
      {/* <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" /></div><br/>
                <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" className="form-control" placeholder="additional details" /></div>
            </div>
        </div> */}
    </div>
  );
}

export default EditProfile;
