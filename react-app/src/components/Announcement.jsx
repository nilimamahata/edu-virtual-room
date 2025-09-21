import React, { useState } from 'react';
import './Announcement.css';

function Announcement() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Sample announcements data
  const announcements = [
    { id: 1, text: '', date: '18/12/25', createdBy: 'Hriatrengi' },
    { id: 2, text: '', date: '18/05/25', createdBy: 'Hriatrengi' },
    { id: 3, text: '', date: '07/12/25', createdBy: 'Hriatrengi' },
  ];

  const handleAnnounce = () => {
    // Placeholder for announce action
    alert('Announcement sent: ' + title);
    setTitle('');
    setBody('');
  };

  const filteredAnnouncements = announcements.filter(a =>
    a.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="announcement-container">
      <div className="announcement-main">
        <header className="announcement-header">
          <h2>Announcement</h2>
          <button className="search-button" onClick={() => {}}>Search</button>
          <input
            type="text"
            placeholder="Search announcements"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </header>
        <table className="announcement-table">
          <thead>
            <tr>
              <th>Announcement</th>
              <th>Date</th>
              <th>Created by</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnnouncements.map(a => (
              <tr key={a.id}>
                <td className="announcement-text">{a.text}</td>
                <td>{a.date}</td>
                <td>{a.createdBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside className="announcement-sidebar">
        <h3>Announcement and press</h3>
        <p>Fill the subject and body of the announcement and press send</p>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="announcement-title-input"
        />
        <textarea
          placeholder="Enter announcement body"
          value={body}
          onChange={e => setBody(e.target.value)}
          className="announcement-body-textarea"
        />
        <button className="announce-button" onClick={handleAnnounce}>Announce</button>
      </aside>
    </div>
  );
}

export default Announcement;
