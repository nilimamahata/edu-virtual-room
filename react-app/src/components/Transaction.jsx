import React, { useState } from 'react';
import './Transaction.css';

const sampleData = [
  {
    id: 1,
    name: 'Hriatrengi',
    email: 'example@gmail.com',
    course: 'Class 8',
    amount: 1500,
    paidVia: 'UPI',
  },
];

function Transaction() {
  const [filter, setFilter] = useState('Newest');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = sampleData.filter(item => {
    if (searchTerm === '') return true;
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.paidVia.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="transaction-container">
      <div className="transaction-filters">
        <button
          className={filter === 'Newest' ? 'active' : ''}
          onClick={() => setFilter('Newest')}
        >
          Newest
        </button>
        <button
          className={filter === 'All' ? 'active' : ''}
          onClick={() => setFilter('All')}
        >
          All
        </button>
        <div className="transaction-search">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Amount</th>
            <th>Paid via</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.course}</td>
              <td>{item.amount}</td>
              <td>{item.paidVia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transaction;
