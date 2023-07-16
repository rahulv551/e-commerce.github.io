import React, { useState } from 'react';

const Login = () => {
  const [activeTab, setActiveTab] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here
    console.log(`Logged in as ${activeTab} with email: ${email} and password: ${password}`);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  const handleSignup = (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log(`Signed up as ${activeTab} with email: ${email} and password: ${password}`);
    // Reset form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <button onClick={() => handleTabChange('customer')}>Customer Login</button>
      <button onClick={() => handleTabChange('seller')}>Seller Login</button>

      {activeTab === 'customer' && (
        <>
          <h2>Customer Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="customerEmail">Email:</label>
              <input type="email" id="customerEmail" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
              <label htmlFor="customerPassword">Password:</label>
              <input type="password" id="customerPassword" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Proceed</button>
          </form>
          <p>New User? <a href="#signup">Create Account</a></p>
        </>
      )}

      {activeTab === 'seller' && (
        <>
          <h2>Seller Login</h2>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="sellerEmail">Email:</label>
              <input type="email" id="sellerEmail" value={email} onChange={handleEmailChange} required />
            </div>
            <div>
              <label htmlFor="sellerPassword">Password:</label>
              <input type="password" id="sellerPassword" value={password} onChange={handlePasswordChange} required />
            </div>
            <button type="submit">Proceed</button>
          </form>
          <p>New User? <a href="#signup">Create Account</a></p>
        </>
      )}

      <h2 id="signup">Signup</h2>
      <form onSubmit={handleSignup}>
        <div>
          <label htmlFor="signupFirstName">First Name:</label>
          <input type="text" id="signupFirstName" required />
        </div>
        <div>
          <label htmlFor="signupLastName">Last Name:</label>
          <input type="text" id="signupLastName" required />
        </div>
        <div>
          <label htmlFor="signupEmail">Email:</label>
          <input type="email" id="signupEmail" value={email} onChange={handleEmailChange} required />
        </div>
        <div>
          <label htmlFor="signupPassword">Password:</label>
          <input type="password" id="signupPassword" value={password} onChange={handlePasswordChange} required />
        </div>
        <div>
          <label htmlFor="signupConfirmPassword">Confirm Password:</label>
          <input type="password" id="signupConfirmPassword" required />
        </div>
        {activeTab === 'customer' && (
          <div>
            <label htmlFor="signupMobileNumber">Mobile Number:</label>
            <input type="tel" id="signupMobileNumber" required />
          </div>
        )}
        {activeTab === 'customer' && (
          <div>
            <label>Gender:</label>
            <div>
              <input type="radio" id="male" name="gender" value="male" />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="female" />
              <label htmlFor="female">Female</label>
            </div>
            <div>
              <input type="radio" id="other" name="gender" value="other" />
              <label htmlFor="other">Other</label>
            </div>
          </div>
        )}
        <button type="submit">Register</button>
        <p>Already a {activeTab}? <a href="#login">Login</a></p>
      </form>
    </div>
  );
};

export default Login;
