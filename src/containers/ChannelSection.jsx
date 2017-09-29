import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ChannelForm from '../components/channels/ChannelForm';
import ChannelList from '../components/channels/ChannelList';

class ChannelSection extends PureComponent {
  render() {
    const { activeChannel, addChannel, channels, setChannel } = this.props;
    return (
      <div className="support panel panel-primary">
        <div className="panel-heading">
          <strong>Channels</strong>
        </div>
        <div className="panel-body channels">
          <ChannelList
            activeChannel={activeChannel}
            channels={channels}
            setChannel={setChannel}
          />
          <ChannelForm
            addChannel={addChannel}
          />
        </div>
      </div>
    );
  }
}

ChannelSection.propTypes = {
  activeChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  addChannel: PropTypes.func.isRequired,
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelSection;
