import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from './User';

class UserList extends PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.users.map(user => (
            <User
              key={user.id}
              user={user}
            />
          ))
        }
      </ul>
    );
  }
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default UserList;
