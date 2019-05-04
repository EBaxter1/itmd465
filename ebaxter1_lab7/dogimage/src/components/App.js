//import react and output from dogimage js
import React from 'react';
import DogImage from "../components/DogImage"

// make new class
class App extends React.Component {
  // constructor for defining props
  constructor(props) {
    super(props);
    // set this.state with empty image string and alt text
    this.state = {
      image: "",
      dogName: "Husky"
    };
    // bind this for fetch call
    this.fetchDog = this.fetchDog.bind(this);
  }

  //first image on page upload
  componentDidMount(){
    console.log('--componentDidMount--');
    //call fetch function
    this.fetchDog();
  }

  //function that has fetch to call dog api
  fetchDog(){
    //fetch for random image
    fetch('https://dog.ceo/api/breed/husky/images/random').then((res) => {
      //get json for api response
      return res.json();
    }).then((json) => {
      this.setState({
        //set new state to the url of the image
        image: json.message
      });
    });
  }

  // function to output html and output the html from dogimage.js
  render() {
    return (
      <div>
      <h1>Husky Dog Image Generator</h1>
      <h2>Erin Baxter - ebaxter1@hawk.iit.edu - ITMD - 465</h2>
      <p>Please press the button to generate a new random image</p>
      <button type="button" onClick={this.fetchDog}>Fetch!</button>
      <hr/>
      <DogImage image={this.state.image} dogName={this.state.dogName} />
      </div>
    );
  }
}

//export so it can be accessed by other stuff
export default App;
