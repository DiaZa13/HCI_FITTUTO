import React from 'react';
import { createBrowserHistory as history } from 'history';
import { useRouteMatch, Link } from 'react-router-dom';
import user from '../../assets/teachers.png';

function Configure() {
  let { url } = useRouteMatch();

  return (
    <div className="d-flex align-items-center">
      {/* Help */}
      <Link to={`${url}/help`} className="services" style={{ height: '40px' }}>
        <span className="material-icons icon-size">
          help
        </span>
      </Link>
      {/* User image profile */}
      <div className="services mt-1">
        <img src={user} alt="User profile" width="45px" height="45px" className="rounded-circle" />
      </div>
    </div>

  );
}

export default Configure;
