import React, { Component } from 'react';
import Stories from './Stories';
import axios from 'axios';

export default class AllStories extends Component {
  constructor() {
    super();
    this.state = {
      stories: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/stories')
      .then(res => res.data)
      .then(stories => this.setState({ stories }))
      .catch(console.log.bind(console));
  }

  render() {
    return <Stories stories={this.state.stories} />;
  }
}
