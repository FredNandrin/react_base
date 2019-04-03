import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class RenderList extends Component {
  state = {
      items:
        [
        ]
    }

    callApi(){
        // Github fetch library : https://github.com/github/fetch
        // Call the API page

        this.setState({ itemsAreLoading: true });
        fetch('http://127.0.0.1:8000/api/test_entities.json')
            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((jsonResult) => {
            // Do something with the result
            console.log(jsonResult);
            this.setState( { items: jsonResult, itemsAreLoading: true  });
        })
    }

    componentDidMount() {
        this.callApi();
    }
  render() {

      const { items, itemsAreLoading } = this.state;

      if (itemsAreLoading) {
          return <p>Loading ...</p>;
      }
    return (
      <div>
          <button onClick={() => this.callApi()}>
              Click here to call API
          </button>
      {items.map(list_item =>
        <div key={list_item.id}>
          <Link to={{pathname:'/listitem/' + list_item.id, state:{list_item} }} style={{marginTop: '25px', padding: '5px'}}>
            List Item {list_item.id}
          </Link>
          <br />
          <br />
        </div>
        )}
      </div>
    )}
}

function mapStateToProps(state) {
  return {

  }
}


export default connect(mapStateToProps)(RenderList);
