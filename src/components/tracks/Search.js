import React, { Component } from 'react';
// import axios from 'axois';
import { Consumer } from '../../context';

class Search extends Component {
  state = {
    trackTitle: '',
  };

  onChange() {}

  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className='card card-body mb-4 p-4'>
              <h1 className='display-4 text-center'>
                <i className='fas fa-music' /> Search For A Song
              </h1>
              <p className='lead text-center'>Get the lyrics for any song</p>
              <form>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control form-control-lg'
                    placeholder='Song title...'
                    name='trackTitle'
                    value={this.state.trackTitle}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
