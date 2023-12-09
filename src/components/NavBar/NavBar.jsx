import React from 'react'
import './NavBar.css'
import { VscSettings } from "react-icons/vsc";

const NavBar = () => {
  return (
    <div className="top-header" style={{paddingLeft : "10px"}}>
        <div className="displayButton">
            <button className="p-10 f-16 btn">
            <VscSettings /> Display
            </button>
            <div className="dropdown flex-gap-10 p-10">
                <div className="selectGroup flex-sb">
                <span>Grouping</span>
                <select className="selectStyle" name="group" id="group">
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
                </div>
                <div className="selectGroup flex-sb">
                <span>Ordering</span>
                <select className="selectStyle" name="order" id="order">
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
        </div>
    </div>
  );
};

export default NavBar