import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0,
  };

  // This method doesn’t have access to the component instance (static)
  // re-compute some data only when a prop changes
  static getDerivedStateFromProps({ media }) {
    // Transforming passed down `props` (`media`), which we're transforming at
    // the start (before render), to only take the large images from the
    // media object.
    let photos = ["http://placecorgi.com/600/600"];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }
    return { photos };
  }

  handleClickEvent = (event) => {
    // Context (of this), will be correct if called as a ClickListener.
    // We have to make this function as an Arrow function, so it doesn't create a new context
    this.setState({
      // `+` (PLUS) coerces the "index" to be an INT
      // `dataset` is coming from the img tag below with value `data-index`
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line
            <img
              src={photo}
              onClick={this.handleClickEvent}
              alt="animal thumbnail"
              key={photo}
              data-index={index}
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
