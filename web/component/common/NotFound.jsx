import React from 'react';

const NotFound = () => (
  <div className="login-wrap">
    <div className="login-box not-found">
      <h1 className="logo">Logo</h1>
      <div className="content text-center">
        <h2>404 ERROR</h2>
        <p>
          <span>Ohh.....</span> You Requested the page that is no longer there.
        </p>
        <div className="clearfix"><button type="button" className="btn btn-primary">Go Back</button></div>
      </div>
    </div>
  </div>
);

export default NotFound;
