import React, { useEffect, useState } from "react";
import "./TeamBlogs.css";
import frontend from "../../Components/Assets/FrontEnd.jpg";
import backend from "../../Components/Assets/BackEnd.jpg"
import ourteam from "../../Components/Assets/OurTeam.jpg";
import admin from "../../Components/Assets/admin.jpg";
import env from "../../Components/Assets/env1.jpg"
import fday from "../../Components/Assets/fday1.jpg"
import bday from "../../Components/Assets/bday.jpg"
import env5 from "../../Components/Assets/env5.jpg"
import market from "../../Components/Assets/market.jpg"
import testing from "../../Components/Assets/test.jpg"
// import cricket from "../../Components/Assets/fcricket.jpg"
import { Link } from "react-router-dom";
//import axios from "axios";
const TeamBlogs = () => {
    const teamGroups = [
  {
    teamName: "Our Team",
    image: ourteam, // Replace with your actual group photo path
    description:
      "At Techland IT Solutions, our skilled teams — from frontend and backend development to design and strategy — collaborate to deliver powerful, innovative digital solutions that drive results.",
  },
  {
    teamName: "Frontend Team",
    image: frontend, // Replace with your actual group photo path
    description:
      "Our frontend team ensures beautiful, responsive, and user-friendly web experiences using the latest technologies like React, Vue, and Tailwind CSS.",
  },
  {
    teamName: "Backend Team",
    image: backend,
    description:
      "Responsible for building secure, scalable, and high-performance server-side applications using Node.js, Express, Python, and databases.",
  },
  {
    teamName: "Admin Team",
    image: admin,
    description:
      "Our creative design team crafts intuitive UI/UX solutions that align with your brand identity and enhance customer engagement.",
  },
  {
    teamName: "Sales & Digital Marketing Team",
    image:  market,
    description:
      "Expanding our reach and boosting growth through effective sales strategies and impactful digital marketing solutions tailored to connect with the right audience.",
  },
 {
    teamName: "Testing Team",
    image: testing,
    description:
      "Ensuring quality and reliability through rigorous testing processes that deliver flawless, high-performing solutions.",
  },
];
const events = [
  {
    id: 1,
    image: env,
    title: 'Environment Day',
    date: 'June 5, 2025',
    description: 'Tree plantation and eco-awareness campaign.',
  },
  {
    id: 2,
    image: fday,
    title: 'Funday Celebration',
    date: 'June 10, 2025',
    description: 'Explore amazing artworks from local talents.',
  },
  {
    id: 3,
    image: bday,
    title: 'Birthday Celebrations',
    date: 'june 15, 2025',
    description: 'A joyful day of cake, laughter, and memories! 🎉',
  },
  {
    id: 4,
    image: env5,
    title: 'Cricket Chronicles',
    date: 'june 21, 2025',
    description: 'Moments of teamwork, sportsmanship, and fun on the cricket field.',
  },
  
  // You can add more events here...
];
    // const [teamGroups, setTeamGroups] = useState([]);
    // const [events, setEvents] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    //  useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const [teamRes, eventRes] = await Promise.all([
    //                 axios.get("http://localhost:8000/api/teams"),
    //                 axios.get("http://localhost:8000/api/events"),
    //             ]);
    //             setTeamGroups(teamRes.data);
    //             setEvents(eventRes.data);
    //             setLoading(false);
    //         } catch (err) {
    //             setError("Failed to fetch data");
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // if (loading) return <div className="text-center py-10">Loading...</div>;
    // if (error) return <div className="text-center py-10 text-red-600">{error}</div>;


    return (
        <section className="blogs-section">
            <div className="blogs-container">
                <h2 className="blogs-title">Our Experts at Techland IT Solutions</h2>
                <p className="blogs-subtitle">Experience, innovation, and technical excellence—meet the team behind our success.</p>
                <div className="blogs-grid">
                    {teamGroups.map((team, index) => (
                        <div key={index} style={{borderRadius: "0.75rem"}} className="blog-card">
                        <img
                            // src={`http://localhost:8000/storage/${team.image}`}
                            src={team.image}
                            alt={team.teamName}
                           style={{
                               width: "100%",
                                height: "auto",             
                                // maxHeight: "250px",          
                                objectFit: "contain",       
                                objectPosition: "center",    
                                borderRadius: "0.75rem",
                                backgroundColor: "#ffffff",
                                marginBottom: "1rem",
                                display: "block", 
                                margin:"0px" ,
                                padding:"0px"
                            }}
                        />
                        <h3 className="text-2xl font-semibold text-indigo-700 mt-2">{team.team_name}</h3>
                        <p className="text-gray-600 m-2 text-left">{team.description}</p>
                        </div>
                    ))}
                </div>
            </div>
           <div className="w-full py-10 bg-white mt-10 flex items-center justify-center min-h-screen">
                <div className="max-w-7xl w-full">
                    <h2 className="text-4xl font-bold mb-6 text-center">Our Team Activities</h2>

                    {events.length < 5 ? (
                    // Use flex to center when fewer than 5 items
                    <div className="flex justify-center gap-6 flex-wrap">
                        {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden w-full max-w-xs transition duration-300 transform hover:shadow-lg hover:scale-105 hover:border-[#9959F3]"
                        >
                            <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
                            <img
                                // src={`http://localhost:8000/storage/${event.image}`}
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">📅 {event.date}</p>
                            <p className="text-sm text-gray-700">{event.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    ) : (
                    // Use grid normally when 5 or more items
                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {events.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden w-full max-w-xs transition duration-300 transform hover:shadow-lg hover:scale-105 hover:border-[#9959F3]"
                        >
                            <div className="w-full h-40 bg-gray-100 flex items-center justify-center">
                            <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                            />
                            </div>
                            <div className="p-4">
                            <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">📅 {event.date}</p>
                            <p className="text-sm text-gray-700">{event.description}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                    )}
                </div>
           </div>
            <Link to="./team-gallery">
                <button className="mt-8 px-6 py-3 bg-[#8D238A] text-white border-none rounded-lg text-base cursor-pointer hover:bg-[#141c83]">
                    View All
                </button>
            </Link>
        </section>
    );
};

export default TeamBlogs;
