// import React, { Component } from 'react';
import React from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import ImageCard from "./components/ImageCard";
import NavBar from "./components/NavBar";
import ScoringInfo from "./components/ScoringInfo";
import images from "./images.JSON";

let currentScore;
let topScore;

class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images
  };

  updateGame = id => {
    //
    // if the image was already selected, update display status "You guessed incorrecty", reset scores to zero; 
    //      leave top score alone, reset all imagesSelected to false
    //      ShuffleImages

    // if image not already selected, update display status to "You guessed correctly,"
    //      update imageSelected to true; , 
    //       increment current score,
    //      If current score > top score, update top score = currecnt score
    //      ShuffleImages

    if (this.state.images.imageSelected === true) {



    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;


