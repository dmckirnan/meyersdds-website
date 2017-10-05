import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './../styles/Slideshow.scss';

const SlideShowContainer = props =>
  (
    <div id="slide-container">
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <img className="slideshow-image" src={props.slide.url} alt="test" />
      </ReactCSSTransitionGroup>
    </div>
  );

SlideShowContainer.propTypes = {
  slide: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SlideShowContainer;
