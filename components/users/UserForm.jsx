import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const node = this.refs.userName;
    const userName = node.value;
    this.props.setUserName(userName);
    node.value = '';
  }
  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input 
            ref='userName'
            type='text' 
            className='form-control' 
            placeholder='Set Your Name...' />
        </div>
      </form>
    )
  }
}

UserForm.propTypes = {
  setUserName: PropTypes.func.isRequired,
};

export default UserForm;
