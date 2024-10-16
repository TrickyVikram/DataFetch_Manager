import React from 'react';

const Login = ({ show, handleClose }) => {
  return (
    <>
<<<<<<< HEAD
      {/* Bootstrap Navbar */}
      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      //   <a className="navbar-brand" href="#">MyApp</a>
      //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //     <span className="navbar-toggler-icon"></span>
      //   </button>
      //   <div className="collapse navbar-collapse" id="navbarNav">
      //     <ul className="navbar-nav ml-auto">
      //       <li className="nav-item">
      //         <button className="btn btn-primary" onClick={handleShow}>Login</button>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      {/* Login Modal */}
=======
>>>>>>> 6dc7f8d (update)
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
