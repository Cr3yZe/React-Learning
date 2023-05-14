import { Component, Fragment } from 'react';

import Users from './Users';

import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: '',
      justTest: null,
    };
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value })
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users, justTest: 'The user is real!' })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter(user => user.name.includes(this.state.searchTerm)),
      })
    }
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type='search' onChange={this.searchChangeHandler.bind(this)} />
          <Users users={this.state.filteredUsers} test={this.state.justTest}/>
        </div>
      </Fragment>
    );
  }
}

export default UserFinder;