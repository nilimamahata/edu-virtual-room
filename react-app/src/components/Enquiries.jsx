import React from 'react';
import './Enquiries.css';

const enquiriesData = [
  {
    name: 'hriati',
    email: 'example@gmail.com',
    message: '',
    date: '18/12/25',
  },
  {
    name: 'hriati',
    email: 'example@gmail.com',
    message: '',
    date: '18/12/25',
  },
];

function Enquiries() {
  return (
    <div className="enquiries-container">
      <header className="enquiries-header">
        <h2>Enquiries</h2>
        <button className="search-button">Search</button>
      </header>
      <table className="enquiries-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {enquiriesData.map((enquiry, index) => (
            <tr key={index}>
              <td>{enquiry.name}</td>
              <td>{enquiry.email}</td>
              <td>
                <div className="message-box">{enquiry.message}</div>
              </td>
              <td>{enquiry.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Enquiries;
