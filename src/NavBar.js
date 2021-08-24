import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: '/Home',
      text: 'Home',
    },

    {
      id: 2,
      path: '/',
      text: 'Calculator',
    },

    {
      id: 3,
      path: '/Quote',
      text: 'Quote',
    },
  ];
  return (
    <>
      <nav
        style={{
          display: 'flex',
          marginBottom: '2rem',
          justifyContent: 'space-between',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: '600',
            lineHeight: '1em',
            color: '#000',
            textAlign: 'left',
          }}
        >
          Math Magicians
        </h1>
        <ul className="nav-links">
          {links.map((link) => (
            <li
              key={link.id}
              style={{
                padding: '0  0.5rem',
              }}
            >
              <NavLink to={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
