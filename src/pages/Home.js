import React from 'react';

import { connect } from 'react-redux';
//import { add, minus, asyncAdd } from '../action/testCount';

import { Flex, WhiteSpace } from 'antd-mobile';
import { Skeleton } from 'antd';

//import { MySearchBar } from './MySearchBar';
import { MyList } from '../components/MyList';
//import { MyCarousel } from './MyCarousel';

class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listLoaded: false,
      showSkeleton: 'show-skeleton',
      showMyList: 'hidden-mylist'
    };
}

  componentDidMount() {
    console.log(this.props)
  }

  searchInfo = (keyWord) => {
    console.log('----------')
    console.log(keyWord)
    //TODO:异步请求数据
  }
  
  loaded = (status) => {
    if(status){
      this.setState({
        listLoaded: true,
        showSkeleton: 'hidden-skeleton',
        showMyList: 'show-mylist'
      });
    }
  }

  render(){
      return (
        <div>
          <div className="flex-container"> 
            <div>
            <Flex justify="center">
              <Flex.Item>
                {
                  [1,2,3,4,5].map(item => {
                    return (
                      <div className={this.state.showSkeleton}
                           key={item}
                           style={{
                             padding:30
                           }}>
                        <Skeleton 
                          key={item}
                          active 
                          avatar 
                          loading 
                          paragraph
                          title
                        ></Skeleton>
                      </div>
                    )
                  })
                }
                
                <div className={this.state.showMyList}>
                  <MyList 
                    isLoaded={this.loaded}
                  ></MyList>
                </div>
              </Flex.Item>
            </Flex>
            <WhiteSpace />
            </div>
          </div>
        </div>
      )
  }
}

// const PlaceHolder = ({ className = '', ...restProps }) => (
//   <div className={`${className} placeholder`} {...restProps}>Block</div>
// );
  
const mapStateToProps = (state, ownProps) => {
    return {
      state
    }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Home);
// export {Home}