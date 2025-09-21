import React from 'react';
import './Reports.css';

function Reports() {
  return (
    <div className="reports-container">
      <h2>Reports</h2>
      <div className="date-range">
        <label>Date Range: </label>
        <select>
          <option>Last 30 days</option>
          <option>Last 60 days</option>
          <option>Last 90 days</option>
        </select>
      </div>
      <div className="summary-cards">
        <div className="card light-blue">
          <h3>1234567890</h3>
          <p>Total Courses</p>
        </div>
        <div className="card light-blue">
          <h3>1234567890</h3>
          <p>Total Students</p>
        </div>
        <div className="card light-blue">
          <h3>1234567890</h3>
          <p>Total Teachers</p>
        </div>
        <div className="card light-blue">
          <h3>1234567890</h3>
          <p>Total Enrolled</p>
        </div>
      </div>
      <h3>Detailed Reports</h3>
      <div className="detailed-reports">
        <div className="bar-chart">
          {/* Placeholder for bar chart */}
          <p>Courses Offered vs Courses Enrolled (Bar Chart)</p>
        </div>
      </div>
      <div className="enrollment-performance">
        <div className="course-enrollment">
          <h4>Course Enrollment</h4>
          {/* Placeholder for line chart */}
          <p>Line Chart showing course enrollment over months</p>
        </div>
        <div className="student-performance">
          <h4>Student Performance</h4>
          <table>
            <thead>
              <tr>
                <th>Student</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Emily Johnson</td>
                <td>Mathematics</td>
                <td>92%</td>
                <td>
                  <progress value="92" max="100"></progress>
                </td>
              </tr>
              <tr>
                <td>Noah Williams</td>
                <td>Physics</td>
                <td>85%</td>
                <td>
                  <progress value="85" max="100"></progress>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3>Page Visits</h3>
      <div className="page-visits">
        <div className="visits-bar-chart">
          <p>Total Visits per Page (Bar Chart)</p>
        </div>
        <div className="visits-trend-chart">
          <p>Page Visits Trend (Line Chart)</p>
        </div>
        <div className="traffic-distribution">
          <p>Traffic Distribution (Pie Chart)</p>
        </div>
        <div className="active-hours">
          <p>Active Hours (Heatmap)</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;
