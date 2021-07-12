import React from "react";
import "./Header.scss";
import { Input } from 'antd';

const Header = () => {
  return (
    <>
        <div className="header">
            <div className="logo">
                <h1 className="logo__name">WOOKIE MOVIES</h1>
            </div>

            <div className="search">
                <div className="search__icon">
                    <i className="fas fa-search"></i>
                </div>
                <div className="search__box">
                    <Input placeholder="Search" />
                </div>
            </div>
        </div>
    </>
  );
};

export default Header;
