import React,{ useEffect, useState } from "react";
import axios from "axios";
import { baseUrl, imagePath } from "../../Api/constant";

import frontend from "../../Components/Assets/FrontEnd.jpg";
import backend from "../../Components/Assets/BackEnd.jpg";
import ourteam from "../../Components/Assets/OurTeam.jpg";
import admin from "../../Components/Assets/admin.jpg";
import img1 from "../../Components/Assets/img1.jpg";
import img2 from "../../Components/Assets/img2.jpg";
import img3 from "../../Components/Assets/img3.jpg";
import img4 from "../../Components/Assets/img4.jpg";
import img5 from "../../Components/Assets/img5.jpg";
import img6 from "../../Components/Assets/img6.jpg";
import img7 from "../../Components/Assets/img7.jpg";
import img8 from "../../Components/Assets/img8.jpg";
import img9 from "../../Components/Assets/img9.jpg";
import img10 from "../../Components/Assets/img10.jpg";
import env2 from "../../Components/Assets/pooji.jpg";
import env3 from "../../Components/Assets/monu.jpg";
import env4 from "../../Components/Assets/WhatsApp Image 2025-06-16 at 18.01.22_9576fb19.jpg";
import fun2 from "../../Components/Assets/fday2.jpg";
import fun3 from "../../Components/Assets/fday3.jpg";
import fun4 from "../../Components/Assets/fday4.jpg";
import fcricket from "../../Components/Assets/fcricket.jpg";
import market from "../../Components/Assets/market.jpg"
import testing from "../../Components/Assets/test.jpg"
const teamImages = [
  ourteam,market,testing,
  frontend,
  backend,
  admin,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  env2,
  env3,
  env4,
  fun2,fun3,fun4,fcricket,
];

const TeamGallery = () => {
  // const [teamImages, setTeamImages] = useState([]);

  // useEffect(() => {
  //   async function fetchData(){
  //     await handleGetGallery();
     
  //   }
  //   fetchData();
  // }, [])

  // const handleGetGallery = async () => {
  //     try {
  //         const response = await axios.get(`${baseUrl}/team-gallery`)
  //         const image = response.data.data;
  //         console.log(image);
  //         setTeamImages(image);
  //         console.log(`${imagePath}/${image}`);
  //     } catch (e) {
  //       console.log('Error Occured :', e);
  //     }
  // }

  return (
    <section className="max-w-7xl mx-5 mb-5">
      <h1 class="text-4xl font-bold my-3 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamImages.map((img, index) => (
          <div key={index} className="relative w-full aspect-[4/3] sm:aspect-auto sm:h-56 md:h-64 lg:h-56 xl:h-64 bg-gray-100 rounded-lg shadow-md overflow-hidden">
            <img
              //src={`${imagePath}/${img.image_path}`}
              src={img}
              alt={`Team ${index}`}
              className="absolute inset-0 w-full h-full object-cover sm:object-fill transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamGallery;
