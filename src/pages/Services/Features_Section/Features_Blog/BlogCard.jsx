import React from "react";
import "./BlogCard.css";
import card11 from "../../../../assets/images/card11.svg";
import Card2 from "../../.././../assets/images/Card2.svg";
import Card3 from "../../.././../assets/images/Card3.svg";
import Card4 from "../../.././../assets/images/Card4.svg";

import { useState, useRef, useEffect } from "react";
const BlogCard = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const dummyBlogs = [
      {
        id: 1,
        image: card11,
        tag: "IMS",
        title:
          "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
      {
        id: 2,
        image: Card2,
        tag: "IMS",
        title:
          "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
      {
        id: 3,
        image: Card3,
        tag: "IMS",
        title:
          "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
      {
        id: 4,
        image: Card4,
        tag: "IMS",
        title:
          "Building Scalable Business Solutions Through Mobile App Development",
        date: "Feb 9, 2025",
        author: "Aditi Singh",
      },
    ];

    setBlogs(dummyBlogs);
  }, []);
  const scrollRef = useRef();

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 324, // card width + gap
      behavior: "smooth",
    });
  };

  return (
    <div className="Blog-main-div">
      <p className="blog-heading">Latest Blogs</p>
      <div className="slider-wrapper">
        <div className="blog-scroll" ref={scrollRef}>
          {blogs.map((blogs) => (
            <div className="blog-card" key={blogs.id}>
              <div className="blog-img">
                <img src={blogs.image} alt="" />
              </div>

              <div className="blog-content">
                <span className="blog-tag">{blogs.tag}</span>
                <p className="title-blog">{blogs.title}</p>
                <div className="date-content">
                  <p className="blog-meta">
                    {blogs.date} /{" "}
                    <span className="blog-author">{blogs.author}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
