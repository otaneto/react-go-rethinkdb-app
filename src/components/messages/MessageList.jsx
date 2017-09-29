import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

class MessageList extends PureComponent {
  render() {
    return (
      <ul>
        {
          this.props.messages.map(message => (
            <Message
              key={message.id}
              message={message}
            />
          ))
        }
      </ul>
    );
  }
}
MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessageList;
