import React from 'react';
import { connect } from 'react-redux';
import loadBook from './../actions/bookListAction';
import showBook from './../actions/bookDetailAction';

var BookList = React.createClass({

	componentDidMount: function() {
		this.props.dispatch(loadBook());
	},

	_showBook: function(book) {
		this.props.dispatch(showBook(book));
	},

	_listbook: function() {
		let that = this;
		var listBook = this.props.books.map(function(book, key) {
			return <li className="list-group-item" onClick={() => {that.props.dispatch(showBook(book))}} key={key}>{book.title}</li>
		});

		return listBook;
	},

	render: function() {
		return (
			<ul className="list-group">
				{this._listbook()}
			</ul>
		);
	}

});

function mapStateToProps(state) {
	return {
		books: state.books
	}
};

export default connect(mapStateToProps)(BookList);
