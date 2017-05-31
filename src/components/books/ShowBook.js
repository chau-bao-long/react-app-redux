import React, { Component } from 'react';

import BookList from './BookList';
import BookDetail from './Bookdetail';

class ShowBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4">
          <BookList />
        </div>
        <div className="col-md-8">
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default ShowBook;
