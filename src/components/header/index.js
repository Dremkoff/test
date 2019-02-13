import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

// Actions
import { logOutAction } from '../../actions';

// Selectors
import { langSelector, userNameSelector } from '../../selectors';

// Style
import './index.css';

const Header = props => {
  return (
    <header>
      {props.userName ? (
        <>
          <span>Welcome {props.userName}. </span>
          <button onClick={() => props.logOutAction()}>Log Out</button>
        </>
      ) : (
          <>
            <span>Welcome guest, please </span>
            <Link to={`/${props.lang}/login`}>Sign In</Link>
          </>
        )
      }

      <hr />
    </header>
  )
}

const mapStateToProps = state => ({
  lang: langSelector(state),
  userName: userNameSelector(state),
});

const mapDispatchToProps = {
  logOutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
