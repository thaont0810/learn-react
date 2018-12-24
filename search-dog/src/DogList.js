import React, { Component } from "react";
import ReactDom from "react-dom";

class DogList extends Component {
  render () {
    const {doglist} = this.props;
    // console.log(doglist);

    return (
      <div>
        {doglist && doglist.map(dog => {
          const {breeds, categories, id, url } = dog;
          if (breeds.length > 0) {
            return (
              <div>
                <p className ='dog-name'> {breeds[0].name}</p>
                <p className ='dog-cat'>{categories}</p>
                <p className = 'dog-id'>{id}</p>
                <p className = 'dog-img'>{url}</p>
                <hr />
              </div>
            );
          }
          })}
      </div>
    )

  }
}
export default DogList;