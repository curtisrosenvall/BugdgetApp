import React, { useState } from "react";
import "./Lobby.scss";
import { Modal } from "../Modal/Modal";

function Lobby() {
  const [show, setShow] = useState(false);
  const close = () => setShow(false);

  return (
    <div>
      <div className="lobby-container">
        <a target="zionsbank" href="https://www.zionsbank.com/" >
          <div className="open-bank-account" >
            <h1 >Open New Bank Account</h1>
            <i className="fas fa-university"></i>
          </div>
        </a>

        <div className="add-bank">
          <h1>Budget Funds</h1>
          <i className="fas fa-money-bill"></i>{" "}
          <button
            className="btn-openModal"
            onClick={() => {
              setShow(true);
            }}
          >
            Begin Budget
          </button>
        </div>
        <a
          target="zionsbank"
          href="https://apply.applecard.apple/301/?cid=apy-310-100000070000-100000000000025-301100000000066&utm_content=all&utm_vendorid=100000070000&utm_searchgroup=brandcore&utm_cmpid=7630174076&utm_adgid=80938614603&utm_adid=436203702638&utm_tgtid=kwd-12539470&gclid=CjwKCAiA-f78BRBbEiwATKRRBLxCgbGL920t8U6oy1CwuH-uwZZ2wjL-r1E1aF-ZrvmIp1R30BzqzhoCvL4QAvD_BwE"
        >
          <div className="add-credit-card">
            <h1>Apply For A Credit Card</h1>
            <i className="far fa-credit-card"></i>
          </div>
        </a>
      </div>
      {show ? <div className="back-drop" onClick={close}></div> : null}
      <Modal show={show} close={close} />
    </div>
  );
}

export default Lobby;
