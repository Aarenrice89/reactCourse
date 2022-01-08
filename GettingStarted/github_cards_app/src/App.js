import React from 'react';
import Form from './Form';
import CardList from './CardList';
import './App.css';

//update the classes into functions and use useState as hooks for the state for react
class App extends React.Component {
  
  // Old constructor method for initializing state
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData,
  //   };
  // }
  
  // This is the new constructor method...
  state = {
    profiles: []
  };

  addNewProfile = (profileData) => {
    // This concatenates the new profile data with the existing data
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  };

  render () {
    return (
      <div>
        <div className="header" style={{textAlign:'center', fontSize:'150%', marginBottom:1}}>{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    );
  }
}

export default App;
