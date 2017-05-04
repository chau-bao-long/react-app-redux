import React, { Component } from 'react';
import BookList from './bookList';
import BookDetail from './bookdetail';

export default class ShowBook extends Component {
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
