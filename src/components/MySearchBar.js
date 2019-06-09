import React from 'react';

import { SearchBar, Popover, Icon } from 'antd-mobile';

const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;
const Item = Popover.Item;

class MySearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          visible: true,
          selected: '',
          value: ''
        }
    };
    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
          visible: false,
          selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
          visible,
        });
    };

    onSubmit = () => {
        //enter键监听
    }

    onClear = () => {
        
    }

    onFocus = () => {
        
    }

    onBlur = () => {
        
    }

    onCancel = () => {
        this.setState({
            value: ''
        });
    }

    onChange = (val) => {
        this.setState({
            value: val
        }, () => {
            //这里向父组件传递查询的keyword
            //let keyWord = this.state.value;
            this.props.doSearch(this.state.value);
        });

    }

    render () {
        return (
            <div>
            <div className="search-bar">
                <SearchBar
                    value={this.state.value}
                    placeholder="搜索"
                    maxLength={16}
                    showCancelButton={false}
                    onSubmit={ this.onSubmit }
                    onClear={ this.onClear }
                    onFocus={ this.onFocus }
                    onBlur={ this.onBlur }
                    onCancel={ this.onCancel }
                    onChange={ this.onChange }
                />
            </div>
            <div className="add-post">
                <Popover mask
                    overlayClassName="fortest"
                    overlayStyle={{ color: 'currentColor' }}
                    visible={this.state.visible}
                    overlay={[
                      (<Item key="4" value="scan" icon={myImg('tOtXhkIWzwotgGSeptou')} data-seed="logId">Scan</Item>),
                      (<Item key="5" value="special" icon={myImg('PKAgAqZWJVNwKsAJSmXd')} style={{ whiteSpace: 'nowrap' }}>My Qrcode</Item>),
                      (<Item key="6" value="button ct" icon={myImg('uQIYTFeRrjPELImDRrPt')}>
                        <span style={{ marginRight: 5 }}>Help</span>
                      </Item>),
                    ]}
                    align={{
                      overflow: { adjustY: 0, adjustX: 0 },
                      offset: [-10, 0],
                    }}
                    onVisibleChange={this.handleVisibleChange}
                    onSelect={this.onSelect}
                > 
                    <div style={{
                      height: '100%',
                      padding: '0 15px',
                      marginRight: '-15px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    >
                        <Icon type="ellipsis" />
                    </div>
              </Popover>
            </div>
            </div>
        )
    }
}

export { MySearchBar }