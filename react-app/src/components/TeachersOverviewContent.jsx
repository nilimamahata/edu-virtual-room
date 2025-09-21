import React, { useState } from 'react';
import './CoursesOverview.css'; // Reuse the same CSS for layout and styling

function TeachersOverviewContent() {
  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Hriatrengi', email: 'example@gmail.com', course: 'Class 8', subject: 'English' },
  ]);

  return (
    <div className="main-content">
      <h2>Teachers Overview</h2>
      <div className="controls">
        <button className="add-course-btn">+ Add Teachers</button>
        <button className="filter-btn">Newest</button>
        <button className="filter-btn">All</button>
        <input type="search" placeholder="Search" className="search-input" />
      </div>
      <table className="courses-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Subject</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.name}</td>
              <td>{teacher.email}</td>
              <td>{teacher.course}</td>
              <td>{teacher.subject}</td>
              <td><button>Edit</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeachersOverviewContent;
