// import React, { Component } from 'react';
// import slideshowImages from './../../assets/images/slideshow';
// import SlideShowContainer from './SlideShowContainer.jsx';

// import './../styles/Slideshow.scss';

// class SlideShow extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       slides: slideshowImages,
//     };
//     this.state.max = this.state.slides.length;
//     this.state.activeSlide = this.state.slides[0];
//     this.state.active = 0;
//     this.tick = this.tick.bind(this);
//   }

//   componentDidMount() {
//     this.timer = setInterval(this.tick, 3000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   tick() {
//     if (this.state.active === this.state.max - 1) {
//       this.state.active = 0;
//     } else {
//       this.state.active += 1;
//     }
//     this.state.activeSlide = this.state.slides[this.state.active];
//     this.setState(this.state);
//   }

//   render() {
//     return (
//       <div>
//         <SlideShowContainer
//           className="slideshowContainer"
//           slide={this.state.activeSlide}
//         />
//       </div>
//     );
//   }
// }

// export default SlideShow;
