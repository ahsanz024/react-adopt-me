import React from "react";
import pet from "@frontendmasters/pet";

class Details extends React.Component {
  state = { loading: true };
  componentDidMount() {
    // We need the ID of the animal coming from the route `/details/:id`
    // Anything being passed by the parent is available in `this.props` (immutable)
    pet.animal(+this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: animal.contact.address.city,
        media: animal.photos,
        breed: animal.breeds.primary,
        description: animal.description,
        loading: false,
      });
    }, console.error);
  }

  // Render is a MUST method for every Class Component
  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, breed, media, location, name, description } = this.state;

    return (
      <div className="details">
        <div>
          <h1>{name}</h1>
          <h2>{`${animal}-${breed}-${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
