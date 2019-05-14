import React from 'react';
import { TabBar } from 'antd-mobile';
import { asyncComponent } from '../tools/asyncComponent';
//import { ComponentList } from '../tools/dynamic';
import { configTabBar } from '../config/config_tabBar';

//import Home from './Home';
import { PersonalPage } from './PersonalPage';
const Home = asyncComponent(() => import('./Home'));

class MyTabBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: this.props.selectedTab,
      tabBarList: configTabBar,
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      (pageText === 'home')?<Home/>:((pageText === 'mine')?<PersonalPage/>:pageText)
    );
  }

  render() {
    //console.log(configTabBar)
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          noRenderContent={false}
          prerenderingSiblingsNumber={0}
          tabBarPosition='bottom'
        >
        {
          this.state.tabBarList.details.map(( item ) => {
            return (
            <TabBar.Item
              title={ item.title }
              key={ item.name }
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + item["unselect-background"] + ') center center /  21px 21px no-repeat' }}
              />}
              // icon={
              //   <Icon type='down'></Icon>
              // }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: 'url(' + item["select-background"] + ') center center /  21px 21px no-repeat' }}
              />
              }
              selected={this.state.selectedTab === item.name}
              badge={1}
              onPress={() => {
                this.setState({
                  selectedTab: item.name,
                });
              }}
              // data-seed="logId"
            >
              {this.renderContent(item.name)}
            </TabBar.Item>
            )
          })
        }
        </TabBar>
      </div>
    );
  }
}

export { MyTabBar }