import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SingleAuthor from './SingleAuthor';

export default class Authors extends Component {
  constructor() {
    super();
    this.state = {
      authors: []
    };
  }
  async componentDidMount() {
    const result = await axios.get('/api/authors');
    const authors = result.data;
    this.setState({ authors });
  }
  render() {
    const authors = this.state.authors || [];
    return (
      <div>
        {authors.map(author => (
          <Link to={`/authors/${author.id}`} key={author.id}>
            <div className="author row">
              <img src={author.imageUrl} />
              <p>{author.name}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}
