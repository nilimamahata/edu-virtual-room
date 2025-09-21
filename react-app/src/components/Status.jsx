import React from 'react';
import './Status.css';

const ongoingClasses = [
  { no: 1, course: 'Class 8', subject: 'English', live: true },
  { no: 2, course: 'Class 9', subject: 'Maths', live: true },
];

function Status() {
  return (
    <div className="status-page">
      <header className="status-header">
        <h2>Status</h2>
        <button className="search-button">Search</button>
      </header>
      <section className="ongoing-classes">
        <h3>Ongoing Classes</h3>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Course</th>
              <th>Subject</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ongoingClasses.map(({ no, course, subject, live }) => (
              <tr key={no}>
                <td>{no}</td>
                <td>{course}</td>
                <td>{subject}</td>
                <td>{live && <span className="live-badge">• LIVE</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Status;
