import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./Modal.scss";




export const Modal = ({ show, close }) => {
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(-35vh)" : "translateY(-100vh)",
        opacity: show ? "1" : "0",
      }}
    >
      <div className="modal-header">
        <p>Budget Funds</p>
        <span className="close-modal-btn" onClick={close}>
          x
        </span>
      </div>
      <div className="modal-content">
          <h1>Budget Info</h1>
        <div className="modal-body">
            
            <div className='wrapper'>
                <div className="input-data">
                    <input type="text" required/>
                    <label>Bank Name</label>
                </div>
            </div>
            <div className='wrapper'>
                <div className="input-data">
                    <input type="text" required/>
                    <label>Type of Account</label>
                </div>
            </div>
        </div>
        <div className="modal-footer">
          <Link to="/bank" style={{textDecoration: 'none'}}><button className="btn-cancel" onClick={close}>
            Budget My Money
          </button></Link> 
        </div>
      </div>
    </div>
  );
};
