import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

// Selectors
import { langSelector } from '../../selectors';

// Style
import './index.css';

const Header = props => (
  <header>
    <span>Welcome guest, please login </span>
    <Link to={`/${props.lang}/login`}>Sign In</Link>
    <hr />
  </header>
);

const mapStateToProps = state => ({
  lang: langSelector(state),
});

export default connect(mapStateToProps)(Header);
