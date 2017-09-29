import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MessageForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const node = this.message;
    const message = node.value;
    this.props.addMessage(message);
    node.value = '';
  }
  render() {
    let input;
    if (this.props.activeChannel.id !== undefined) {
      input = (
        <input
          ref={(c) => { this.message = c; }}
          type="text"
          className="form-control"
          placeholder="Add Message..."
        />
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          {input}
        </div>
      </form>
    );
  }
}

MessageForm.propTypes = {
  activeChannel: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  addMessage: PropTypes.func.isRequired,
};

export default MessageForm;
