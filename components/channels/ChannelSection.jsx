import React from 'react';
import PropTypes from 'prop-types';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

const ChannelSection = props => (
  <div className="support panel panel-primary">
    <div className="panel-heading">
      <strong>Channels</strong>
    </div>
    <div className="panel-body channels">
      <ChannelList {...props} />
      <ChannelForm {...props} />
    </div>
  </div>
);

ChannelSection.propTypes = {
  activeChannel: PropTypes.object.isRequired,
  addChannel: PropTypes.func.isRequired,
  channels: PropTypes.array.isRequired,
  setChannel: PropTypes.func.isRequired,
};

export default ChannelSection;
