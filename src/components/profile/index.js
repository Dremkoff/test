import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { updateProfile } from '../../actions';

// Selector
import { profileSelector } from '../../selectors';

// Style
import './index.css';

class Profile extends Component {
  state = {
    edit: false,
    newData: {},
  }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit })
    if (this.state.edit) {
      this.props.updateProfile(this.state.newData);
    } else {
      this.setState({ newData: { ...this.props.profile } })
    }
  }

  getStaticList = profile => (
    Object.keys(profile).map(i => (
      <p key={i}>{i}: {profile[i]}</p>
    ))
  )

  getEditableList = profile => (
    Object.keys(profile).map(i => (
      <p key={i}>
        <label htmlFor={i}>{i}: </label>
        <input type="text" value={this.state.newData[i]} name={i} onChange={this.updateEditable} />
      </p>
    ))
  )

  updateEditable = ({ target: { value, name } }) => this.setState({ newData: { ...this.state.newData, [name]: value } })

  render() {
    const { profile } = this.props;
    return (
      <div className="profile">
        {this.state.edit ? this.getEditableList(profile) : this.getStaticList(profile)}
        <button
          onClick={this.toggleEdit}
        >
          {this.state.edit ? 'Save' : 'Edit'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  profile: profileSelector(state),
});

const mapDispatchToProps = {
  updateProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
