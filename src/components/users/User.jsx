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
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};

export default User;
