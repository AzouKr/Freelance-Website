import React from 'react'
import "./EditProfile.css";
import { useState } from "react";
import Axios from "axios";
import { useLocation} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router-dom";



function EditProfile() {
    let history = useHistory();
    const location = useLocation().state;
    const [startDate, setStartDate] = useState(new Date());
    const [name, setname] = useState("");
    const [surname, setsurname] = useState("");
    const [mobile, setmobile] = useState(0);
    const [adresse, setadresse] = useState("");
    const [country, setcountry] = useState("");
    const [region, setregion] = useState("");
    const [facebook, setfacebook] = useState("");
    const [twitter, settwitter] = useState("");
    const [instagram, setinstagram] = useState("");
    const [website, setwebsite] = useState("");
    const [info, setinfo] = useState([]);

    const register = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/api/profile", {
          email: location.email,
          name: name,
          surname: surname,
          mobile: mobile,
          adresse: adresse,
          date_birth: startDate,
          country: country,
          region: region,
          facebook: facebook,
          twitter: twitter,
          instagram: instagram,
          website: website,
          
        }).then((response) => {
          setinfo(response.data);
              console.log(info);
        });
      };

    return (
        <div className="row">
            <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" alt="profile" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">{location.nom}</span><span className="text-black-50">{location.email}</span><span></span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className="labels">Name</label><input type="text" onChange={(e) => { setname(e.target.value); }} className="form-control" placeholder="first name" /></div>
                    <div className="col-md-6"><label className="labels">Surname</label><input type="text" onChange={(e) => { setsurname(e.target.value); }} className="form-control" placeholder="surname"/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" onChange={(e) => { setmobile(e.target.value); }} className="form-control" placeholder="enter phone number" /></div>
                    <div className="col-md-12"><label className="labels">Address</label><input type="text" onChange={(e) => { setadresse(e.target.value); }} className="form-control" placeholder="enter address" /></div>
                    <div className="col-md-12"><label className="labels">Date Of Birth</label></div>
                    <div className="col-md-12"><DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/></div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" onChange={(e) => { setcountry(e.target.value); }} className="form-control" placeholder="country" /></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" onChange={(e) => { setregion(e.target.value); }} className="form-control"  placeholder="state"/></div>
                </div>
                <br/>
                *Not Required*
                <div className="col-md-12"><label className="labels">Facebook Account</label><input type="text" onChange={(e) => { setfacebook(e.target.value); }} className="form-control" placeholder="enter the link here" /></div>
                <div className="col-md-12"><label className="labels">Twitter Account</label><input type="text" onChange={(e) => { settwitter(e.target.value); }} className="form-control" placeholder="enter the link here" /></div>
                <div className="col-md-12"><label className="labels">Instagram Account</label><input type="text" onChange={(e) => { setinstagram(e.target.value); }} className="form-control" placeholder="enter the link here" /></div>
                <div className="col-md-12"><label className="labels">Your Website</label><input type="text" onChange={(e) => { setwebsite(e.target.value); }} className="form-control" placeholder="enter the link here" /></div>


                <div className="mt-5 text-center"><button onClick={register} className="btn btn-primary profile-button" type="button">Save Profile</button></div>
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
    )
}

export default EditProfile
