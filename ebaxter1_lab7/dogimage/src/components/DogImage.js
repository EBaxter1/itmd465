// import react
import React from 'react';

//start class from react
class DogImage extends React.Component {
  //output image html passed on props passed
  render() {
    return (
      <img src={this.props.image} alt={this.props.dogName} />
    );
  }
}

//export so it can be accessed by other stuff
export default DogImage;
