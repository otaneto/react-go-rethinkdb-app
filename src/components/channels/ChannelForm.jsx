import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const node = this.channel;
    const channelName = node.value;
    this.props.addChannel(channelName);
    node.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Add Channel"
            type="text"
            ref={(c) => { this.channel = c; }}
          />
        </div>
      </form>
    );
  }
}

ChannelForm.propTypes = {
  addChannel: PropTypes.func.isRequired,
};

export default ChannelForm;
