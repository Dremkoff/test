import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

// Selectors
import { isAuthorisedSelector, langSelector } from '../../selectors';

class ProtectedRoute extends Component {
  render() {
    const { isAuthorised, component, ...rest } = this.props
    return <Route {...rest} render={this.getComponent} />
  }

  getComponent = () => {
    const { isAuthorised, ...rest } = this.props
    return isAuthorised ? <Route {...rest} /> : <Redirect to={`/${this.props.lang}/login`} />
  }
}

const mapStateToProps = state => ({
  lang: langSelector(state),
  isAuthorised: isAuthorisedSelector(state)
});

export default connect(mapStateToProps)(ProtectedRoute)
