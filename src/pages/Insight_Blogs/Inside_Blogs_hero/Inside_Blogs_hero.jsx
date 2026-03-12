import React, { useState } from "react";
import "./Inside_Blogs_hero.css";

import BLOG1 from "../../../assets/images/BLOG1.jpg";
import BLOG2 from "../../../assets/images/BLOG2.jpg";
import BLOG33 from "../../../assets/images/BLOG33.jpg";
import BLOG4 from "../../../assets/images/BLOG4.jpg";
import BLOG5 from "../../../assets/images/BLOG5.jpg";
import BLOG7 from "../../../assets/images/BLOG7.jpg";
import BLOG88 from "../../../assets/images/BLOG88.jpg";
import BLOG9 from "../../../assets/images/BLOG9.jpg";
import BLOG10 from "../../../assets/images/BLOG10.jpg";
import BLOG11 from "../../../assets/images/BLOG11.jpg";
import BLOG12 from "../../../assets/images/BLOG12.jpg";
import BLOG13 from "../../../assets/images/BLOG13.jpg";
import BLOG14 from "../../../assets/images/BLOG14.jpg";

const Inside_Blogs_hero = () => {

  const blogs = [
    { id: 1, image: BLOG1, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 2, image: BLOG2, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 3, image: BLOG33, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 4, image: BLOG4, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 5, image: BLOG5, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 6, image: BLOG5, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 7, image: BLOG7, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 8, image: BLOG88, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 9, image: BLOG9, tag: "HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 10, image: BLOG10, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 11, image: BLOG11, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 12, image: BLOG12, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 13, image: BLOG13, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 14, image: BLOG14, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 15, image: BLOG14, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"},
    { id: 16, image: BLOG9, tag:"HRMS", title: "Building Scalable Business Solutions Through Mobile App Development", date: "Feb 9, 2025", author: "Aditi Singh"}
  ];

  const blogsPerPage = 8;

  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  return (

    <div className="all-blog-sections">

      

      <div className="Blog-main-div">

        <div className="blog-scroll">

          {currentBlogs.map((blog)=>(
            
            <div className="blog-card" key={blog.id}>

              <div className="blog-img">
                <img src={blog.image} alt="blog"/>
              </div>

              <div className="blog-content">

                <span className="blog-tag">{blog.tag}</span>

                <p className="title-blog">{blog.title}</p>

                <div className="date-content">
                  <p className="blog-meta">
                    {blog.date} / <span className="blog-author">{blog.author}</span>
                  </p>
                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Pagination */}

      <div className="pagination">

        <button onClick={()=>setCurrentPage(prev=>Math.max(prev-1,1))}>
        ◀
        </button>

        {[...Array(totalPages)].map((_,index)=>(
          
          <button
          key={index}
          className={currentPage===index+1?"active":""}
          onClick={()=>setCurrentPage(index+1)}
          >
          {index+1}
          </button>

        ))}

        <button onClick={()=>setCurrentPage(prev=>Math.min(prev+1,totalPages))}>
        ▶
        </button>

      </div>

    </div>

  );

};

export default Inside_Blogs_hero;