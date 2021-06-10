import React from "react";

import Button from "../Button";

function LoginModal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Log in modal
            </h5>
            <Button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </Button>
          </div>
          <div className="modal-body">Login form</div>
          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </Button>
            <Button type="button" className="btn btn-primary">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
