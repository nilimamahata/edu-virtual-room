import React from 'react';
import './StudentsOverviewContent.css';

function StudentsOverviewContent() {
  return (
    <div className="students-overview">
      <h2>Students Overview</h2>
      <div className="controls">
        <button className="btn add-student">+ Add Student</button>
        <button className="btn btn-grey">Newest</button>
        <button className="btn btn-grey">All</button>
        <button className="btn btn-outline">Search</button>
      </div>
      <table className="students-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Hriatrengi</td>
            <td>example@gmail.com</td>
            <td>Class 8</td>
            <td><button className="btn btn-edit">Edit</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentsOverviewContent;
