import React, {Component} from 'react';
import { connect } from 'react-redux';



class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//this connects react component to redux
function mapAppStateToProps(state) {
    // whatever is return from here will show up as props
    // inside of BookList
    return {
        books: state.books
    }
}

export default connect(mapAppStateToProps)(BookList);

//notes:
// whenever the application state changes, the container re-renders
// "                                    "  the object in the state function will be assigned as props
