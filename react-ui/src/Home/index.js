import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Button } from 'reactstrap';
import styles from './styles';

class Home extends Component {
  render() {
    return (
		<div class="row">
      <Jumbotron style={styles.jumbotron}>
        <h1 className="display-3">Welcome!</h1>
        <p className="lead">This is the best weather application you'll find around. Hope you have a great time here.</p>
        <hr className="my-2" />
        <p>This is a WIP though, and may contain several bugs and lack of features. We are working on it.</p>
        <p className="lead">
				<Link to='/login'>
          <Button color="primary">Sign In</Button>
				</Link>
        </p>
      </Jumbotron>
    </div>
    );
  }
}

export default Home;

