import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Stories from './Stories';
import SingleStory from './SingleStory';
import Authors from './Authors';
import SingleAuthor from './SingleAuthor';
import AllStories from './AllStories';

export default class Main extends React.Component {
  render() {
    return (
      <HashRouter>
        <div id="main">
          <div className="column container">
            <div id="header">
              <h1>Readium</h1>
            </div>
            <Navbar />
          </div>
          <Route exact path="/" component={Stories} />
          <Route exact path="/stories" component={AllStories} />
          {/*<Route path="single-story" component={Stories} />*/}
          <Route path="/stories/:storyId" component={SingleStory} />
          <Route exact path="/authors" component={Authors} />
          <Route path="/authors/:authorId" component={SingleAuthor} />
        </div>
      </HashRouter>
    );
  }
}
