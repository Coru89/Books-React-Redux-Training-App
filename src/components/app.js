import React, { Component } from 'react';
// import { connect } from 'react-redux';
import BookList from '../containers/book-list'
// .. means go up a directory

export default class App extends Component {
  render() {
    return (
        <BookList />
    );
  }
}
