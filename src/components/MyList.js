import React from 'react';
import ReactDOM from 'react-dom';

import { PullToRefresh, Button } from 'antd-mobile';

function genData() {
    const dataArr = [];
    for (let i = 0; i < 20; i++) {
      dataArr.push(i);
    }
    return dataArr;
  }
  
class MyList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            down: true,
            height: document.documentElement.clientHeight, //可见区域的高度
            data: [],
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
            height: hei,
            data: genData(),
        }), 0);
    }

    render() {
        return (<div>
        <Button
            style={{ marginBottom: 15 }}
            onClick={() => this.setState({ down: !this.state.down })}
        >
            direction: {this.state.down ? 'down' : 'up'}
        </Button>
        <PullToRefresh
            damping={60}
            ref={el => this.ptr = el}
            style={{
                height: this.state.height,
                overflow: 'hidden',
            }}
            distanceToRefresh={25}
            indicator={this.state.down ? {} : { deactivate: '上拉可以刷新' }}
            direction={this.state.down ? 'down' : 'up'}
            refreshing={this.state.refreshing}
            onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => {
                    this.setState({ refreshing: false });
                }, 1000);
            }}
        >
            {this.state.data.map(i => (
            <div key={i} style={{ textAlign: 'center', padding: 20 }}>
                {this.state.down ? 'pull down' : 'pull up'} {i}
            </div>
            ))}
        </PullToRefresh>
        </div>);
    }
}
  
export { MyList }