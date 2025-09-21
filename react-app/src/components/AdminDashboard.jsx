import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaBook, FaChalkboardTeacher, FaUsers, FaClipboardList, FaBullhorn, FaFileAlt, FaEnvelope, FaMoneyCheckAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './AdminDashboard.css';
import CoursesOverviewContent from './CoursesOverviewContent';
import TeachersOverviewContent from './TeachersOverviewContent';
import StudentsOverviewContent from './StudentsOverviewContent';
import Status from './Status';
import Announcement from './Announcement';
import Reports from './Reports';
import Enquiries from './Enquiries';
import Transaction from './Transaction';
import AccountsSettings from './AccountsSettings';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('Home');
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const menuItems = [
    { name: 'Home', icon: <FaHome /> },
    { name: 'Courses', icon: <FaBook /> },
    { name: 'Teachers', icon: <FaChalkboardTeacher /> },
    { name: 'Students', icon: <FaUsers /> },
    { name: 'Status', icon: <FaClipboardList /> },
    { name: 'Announcement', icon: <FaBullhorn /> },
    { name: 'Reports', icon: <FaFileAlt /> },
    { name: 'Enquiries', icon: <FaEnvelope /> },
    { name: 'Transaction', icon: <FaMoneyCheckAlt /> },
    { name: 'Accounts & Settings', icon: <FaCog /> },
  ];

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/login');
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return (
          <>
            <header className="header">
              <h1>Welcome Back, Admin!</h1>
              <input type="search" placeholder="Search" className="search-input" />
            </header>
            <section className="stats-cards">
              <div className="card purple">
                <h3>Total Students</h3>
                <p>59,000</p>
              </div>
              <div className="card orange">
                <h3>Total Teachers</h3>
                <p>56</p>
              </div>
              <div className="card blue">
                <h3>Total Page Visits</h3>
                <p>70,000</p>
              </div>
            </section>
            <section className="charts">
              <div className="chart gender-chart">
                <h4>Total Students by Gender</h4>
                <div className="donut-chart">
                  <svg viewBox="0 0 36 36" className="circular-chart">
                    <path className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#b19cd9"
                      strokeWidth="3.8" />
                    <path className="circle"
                      stroke="#a3d4f7"
                      strokeWidth="3.8"
                      strokeDasharray="38, 100"
                      strokeDashoffset="62"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none" />
                    <text x="18" y="20.35" className="percentage">59,000</text>
                  </svg>
                  <div className="legend">
                    <span className="legend-item purple">Girls: 50,000</span>
                    <span className="legend-item blue">Boys: 9,000</span>
                  </div>
                </div>
              </div>
              <div className="chart bar-chart">
                <h4>Courses Statistics</h4>
                <div className="courses-overview-embed">
                  <CoursesOverviewContent />
                </div>
              </div>
              <div className="chart income-chart">
                <h4>Income Overview</h4>
                <p className="income-amount">$7,650</p>
                <p className="income-subtitle">This Week Statistics</p>
                <svg width="100%" height="150" viewBox="0 0 400 150" className="income-bar">
                  <rect x="10" y="80" width="30" height="70" fill="#7dd3fc" />
                  <rect x="60" y="40" width="30" height="110" fill="#38bdf8" />
                  <rect x="110" y="70" width="30" height="80" fill="#0ea5e9" />
                  <rect x="160" y="90" width="30" height="60" fill="#0284c7" />
                  <rect x="210" y="70" width="30" height="80" fill="#0369a1" />
                  <rect x="260" y="80" width="30" height="70" fill="#075985" />
                  <rect x="310" y="50" width="30" height="100" fill="#0c4a6e" />
                </svg>
              </div>
            </section>
            <section className="charts-bottom">
              <div className="top-products">
                <div className="top-products-header">
                  <h4>Top Products</h4>
                  <a href="#" className="view-details">View Details</a>
                </div>
                <svg width="100%" height="150" viewBox="0 0 400 150" className="products-bar">
                  {/* Bars for 2019 */}
                  <rect x="40" y="90" width="20" height="60" fill="#2563eb" />
                  <rect x="90" y="40" width="20" height="110" fill="#2563eb" />
                  <rect x="140" y="90" width="20" height="60" fill="#2563eb" />
                  <rect x="190" y="40" width="20" height="110" fill="#2563eb" />
                  <rect x="240" y="90" width="20" height="60" fill="#2563eb" />
                  <rect x="290" y="110" width="20" height="40" fill="#2563eb" />
                  <rect x="340" y="40" width="20" height="110" fill="#2563eb" />
                  {/* Bars for 2018 */}
                  <rect x="40" y="110" width="20" height="40" fill="#93c5fd" />
                  <rect x="90" y="80" width="20" height="70" fill="#93c5fd" />
                  <rect x="140" y="110" width="20" height="40" fill="#93c5fd" />
                  <rect x="190" y="80" width="20" height="70" fill="#93c5fd" />
                  <rect x="240" y="110" width="20" height="40" fill="#93c5fd" />
                  <rect x="290" y="130" width="20" height="20" fill="#93c5fd" />
                  <rect x="340" y="80" width="20" height="70" fill="#93c5fd" />
                  {/* Labels */}
                  <text x="40" y="145" fontSize="10">Boots4</text>
                  <text x="90" y="145" fontSize="10">Reign Pro</text>
                  <text x="140" y="145" fontSize="10">Slick</text>
                  <text x="190" y="145" fontSize="10">Falcon</text>
                  <text x="240" y="145" fontSize="10">Sparrow</text>
                  <text x="290" y="145" fontSize="10">Hideway</text>
                  <text x="340" y="145" fontSize="10">Freya</text>
                </svg>
              </div>
              <div className="customer-satisfaction">
                <h4>Customer Satisfaction</h4>
                <p>It takes continuous effort to maintain high customer satisfaction levels internal and external.</p>
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#d6d6d6"
                    strokeWidth="3.8" />
                  <path className="circle"
                    stroke="#6366f1"
                    strokeWidth="3.8"
                    strokeDasharray="36, 100"
                    strokeDashoffset="64"
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none" />
                  <text x="18" y="20.35" className="percentage">36.5%</text>
                </svg>
                <ul className="legend">
                  <li><span className="legend-color" style={{backgroundColor: '#6366f1'}}></span>Extremely Satisfied</li>
                  <li><span className="legend-color" style={{backgroundColor: '#818cf8'}}></span>Satisfied</li>
                  <li><span className="legend-color" style={{backgroundColor: '#a5b4fc'}}></span>Poor</li>
                  <li><span className="legend-color" style={{backgroundColor: '#c7d2fe'}}></span>Very Poor</li>
                </ul>
              </div>
            </section>
          </>
        );
      case 'Courses':
        return <CoursesOverviewContent />;
      case 'Teachers':
        return <TeachersOverviewContent />;
      case 'Students':
        return <StudentsOverviewContent />;
      case 'Status':
        return <Status />;
      case 'Announcement':
        return <Announcement />;
      case 'Reports':
        return <Reports />;
      case 'Enquiries':
        return <Enquiries />;
      case 'Transaction':
        return <Transaction />;
      case 'Accounts & Settings':
        return <AccountsSettings />;
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <div className="sidebar-logo" />
        <nav className="sidebar-nav">
          <ul>
            {menuItems.map(item => (
              <li
                key={item.name}
                className={activeTab === item.name ? 'active' : ''}
                onClick={() => setActiveTab(item.name)}
              >
                <span className="icon">{item.icon}</span>
                {item.name}
              </li>
            ))}
          </ul>
        </nav>
        <button className="logout-btn" onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </aside>
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default AdminDashboard;
