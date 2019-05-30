import React from 'react';

import { MySearchBar } from '../components/MySearchBar';

class SearchPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            doSearch: (text) => {
                console.log(text)
            }
        }
    }

    render() {
        return (
            <MySearchBar doSearch={this.state.doSearch}></MySearchBar>
        )
    }
}

export { SearchPage }