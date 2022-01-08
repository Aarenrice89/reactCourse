import React from "react";

class Card extends React.Component {
    render () {
      const profile = this.props;
      return (
        <div className="github-profile" style={{margin: '1rem'}}>
          <img src={profile.avatar_url} style={{width:75}}/>
          <div className="info" style={{display:'inline-block', marginLeft:12}}>
            <div className="name" style={{fontSize:'125%', fontWeight:'bold'}}>{profile.name}</div>
            <div className="company">{profile.company}</div>
          </div>
        </div>
        // <div className="github-profile">
        //   <img src="http://placehold.it/75" />
        //   <div className="info">
        //     <div className="name">Name here...</div>
        //     <div className="company">Company here...</div>
        //   </div>
        // </div>
      );
    }
  }

export default Card;