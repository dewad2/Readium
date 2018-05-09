import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import Stories from './Stories';
import Comments from './Comments';

export default class SingleAuthor extends Component {
  constructor() {
    super();
    this.state = {
      author: {},
      stories: [],
      comments: []
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.authorId;
    const [author, stories, comments] = await Promise.all([
      axios.get(`/api/authors/${id}`),
      axios.get(`/api/authors/${id}/stories`),
      axios.get(`/api/authors/${id}/comments`)
    ]);
    this.setState({
      author: author.data,
      stories: stories.data,
      comments: comments.data
    });
  }

  render() {
    console.log(this.state);
    const { author } = this.state;
    return (
      <div id="single-author" className="column">
        <div id="single-author-detail" className="row">
          <div className="column mr1">
            <h1>{author.name}</h1>
            <p>{author.bio}</p>
          </div>
          <img src={author.imageUrl} />
        </div>
        <div id="single-author-nav">
          <Link to={`/authors/${author.id}/comments`}>Comments</Link>
          <Link to={`/authors/${author.id}/stories`}>Stories</Link>
        </div>
        <hr />
        <div>
          <Route
            path={`/authors/${author.id}/comments`}
            render={() => <Comments comments={this.state.comments} />}
          />
          <Route
            path={`/authors/${author.id}/stories`}
            render={() => <Stories stories={this.state.stories} />}
          />
        </div>
      </div>
    );
  }
}
