import React from 'react';
import './App.css';
import 'antd-mobile/dist/antd-mobile.css';

//底部导航
import { MyTabBar } from './components/MyTabBar'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'blueTab'
    };
  }

  componentDidMount() {

  }

  onEndReached = (event) => {

  }

  render() {
    return (
      <MyTabBar selectedTab={this.state.selectedTab}></MyTabBar>
    )

  }
}

