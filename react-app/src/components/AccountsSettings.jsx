import React from 'react';
import './AccountsSettings.css';

function AccountsSettings() {
  return (
    <div className="accounts-settings-container">
      <h2>Accounts &amp; Settings</h2>
      <div className="settings-box">
        <p>Admin!</p>
        <label htmlFor="username">Change Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Change Password</label>
        <input type="password" id="password" name="password" />
      </div>
    </div>
  );
}

export default AccountsSettings;
