import React from 'react';

import { Flex, WhiteSpace } from 'antd-mobile';
import { MySearchBar } from './MySearchBar';
import { MyList } from './MyList';

class Home extends React.Component {

  componentDidMount() {
    //console.log("------")
  }

  render(){
      return (
          <ShowList/>
      )
  }
}

let searchInfo = (keyWord) => {
  console.log('----------')
  console.log(keyWord)
  //TODO:异步请求数据
}

const ShowList = () => (
  <div>
    <MySearchBar doSearch={searchInfo}></MySearchBar>
    <div className="flex-container">
      <Flex justify="center">
        <MyList ></MyList>
      </Flex>
      <WhiteSpace />
    </div>
  </div>

);

// const PlaceHolder = ({ className = '', ...restProps }) => (
//   <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
  
export { Home }
