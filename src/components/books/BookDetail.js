import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(!this.props.book) {
      return (
        <h2>Please select a book</h2>
      );
    }
    return (
      <div className="well">
        <h2>Details for:</h2>
        <span className="alert-danger">{this.props.book.title}</span>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    book: state.selectedBook
  };
};

export default connect(mapStateToProps)(BookDetail);
