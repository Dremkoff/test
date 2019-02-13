import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { signInAction } from '../../actions';

// Selectors
import { isFetchingSelector, errorSelector } from '../../selectors';

// Style
import './index.css';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  updateField = ({ target: { name, value } }) => (
    this.setState({ [name]: value })
  );

  signInHandler = e => {
    e.preventDefault();
    this.props.signInAction(this.state);
  };

  render() {
    const { errors } = this.props;
    return (
      <form onSubmit={this.signInHandler}>
        <div className="form-group">
          <label htmlFor="email">Username: </label>
          <input
            className={errors && errors.email ? 'error' : ''}
            onChange={this.updateField}
            value={this.state.email}
            type="email"
            name="email"
            id="email"
            required
            title="Must contain at least from 5 to 50 characters"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            minLength="5"
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password: </label>
          <input
            className={errors && errors.password ? 'error' : ''}
            onChange={this.updateField}
            value={this.state.password}
            type="password"
            name="password"
            id="password"
            required
            title="Must contain at least one number and one uppercase and lowercase letter, 8 to 20 characters"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}"
          />
        </div>
        <input type="submit" value="Sign In" disabled={this.props.isFetching} />
      </form>
    );
  }
}

const mapStateToProps = state => ({
  isFetching: isFetchingSelector(state),
  errors: errorSelector(state),
});

const mapDispatchToProps = {
  signInAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
