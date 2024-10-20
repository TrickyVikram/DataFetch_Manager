import React from 'react';

const Login = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="formBasicEmail">Email address</label>
                    <input type="email" className="form-control" id="formBasicEmail" placeholder="Enter email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="formBasicPassword">Password</label>
                    <input type="password" className="form-control" id="formBasicPassword" placeholder="Password" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
