import React from 'react';
import PropTypes from 'prop-types';
import Channel from './Channel';

const ChannelList = props => (
  <ul>
    {
      props.channels.map(channel => (
        <Channel
          {...props}
          channel={channel}
          key={channel.id}
        />
      ))
    }
  </ul>
);

ChannelList.propTypes = {
  activeChannel: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelList;
