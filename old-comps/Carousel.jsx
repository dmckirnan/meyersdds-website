// import React, { Component } from 'react';

// import SlideOne from './carousel/SlideOne.jsx';
// import SlideTwo from './carousel/SlideTwo.jsx';
// import SlideThree from './carousel/SlideThree.jsx';
// import LeftArrow from './carousel/LeftArrow.jsx';
// import RightArrow from './carousel/RightArrow.jsx';
// import '../styles/Slider.scss';

// class Carousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slideCount: 1,
//     };
//     this.nextSlide = this.nextSlide.bind(this);
//     this.previousSlide = this.previousSlide.bind(this);
//   }

//   nextSlide() {
//     const obj = Object.assign({}, this.state);
//     let slideCount = obj.slideCount;
//     slideCount += 1;
//     this.setState({ slideCount });
//   }

//   previousSlide() {
//     const obj = Object.assign({}, this.state);
//     let slideCount = obj.slideCount;
//     slideCount -= 1;
//     this.setState({ slideCount });
//   }

//   render() {
//     return (
//       <div className="slider">
//         { this.state.slideCount === 1 ? <SlideOne /> : null }
//         { this.state.slideCount === 2 ? <SlideTwo /> : null }
//         { this.state.slideCount === 3 ? <SlideThree /> : null }

//         <RightArrow nextSlide={this.nextSlide} />
//         <LeftArrow previousSlide={this.previousSlide} />
//       </div>
//     );
//   }
// }

// export default Carousel;
