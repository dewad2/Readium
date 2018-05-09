import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';

export default class SingleStory extends Component {
  constructor() {
    super();
    this.state = {
      story: {
        content: '',
        comments: []
      }
    };
  }

  async componentDidMount() {
    const id = this.props.match.params.storyId;
    const result = await axios.get(`api/stories/${id}`);
    const story = result.data;
    this.setState({ story });
  }

  render() {
    const story = this.state.story;
    const comments = story.comments || [];
    console.log('params', this.props.match.params);
    return (
      <div id="single-story" className="column">
        <h1>{story.title}</h1>
        <p>{story.content}</p>
        <h3>Responses:</h3>
        <Comments comments={comments} />
      </div>
    );
  }
}
