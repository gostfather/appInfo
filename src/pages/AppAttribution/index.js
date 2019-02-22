import React, { Component } from 'react';
// import BasicTab from './components/BasicTab';
import CompositeFilter from './components/CompositeFilter';
import TopicCard from './components/TopicCard';
import MultiCard from './components/MultiCard';

export default class AppAttribution extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app-attribution-page">
        {/* <BasicTab /> */}
        <CompositeFilter />
        <TopicCard />
        <MultiCard />
      </div>
    );
  }
}
