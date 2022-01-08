import React from "react";
import axios from 'axios';

class Form extends React.Component {
    state = {userName:''};
    // userNameInput = React.createRef();
  
    handleChange = (event) => {
      this.setState({userName: event.target.value})
    };
  
    handleSubmit = async (event) => {
      event.preventDefault();
      const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
      this.props.onSubmit(resp.data);
      this.setState({userName:''})
    };
    
    render () {
      return (
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="GitHub username" 
            // ref={this.userNameInput}
            value={this.state.userName}
            onChange={this.handleChange}
            // onChange={event => this.setState({userName: event.target.value})}
            required 
          />
          <button>Add card</button>
        </form>
      );
    }
  }

export default Form;