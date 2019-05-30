import React, { Component } from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import { Avatar } from 'antd';

const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);

class PersonalPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          username: "Fukamoto Iwata",
          avatar_url: "https://img.anfensi.com/cpic/72/1481776692272.jpg",
          location: "Tokyo, Japan",
          Intro: "Vue is my favourite frontend framework.",
          Id: "fukamoto1994",
          follower: 10,
          following: 25,
          like: 230,
          data: ['1', '2', '3'],
          imgHeight: 176,

      }
  }

  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
      });
    }, 100);
  }
    


  render() {
    const tabs = [
      { title: "comments", sub: 1 },
      { title: "posts", sub: 2 },
    ];
    return (
        <div>

          <div style={{textAlign:'center', backgroundColor:'white'}}>
              <WhiteSpace size="lg" />
              <WhiteSpace size="lg" />
              <WhiteSpace size="lg" />
              <WhiteSpace size="lg" />
          </div>

          <div style={{display: 'flex', textAlign:'center'}}>
            <div style={{flex:'2', backgroundColor:'white'}}>
              <h2 style={{fontSize:'30px',marginBottom:'2px'}}> {this.state.username} </h2>
                <p style={{color:'grey', fontSize:'20px'}}><i>" {this.state.Intro} "</i></p>
            </div>
            <div style={{flex:'1', backgroundColor:'white',textAlign:"center"}}>
              <Avatar src={this.state.avatar_url} size={96} icon="user"/>
            </div>
          </div>

          <WhiteSpace size="xs" />

          <div style={{display:'flex', textAlign:"center", backgroundColor:"white", paddingTop:'5px'}}>
            <div style={{flex:'1'}}>
              <strong>following</strong>
              <p style={{color:'grey'}}>{this.state.following}</p>
            </div>
            <div style={{flex:'1'}}>
              <strong>follower</strong>
              <p style={{color:'grey'}}>{this.state.follower}</p>
            </div>
            <div style={{flex:'1'}}>
              <strong>like</strong>
              <p style={{color:'grey'}}>{this.state.like}</p>
            </div>
          </div>

          <WhiteSpace size="xs" />

          <Tabs tabs={tabs}
            initialPage={1}
            onChange={(tab, index) => { console.log('onChange', index, tab); }}
            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              暂无评论
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              暂无帖子
            </div>
          </Tabs>

        </div>
    )
  }
}

export { PersonalPage }
