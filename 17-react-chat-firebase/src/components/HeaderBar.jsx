import React from 'react';

import { Link } from 'react-router';

export function HeaderBar(props) {
  const { currentUser } = props;

  return (
    <header className="text-light bg-primary px-1 d-flex justify-content-between">
      <h1>React Chat - Live!</h1>

      <nav>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chat">Chat</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/signin">
              <img src={currentUser.userImg} alt={currentUser.userName + " avatar"} />
            </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}