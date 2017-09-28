import React, { Component } from 'react';
import ChannelSection from './channels/ChannelSection';
import UserSection from './users/UserSection';
import MessageSection from './messages/MessageSection';

class App extends Component {
  state = {
    activeChannel: {},
    channels: [],
    connected: false,
    messages: [],
    users: [],
  };
  addChannel = (name) => {
    let { channels } = this.state;
    channels.push({ id: channels.length, name });
    this.setState({ channels });
  }
  setChannel = (activeChannel) => {
    this.setState({ activeChannel });
  }
  setUserName = (name) => {
    let { users } = this.state;
    users.push({ id: users.length, name });    
    this.setState({ users });
  }
  addMessage = (body) => {
    let { messages, users } = this.state;
    const createdAt = new Date;
    const author = users.length > 0 ? users[0].name : 'anonymous';
    messages.push({ id: messages.length, body, createdAt, author });
    this.setState({ messages });
  }
  render() {
    const { activeChannel, channels, messages, users  } = this.state;
    return (
      <div className="app">
        <div className="nav">
          <ChannelSection
            activeChannel={activeChannel}
            channels={channels}
            addChannel={this.addChannel}
            setChannel={this.setChannel}
          />
          <UserSection
            setUserName={this.setUserName}
            users={users}
          />
        </div>
        <MessageSection
          activeChannel={activeChannel}
          messages={messages}
          addMessage={this.addMessage}
        />
      </div>
    );
  }
}

export default App;