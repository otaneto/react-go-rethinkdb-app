import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UserForm from '../components/users/UserForm';
import UserList from '../components/users/UserList';

class UserSection extends PureComponent {
  render() {
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Users</strong>
        </div>
        <div className="panel-body users">
          <UserList {...this.props} />
          <UserForm {...this.props} />
        </div>
      </div>
    );
  }
}

UserSection.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setUserName: PropTypes.func.isRequired,
};

export default UserSection;
