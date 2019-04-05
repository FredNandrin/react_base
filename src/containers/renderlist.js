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
        const id_token='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NTQ0OTg0NDQsImV4cCI6MTU1NDUwMjA0NCwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiZnJlZEBuYW5pdC5iZSJ9.ddzaE53kf5cXQQXUkIC4DL-ro-0TQUZxf_DtbLRBq41LS-FqSMoUQ6juvsGT6UuB9jlkdyOQjULr-D0gdqZxdJmNJr-0WIv879UjZYR9_6yc9Cr6oYbG1-8DXNKZBmk13R4pKihQe5FeBi63QXQhSX_L5I_S0kXjbk3br9nRHvx_a1gLbLPyN27vU5Ebno6mEEluANIp7ySn0jFIm0_Tt-CAC1r_ur9Kkb-IFqmcwvPRki_MBf95gc3OTeM2EQxRwTS-lvXaP10bLrAd5eu5GE1iMoHtmObmNDaPBJX3jJLTvgu1J3TaJ2__RlMZLoy9-1dq1RoJ5iKkQ_I8kATiJpR_rMgfTzWVs0t7ODAx70vCVMu_kV2GNlCNLMNeWdfslW2OWf2mID9sBLEGtuHj00Nr-WySeGs1vPciaG5HgUHRWf871S-ZxLdXV2j6BbhV8CPXNIivHirpKPemz6lbW69KnjtXkfBBUbiy75sJAF7_eYVGT6OOuBHrCukIt7PJKWSOnv92zdVCXv_vYjWptAlyExGCy_k6yLPZ_lnNvLf3DGs8iAI6YMmiLtmcXqV_RdopBkReNdZrtdazEUUXVs6HIulykxNxsm703rphpLjEkM7wYeEHY1rD9KXju76ePHLP2J53uBJkkBee3sqOvMNHTpcHK33IjzSVLt-Ahdk';
        const headers = {'AUTHORIZATION': 'Bearer '+id_token};
        fetch('http://localhost:8000/api/test_entities.json', {
            method: 'GET',
            headers: headers
        })


            .then((result) => {
                // Get the result
                // If we want text, call result.text()
                return result.json();
            }).then((jsonResult) => {
            // Do something with the result
            console.log(jsonResult);
            this.setState( { items: jsonResult, itemsAreLoading: false  });
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
            List Item {list_item.id} : {list_item.name}
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
