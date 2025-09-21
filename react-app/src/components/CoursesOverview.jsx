import React, { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import './CoursesOverview.css';

function CoursesOverview() {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Math 8th grade', created: '09/09/2025', lessons: 8, students: 53 },
    { id: 2, name: 'Science 10th grade', created: '09/09/2025', lessons: 6, students: 88 },
    { id: 3, name: 'English literature', created: '09/09/2025', lessons: 9, students: 76 },
  ]);

  return (
    <div className="courses-overview">
      <div className="sidebar">
        <div className="sidebar-logo">Admin Panel</div>
        <nav className="sidebar-nav">
          <ul>
            <li className="active">Home</li>
            <li className="active">Courses</li>
            <li>Teachers</li>
            <li>Students</li>
            <li>Status</li>
            <li>Announcement</li>
            <li>Reports</li>
            <li>Enquiries</li>
            <li>Transaction</li>
            <li>Accounts & Settings</li>
          </ul>
        </nav>
        <button className="logout-btn">
          <FaSignOutAlt className="sidebar-icon" /> Logout
        </button>
      </div>
      <div className="main-content">
        <h2>Courses Overview</h2>
        <div className="controls">
          <button className="add-course-btn">+ Add Courses</button>
          <button className="filter-btn">Newest</button>
          <button className="filter-btn">All</button>
          <input type="search" placeholder="Search" className="search-input" />
        </div>
        <table className="courses-table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>created</th>
              <th>Lessons</th>
              <th>no. of students</th>
            </tr>
          </thead>
          <tbody>
            {courses.map(course => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.created}</td>
                <td>{course.lessons}</td>
                <td>{course.students}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CoursesOverview;
