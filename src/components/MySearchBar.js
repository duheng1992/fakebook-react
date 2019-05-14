import React from 'react';

import { SearchBar } from 'antd-mobile';

class MySearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

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
        )
    }
}

export { MySearchBar }