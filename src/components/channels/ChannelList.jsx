import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';

class ChannelList extends PureComponent {
  render() {
    const { activeChannel, channels, setChannel } = this.props;
    return (
      <ul>
        { console.log(channels) }
        {
          channels.map(channel => (
            <Channel
              activeChannel={activeChannel}
              channels={channels}
              setChannel={setChannel}
              channel={channel}
              key={channel.id}
            />
          ))
        }
      </ul>
    );
  }
}

ChannelList.propTypes = {
  activeChannel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  channels: PropTypes.arrayOf(PropTypes.object).isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelList;
