import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import MessageList from '../components/messages/MessageList';
import MessageForm from '../components/messages/MessageForm';

class MessageSection extends PureComponent {
  render() {
    const { activeChannel } = this.props;
    return (
      <div className="messages-container panel panel-default">
        <div className="panel-heading">
          <strong>{activeChannel.name || 'Select A Channel'}</strong>
        </div>
        <div className="panel-body messages">
          <MessageList {...this.props} />
          <MessageForm {...this.props} />
        </div>
      </div>
    );
  }
}

MessageSection.propTypes = {
  activeChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  addMessage: PropTypes.func.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MessageSection;
