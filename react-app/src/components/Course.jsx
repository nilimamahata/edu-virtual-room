import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Course.css';

function Course() {
  const location = useLocation();

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo"></div>
        <nav className="sidebar-nav">
          <ul>
            <li className={location.pathname === '/admin-dashboard' ? 'active' : ''}>
              <Link to="/admin-dashboard">Home</Link>
            </li>
            <li className={location.pathname === '/admin-dashboard/courses' ? 'active' : ''}>
              <Link to="/admin-dashboard/courses">Courses</Link>
            </li>
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
        <button className="logout-btn">Logout</button>
      </aside>
      <main className="main-content">
        <header className="header-course">
          <h1>Courses Overview</h1>
          <div className="header-controls">
            <button className="add-course-btn">+ Add Courses</button>
            <button className="filter-btn">Newest</button>
            <button className="filter-btn">All</button>
            <input type="search" placeholder="Search" className="search-input" />
          </div>
        </header>
        <section className="course-table-section">
          <table className="course-table">
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
              <tr>
                <td>1</td>
                <td>Math 8th grade</td>
                <td>09/09/2025</td>
                <td>8</td>
                <td>53</td>
              </tr>
              <tr>
                <td>2</td>
                <td>science 10th grade</td>
                <td>09/09/2025</td>
                <td>6</td>
                <td>88</td>
              </tr>
              <tr>
                <td>3</td>
                <td>English literature</td>
                <td>09/09/2025</td>
                <td>9</td>
                <td>76</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

export default Course;
