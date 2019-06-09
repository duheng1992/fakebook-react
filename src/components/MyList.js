import React from 'react';
import ReactDOM from 'react-dom';

import { getAllPost } from '../config/axios';
/* eslint no-dupe-keys: 0, no-mixed-operators: 0 */
import { PullToRefresh, ListView, Tabs,  Badge } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';

import { MySearchBar } from './MySearchBar';
import { myListTab } from '../config/config_myList_tab';

const NUM_ROWS = 5;
let pageIndex = 0;

function genData(pIndex = 0) {
  const dataArr = [];
  for (let i = 0; i < NUM_ROWS; i++) {
    dataArr.push(`row - ${(pIndex * NUM_ROWS) + i}`);
  }

  return dataArr;
}

class MyList extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });

    this.state = {
      data: [],
      dataSource,
      refreshing: true,
      isLoading: true,
      height: document.documentElement.clientHeight,
      useBodyScroll: false,
      doSearch: (text) => {
          console.log(text)
      }
    };
  }

  // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    // if (nextProps.dataSource !== this.props.dataSource) {
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(nextProps.dataSource),
    //   });
    // }
  }

  componentDidUpdate() {
    if (this.state.useBodyScroll) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }

  componentDidMount() {
    const hei = this.state.height - ReactDOM.findDOMNode(this.lv).offsetTop;

    setTimeout(() => {
      this.rData = genData();

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(genData()),
        height: hei - 44 - 43 - 50 - 22, //减去上下banner高度,我TM？？！！
        refreshing: false,
        isLoading: false,
      }, ()=>{
        this.props.isLoaded(true)
        console.log(this.state.dataSource)
      });
    }, 1500);

    //console.log(this.props)
    //console.log(getAllPost())
    let dataTemp = [
      {
        photo_link: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        username: 'Meet hotel',
        content: '不是所有的兼职汪都需要风吹日晒',
      },
      {
        photo_link: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        username: 'McDonald\'s invites you',
        content: '不是所有的兼职汪都需要风吹日晒',
      },
      {
        photo_link: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
        username: 'Eat the week',
        content: '不是所有的兼职汪都需要风吹日晒',
      },
    ];
    getAllPost().then(res => {
      if(res.data){
        this.setState({
          data: res.data ? res.data : dataTemp
        });
      } else {
        
      }
      
    });
  }

  onRefresh = () => {
    this.setState({ refreshing: true, isLoading: true });
    // simulate initial Ajax
    setTimeout(() => {
      this.rData = genData();
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(this.rData),
        refreshing: false,
        isLoading: false,
      });
    }, 600);
  };

  onEndReached = (event) => {
    console.log('reach end')
    // load new data
    // hasMore: from backend data, indicates whether it is the last page, here is false
    // if (this.state.isLoading && !this.state.hasMore) {
    //   return;
    // }
    // this.setState({ isLoading: true });
    // setTimeout(() => {
    //   this.rData = [...this.rData, ...genData(++pageIndex)];
    //   this.setState({
    //     dataSource: this.state.dataSource.cloneWithRows(this.rData),
    //     isLoading: false,
    //   });
    // }, 1000);
  };



  render() {
    const tabs = myListTab.details ? myListTab.details : ([
      { title: '1st Tab' },
      { title: '2nd Tab' },
      { title: '3rd Tab' },
      { title: '4th Tab' },
      { title: '5th Tab' },
      { title: '6th Tab' },
      { title: '7th Tab' },
      { title: '8th Tab' },
      { title: <Badge text={'3'}>First Tab</Badge> },
    ]);

    const separator = (sectionID, rowID) => (
      <div
        key={`${sectionID}-${rowID}`}
        style={{
          backgroundColor: '#F5F5F9',
          height: 8,
          borderTop: '1px solid #ECECED',
          borderBottom: '1px solid #ECECED',
        }}
      />
    );
    let index = this.state.data.length - 1;
    // 每行样式
    const row = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.data.length - 1;
      }
      const obj = this.state.data[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
          }}
        >
          <div style={{ height: '50px', lineHeight: '50px', color: '#888', fontSize: '18px', borderBottom: '1px solid #ddd' }}>
            {obj.username}
          </div>
          <div style={{ display: '-webkit-box', display: 'flex', padding: '15px' }}>
            <img style={{ height: '63px', width: '63px', marginRight: '15px' }} src={obj.photo_link} alt="" />
            <div style={{ display: 'inline-block' }}>
              <div style={{ marginBottom: '8px', color: '#000', fontSize: '16px', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '230px' }}>{obj.content}-{rowData}</div>
              <div style={{ fontSize: '16px' }}><span style={{ fontSize: '30px', color: '#FF6E27' }}>{rowID}</span> 元/任务</div>
            </div>
          </div>
        </div>
      );
    }

    const rowVideo = (rowData, sectionID, rowID) => {
      if (index < 0) {
        index = this.state.data.length - 1;
      }
      const obj = this.state.data[index--];
      return (
        <div key={rowID}
          style={{
            padding: '0 15px',
            backgroundColor: 'white',
          }}
        >
          <video src='movie.mp4' 
            width='320' 
            height='240'
            controls='controls'
          >您的浏览器不支持HTML5</video>

        </div>
      );
    }

    // const renderTabBar = function (props) {
    //   return (<Sticky>
    //     {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    //   </Sticky>);
    // }

    return (<div>
      <MySearchBar doSearch={this.state.doSearch}></MySearchBar>

      <Tabs 
        tabs={tabs} 
        initialPage={0}

        tabBarPosition="top"
        onChange={(tab, index) => { console.log('onChange'); }}
        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        className="top-tab"
      >
      <ListView
        key={this.state.useBodyScroll ? '0' : '1'}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
       
        renderFooter={() => (<div style={{ textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={row}
        renderSeparator={separator}
        useBodyScroll={this.state.useBodyScroll}

        style={this.state.useBodyScroll ? {} : {
          height: this.state.height,
          border: 0,
          margin: '10px 0',
          width: '100%'
        }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          damping={150}
          distanceToRefresh={50}
        />}
        onEndReached={this.onEndReached}
        pageSize={5}
      />
      <ListView
        key={this.state.useBodyScroll ? '0' : '1'}
        ref={el => this.lv = el}
        dataSource={this.state.dataSource}
        renderHeader={() => <span>动态展示</span>}
        renderFooter={() => (<div style={{ padding: 10, textAlign: 'center' }}>
          {this.state.isLoading ? 'Loading...' : 'Loaded'}
        </div>)}
        renderRow={rowVideo}
        renderSeparator={separator}
        useBodyScroll={this.state.useBodyScroll}

        style={this.state.useBodyScroll ? {} : {
          height: this.state.height,
          border: 0,
          margin: '10px 0',
        
        }}
        pullToRefresh={<PullToRefresh
          refreshing={this.state.refreshing}
          onRefresh={this.onRefresh}
          damping={150}
          distanceToRefresh={50}
        />}
        onEndReached={this.onEndReached}
        pageSize={5}
      />

      </Tabs>

    </div>);
  }
}

export { MyList }