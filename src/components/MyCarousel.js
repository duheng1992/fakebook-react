import React, { Component } from 'react'
import { Carousel } from 'antd-mobile';

class MyCarousel extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: "Fukamoto Iwata",
            avatar_url: "https://img.anfensi.com/cpic/72/1481776692272.jpg",
            location: "Tokyo, Japan",
            Intro: "Vue is my favourite frontend framework.",
            Id: "fukamoto1994",
            data: ['1', '2', '3'],
            imgHeight: 176
        }
    }

    componentDidMount() {
        this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
    }

    render() {
        return (
            <div>
                <Carousel
                    autoplay
                    autoplayInterval='3000'
                    infinite
                    //beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    //afterChange={index => console.log('slide to', index)}
                    >
                    {
                        this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://122.112.216.70:1818"
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
                        ))
                    }
                </Carousel>
            </div>
            
        )
    }
}

export { MyCarousel }