import React, { Component } from 'react'
import { Card, Carousel, WhiteSpace } from 'antd-mobile';



class PersonalPage extends Component {
  constructor(props){
      super(props);
      this.state = {
          username: "Fukamoto Iwata",
          avatar_url: "https://img.anfensi.com/cpic/72/1481776692272.jpg",
          location: "Tokyo, Japan",
          Intro: "Vue is my favourite frontend framework.",
          Id: "fukamoto1994",
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
    return (
        <div>
            <div style={{textAlign:'center', backgroundColor:'white'}}>
                <WhiteSpace size="lg" />
                <img src={this.state.avatar_url} style={{width: '80%', padding:'1rem'}}></img>
                <h2> {this.state.username} </h2>
                <WhiteSpace size="lg" />
            </div>
            <Card full>
            <Card.Header
                title= {this.state.username}
                extra= {this.state.Id}
            />
            <Card.Body>
                <div> {this.state.Intro} </div>
            </Card.Body>
            <Card.Footer content='' extra="" />
            </Card>
            <Carousel
                autoplay
                autoplayInterval='3000'
                infinite
                beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                afterChange={index => console.log('slide to', index)}
                >
                {this.state.data.map(val => (
                    <a
                    key={val}
                    href="http://www.alipay.com"
                    style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                        // fire window resize event to change height
                        window.dispatchEvent(new Event('resize'));
                        this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
            </Carousel>
        </div>
    )
  }
}

export { PersonalPage }
