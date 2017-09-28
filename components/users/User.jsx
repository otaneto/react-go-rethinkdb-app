import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class User extends PureComponent {
  render() {
    return (
      <li>
        {this.props.user.name}
      </li>
    );
  }
}

User.propTypes = {
  user: PropTypes.objectOf.isRequired,
};

export default User;
