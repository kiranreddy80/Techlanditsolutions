import React, { useState, useEffect, useRef, useCallback } from 'react';
import "./ProjectList.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingCart, 
  faMoneyBillWave, 
  faGraduationCap, 
  faHotel,
  faMobileScreen,
  faGlobe,
  faLaptopCode,
  faTools,
  faUserGroup
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// Sample images
import meato from '../../Components/Assets/Projectimg/meato.png';
import cashexweb from '../../Components/Assets/Projectimg/cashexweb.png';
import sapid from '../../Components/Assets/Projectimg/sapid.png';
import templecity from '../../Components/Assets/Projectimg/templecity.png';
import workoasisweb from '../../Components/Assets/Projectimg/workoasisweb.png';
import primepantry from "../../Components/Assets/Projectimg/primepantry.png";
import eshop from "../../Components/Assets/Projectimg/eshop.png";
import floan112 from "../../Components/Assets/Projectimg/floan112.jpg";
import roarbank from "../../Components/Assets/Projectimg/froarbank.jpg";
import finance from "../../Components/Assets/Projectimg/fupstox-loans.jpg";
import study from "../../Components/Assets/Projectimg/StudyHub.jpg";
import learn from "../../Components/Assets/Projectimg/learn.jpg";
import course from "../../Components/Assets/Projectimg/CoursePlanner.jpg";
import StayEasy from "../../Components/Assets/Projectimg/stayeasy.jpg";
import GourmetGetaway from "../../Components/Assets/Projectimg/14347.jpg";
import TableTrek from "../../Components/Assets/Projectimg/TableTrek.jpg";
import HostManager from "../../Components/Assets/Projectimg/9903.jpg";
import nudeal from "../../Components/Assets/Projectimg/enudealmobile.png"
import meehelp from "../../Components/Assets/Projectimg/meehelp.png";
import templecityweb from "../../Components/Assets/Projectimg/templecityweb.png";
import safePassImg from "../../Components/Assets/SafePassImg.jpg";
const Portfolio = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [category, setCategory] = useState("All");
    const [subCategory, setSubCategory] = useState(null);
    const [viewAllStates, setViewAllStates] = useState({});
    const statsRef = useRef(null);
    // Enhanced stats with color and animation
    const stats = useRef([
        { label: "Mobile Apps", value: 156, icon: <FontAwesomeIcon icon={faMobileScreen} className="text-3xl text-purple-600" /> },
        { label: "Websites", value: 94, icon: <FontAwesomeIcon icon={faGlobe} className="text-3xl text-blue-600" /> },
        { label: "Projects", value: 52, icon: <FontAwesomeIcon icon={faLaptopCode} className="text-3xl text-green-600" /> },
        { label: "Happy Clients", value: 350, icon: <FontAwesomeIcon icon={faUserGroup} className="text-3xl text-orange-500" /> }
    ]);

    const projects = [
        { id: 1, title: "Meato App", type: "Mobile App", mainCategory: "E-Commerce", img: meato,
            text:"An online food delivery service that connects users with local restaurants."
         },
        { id: 2, title: "Cashex Website", type: "Static Website", mainCategory: "Financial", img: cashexweb,
            text:"A job search platform that bridges the gap between job seekers and employers."
         },
        { id: 3, title: "Sapid Platform", type: "Dynamic Website", mainCategory: "Education", img: sapid,
            text:"Discover a curated selection of high-quality electronics, fashion, and lifestyle essentials — all in one place."
         },
        { id: 4, title: "Temple City", type: "Dynamic Website", mainCategory: "General Utilities", img: templecity,
            text:"An innovative web application for temple services and priest bookings."
         },
        { id: 5, title: "Work Oasis", type: "Dynamic Website", mainCategory: "E-Commerce", img: workoasisweb,
            text:"A job search platform that bridges the gap between job seekers and employers."
         },
         { id: 6, title: "Prime Pantry", type: "Dynamic Website", mainCategory: "E-Commerce", img: primepantry,
            text:"Prime Pantry delivers everyday household essentials and groceries straight to your door."
         },
         { id: 7, title: "Eshop User App", type: "Dynamic Website", mainCategory: "E-Commerce", img: eshop ,
            text:"A job search platform that bridges the gap between job seekers and employers."
         },
         { id: 8, title: "Loan112", type: "Dynamic Website", mainCategory: "Financial", img: floan112,
            text:"Loan112 is your reliable and secure personal loan solution designed to support your financial needs quickly and transparently."
         },
         { id: 9, title: " Roar Bank", type: "Dynamic Website", mainCategory: "Financial", img: roarbank,
            text:"Roarbank is experience of the perfect blend of a credit card and savings account with zero joining fees, zero annual charges, and zero fuss."
         },
         { id: 10, title: "Upstox Loans", type: "Static Website", mainCategory: "Financial", img: finance,
            text:"From unplanned expenses to your next big life goal—whatever the need, Upstox Loans makes borrowing stress-free and instant"
         },
          { id: 11, title: "StudyHub Landing Page", type: "Static Website", mainCategory: "Education", img: study,
            text:"A visually appealing static website that showcases a fictional online tutoring platform, including course offerings, tutor profiles, and contact information."
         },
          { id: 12, title: "CoursePlanner", type: "Dynamic Website", mainCategory: "Education", img: course,
            text:"A dynamic web application that allows university students to plan their academic semester by selecting courses, checking schedules, and calculating credit loads."
         },
          { id: 13, title: "LearnMate", type: "Mobile App", mainCategory: "Education", img: learn,
            text:"An interactive mobile app that helps school students master subjects like math, science, and grammar using flashcards, quizzes, and progress tracking."
         },
         { id: 14, title: "StayEasy", type: "Mobile App", mainCategory: "Hospitality", img: StayEasy,
            text:"A sleek mobile app for hotel and vacation rental booking with features like real-time availability, filters by amenities, and in-app chat with hosts."
         },
         { id: 15, title: "GourmetGetaway", type: "Static Website", mainCategory: "Hospitality", img: GourmetGetaway,
            text:" A static website for a fictional luxury resort, highlighting accommodation options, fine dining experiences, and spa services with beautiful imagery."
         },
         { id: 16, title: "TableTrek", type: "Dynamic Website", mainCategory: "Hospitality", img: TableTrek,
            text:"A dynamic web app that allows users to discover and book tables at local restaurants, view menus, read reviews, and receive real-time booking confirmations."
         },
         { id: 17, title: "HostManager Dashboard", type: "Dynamic Website", mainCategory: "Hospitality", img: HostManager,
            text:"A web-based admin panel for hotel staff to manage room availability, guest check-ins/outs, and housekeeping schedules with real-time updates."
         },
         { id: 18, title: "Nudeal App", type: "Mobile App", mainCategory: "E-Commerce", img: nudeal,
            text:"Nudeal is your one-stop platform for discovering unbeatable deals across dining, fashion, wellness, and more."
         },
         { id: 19, title: "MeeHelp", type: "Mobile App", mainCategory: "General Utilities", img: meehelp,
            text:"A user-friendly mobile app for finding helpers and services."
         },
         { id: 19, title: "Temple City Web", type: "Static Website", mainCategory: "General Utilities", img: templecityweb,
            text:"An innovative web application for temple services and priest bookings."
         },
         { id:20, title: "SafePass Vault",type: "Mobile App", mainCategory: "General Utilities", img: safePassImg,
            text: "A secure password manager with browser extension support and encrypted cloud backup."
        },
           
            
    ];

    // Category icons with hover effects
    const categoryIcons = {
        "E-Commerce": <FontAwesomeIcon icon={faShoppingCart} className="mr-2 text-lg text-white hover:scale-110 transition-transform" />,
        "Financial": <FontAwesomeIcon icon={faMoneyBillWave} className="mr-2 text-lg text-white hover:scale-110 transition-transform" />,
        "General Utilities": <FontAwesomeIcon icon={faTools} className="mr-2 text-lg text-white hover:scale-110 transition-transform" />,
        "Education": <FontAwesomeIcon icon={faGraduationCap} className="mr-2 text-lg text-white hover:scale-110 transition-transform" />,
        "Hospitality": <FontAwesomeIcon icon={faHotel} className="mr-2 text-lg text-white hover:scale-110 transition-transform" />,
    };

    const animateStats = useCallback(() => {
        stats.current.forEach((stat, index) => {
            let start = 0;
            const increment = Math.ceil(stat.value / 50);
            const timer = setInterval(() => {
                start += increment;
                if (start >= stat.value) {
                    start = stat.value;
                    clearInterval(timer);
                }
                setCounts(prevCounts => {
                    const newCounts = [...prevCounts];
                    newCounts[index] = start;
                    return newCounts;
                });
            }, 40);
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animationTriggered) {
                    setAnimationTriggered(true);
                    animateStats();
                }
            },
            { threshold: 0.5 }
        );

        if (statsRef.current) observer.observe(statsRef.current);
        return () => {
            if (statsRef.current) observer.unobserve(statsRef.current);
        };
    }, [animateStats, animationTriggered]);

    // Filter based on category + subcategory
    const filteredProjects = projects.filter(project => {
        if (category === "All") return true;
        if (category === "Mobile App") return project.type === "Mobile App";
        if (category === "Website") {
            if (!subCategory) return project.type.includes("Website");
            return project.type === `${subCategory} Website`;
        }
        return false;
    });

    // Group by mainCategory
    const groupedProjects = filteredProjects.reduce((acc, project) => {
        if (!acc[project.mainCategory]) acc[project.mainCategory] = [];
        acc[project.mainCategory].push(project);
        return acc;
    }, {});

    return (
        <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Portfolio | Successful Projects in Web & App Development
                </h1>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                    View our portfolio showcasing successful digital marketing, web development, 
                    and app development projects delivered in Hyderabad.
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["All", "Mobile App", "Website"].map(cat => (
                    <button
                        key={cat}
                        className={`px-6 py-2 rounded-full font-medium transition-all ${
                            category === cat 
                                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" 
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => { setCategory(cat); setSubCategory(null); }}
                    >
                        {cat === "All" ? "All" : cat === "Mobile App" ? "Mobile Apps" : "Websites"}
                    </button>
                ))}
            </div>

            {/* Subcategory buttons */}
            {category === "Website" && (
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {["Static", "Dynamic"].map(sub => (
                        <button
                            key={sub}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${
                                subCategory === sub 
                                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" 
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                            onClick={() => setSubCategory(sub)}
                        >
                            {sub} Websites
                        </button>
                    ))}
                </div>
            )}

            {/* Grouped Projects by Main Category */}
           {Object.entries(groupedProjects).map(([mainCategory, projectList]) => {
                const isViewAll = viewAllStates[mainCategory];
                const visibleProjects = isViewAll ? projectList : projectList.slice(0, 4);

                return (
                    <div key={mainCategory} className="mb-16 px-5">
                        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3
                        bg-[linear-gradient(90deg,_#ff00ee,_#0056e7,_#ff00ee)] text-white h-[3rem] rounded">
                            {categoryIcons[mainCategory]}
                            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-white">
                                {mainCategory}
                            </span>
                        </h2>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-3">
                            {visibleProjects.map(project => (
                                <div 
                                    key={project.id} 
                                    className="border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-white group"
                                >
                                    <div className="overflow-hidden relative">
                                        <img 
                                            src={project.img} 
                                            alt={project.title} 
                                            className="w-full h-48 object-fit-contain group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <span className="absolute top-2 right-2 bg-slate-950 text-white text-xs px-4 py-2 rounded">
                                            {project.type}
                                        </span>
                                    </div>
                                    <div className="p-4 text-center">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h3>
                                        <p className="text-xs text-gray-500 flex justify-start">{project.text}</p>
                                    </div>
                                </div>
                            ))}

                           {/* <div className="col-span-full text-center mt-4">
                                <button
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${
                                        isViewAll
                                            ? "bg-gray-200 text-gray-700 hover:shadow-lg"
                                            : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"
                                    }`}
                                    onClick={() =>
                                        setViewAllStates(prev => ({
                                            ...prev,
                                            [mainCategory]: !prev[mainCategory]
                                        }))
                                    }
                                    disabled={projectList.length <= 4}
                                >
                                    {isViewAll ? "Show Less" : "View All"}
                                </button>
                            </div> */}
                            <div className="col-span-full text-center mt-4">
                                <Link 
                                    to={`/portfolio/${mainCategory}`}  // Navigates to the category detail page
                                    className={`px-6 py-2 rounded-full font-medium transition-all ${isViewAll ? "bg-gray-200 text-gray-700 hover:shadow-lg" : "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg"}`}
                                >
                                    {isViewAll ? "Show Less" : "View All"}
                                </Link>
                            </div>
                        </div>
                    </div>
                );
            })}



            {/* Project Milestones */}
            <div className="text-center my-16" ref={statsRef}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Project Milestones
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    We've successfully delivered projects across diverse industries,
                    ensuring innovation and excellence at every step.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {stats.current.map((stat, index) => (
                        <div 
                            key={stat.label} 
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
                        >
                            <div className="mb-3">{stat.icon}</div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                                {counts[index]}+
                            </h2>
                            <p className="text-gray-600 mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;