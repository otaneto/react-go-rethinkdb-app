import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fecha from 'fecha';

class Message extends PureComponent {
  render() {
    const { message } = this.props;
    const createdAt = fecha.format(new Date(message.createdAt), 'HH:mm:ss MM/DD/YY');
    return (
      <li className="message">
        <div className="author">
          <strong>{message.author}</strong>
          <i className="timestamp">{createdAt}</i>
        </div>
        <div className="body">{message.body}</div>
      </li>
    );
  }
}

Message.propTypes = {
  message: PropTypes.object.isRequired,
};

export default Message;
