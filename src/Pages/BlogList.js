import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../Components/BlogImages/img1.jpg';
import img2 from '../Components/BlogImages/img2.jpg';
import img3 from '../Components/BlogImages/img3.jpg';
import img4 from '../Components/BlogImages/img4.jpg';
import img5 from '../Components/BlogImages/img5.jpg';
import '../Pages/Projects/Blog.css';
 
const BlogList = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Techland IT solutions ensures consistent user Experience across All mobile platforms",
      imageUrl: img1,
      shortDescription: "In a technologically-driven environment like one of us, the effect left on the user's experience cannot be ignored...",
    },
    {
      id: 2,
      title: "static vs Dynamic websites: which one works best for you?",
      imageUrl: img2,
      shortDescription: "Every company in Hyderabad that is ranging from small businesses or web development firms...",
    },
    {
      id: 3,
      title: "A Beginner's Guide to Choosing the Right Server for Your Business",
      imageUrl: img3,
      shortDescription: "If you're a business owner in Hyderabad and searching for top web development services...",
    },
    {
      id: 4,
      title: "Why Good UX Is Critical for Your Website or App's Success",
      imageUrl: img4,
      shortDescription: "Experience for users (UX) is a key part in the success of any site or application...",
    },
    {
      id: 5,
      title: "Building a Complete Digital Presence: Web + App + Market",
      imageUrl: img5,
      shortDescription: "In the fast-changing digital environment, creating an effective and cohesive digital presence...",
    }
  ];
 
  return (
    <div className="blog-container">
      <h1 className="blog-main-title"> TECHLAND BLOGS</h1>
      <div className="blog-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-card">
            <div className="blog-content">
              <div className="blog-image-container">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="blog-image"
                />
              </div>
              <div className="blog-text">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-author">{post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="short-description">{post.shortDescription}</p>
                <Link to={`/blogs/${post.id}`} className="read-more-btn">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default BlogList;