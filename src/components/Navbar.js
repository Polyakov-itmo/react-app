import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Главная
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/news">
          Новости
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">
          Профиль
        </Link>
      </li>
    </ul>
  );
}
