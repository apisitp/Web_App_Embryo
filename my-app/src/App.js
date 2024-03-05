import './App.css';
import React, { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import CloudinaryUploadWidget from "./CloudinaryUploadWidget";
function App() {
  const [publicId, setPublicId] = useState("");
  // Replace with your own cloud name
  const [cloudName] = useState("dg36gbgkx");
  // Replace with your own upload preset
  const [uploadPreset] = useState("hwljeewm");
  const [uwConfig] = useState({
    cloudName,
    uploadPreset
    // cropping: true, //add a cropping step
    // showAdvancedOptions: true,  //add advanced options (public_id and tag)
    // sources: [ "local", "url"], // restrict the upload sources to URL and local files
    // multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    // clientAllowedFormats: ["images"], //restrict uploading to image files only
    // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    // theme: "purple", //change to a purple theme
  });

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName
    }
  });
console.log(publicId);
  const myImage = cld.image(publicId);
  return (

    <div className="App">
      <header className="App-header">
        <div className='grid-container'>
          <div className='grid-item'>
            <h1>HUMAN EMBRYO  <br />GRADING MODEL  <br />DEMONSTRATION</h1>
            <p>สาธิตโมเดลการให้คะแนน <br />คุณภาพตัวอ่อน</p>
            <img src='https://s3-alpha-sig.figma.com/img/cba7/faa6/05405946ccfd53e3bb0ea759ca0db8c5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M42D-rH-DRk1ikOGAsBb4Amo1GYpDYQYYsY895zfeceVBvhSzH3yqdvY0jYZPHaAgv615JbzkRdxgGye3Mcv3jpSSF5om6w0bMjmcLpxuTOT~I7GT4JJC5WJqGjzb4z3850DhoScE3hC8g2xjU4V~1MSZJHSzDiKYj4DYDqIynB9TFyk3iV5I~~Wepw36R8F8GnCFROs9m4XPnfVteUCFJTuynud6TLrsRQkyKvzFJgMpGQdu~fNaFc3Co-ziwkpuoCG0FU2GzH1BK~ggB7~ZkZp0dh53QxMwcTrU6ZSeCy27dJyqsQrMNjwlzconbbosSyeR0Ft8u1tJUtOo6GX9w__'></img>
          </div>
          <div className='grid-item'>
            <div className='demonstration-box'>
              <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
            </div>
          </div>
        </div>
      </header>
    </div>

  );
}

export default App;