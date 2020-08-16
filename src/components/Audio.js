import React, { Component } from "react";
import './Audio.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import AudioPlayer from 'react-modular-audio-player';



class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = { color: "prises" };
    }

    changeColor = color => {
        this.setState({ color });
    };



    render() {

        let rearrangedPlayer = [
            {
              className: "tier-top",
              style: {margin: "0.3rem"},
              innerComponents: [
                { 
                  type: "play",
                  style: {width: "fit-content"}
                },
                // {
                //   type: "rewind",
                //   style: {width: "fit-content"}
                // },
                // {
                //   type: "forward",
                //   style: {width: "fit-content"}
                // },
                {
                    type: "time",
                    style: {width: "10%"}
                  },
                  {
                    type: "seek",
                    style: {width: "65%"}
                  },
                  {
                    type: "volume",
                    style: {width: "max-content"}
                  },
              ]
            },
            // {
            //   className: "tier-bottom",
            //   style: {margin: "0rem 0.3rem 0.3rem 0.3rem"},
            //   innerComponents: [
            //     {
            //       type: "time",
            //       style: {width: "fit-content"}
            //     },
            //     {
            //       type: "seek"
            //     }
            //   ]
            // }
          ]

        return (
            <div className='PlayAudio'>
                <div className={this.state.color}>
                    <div className='list'>
                        <div className='title'>{this.props.name}</div>
                        <div className='bacic'>BASIC LEASE<div className="buy">30$</div></div>
                        <div className='bacic'>PLATINUM LEASE<div className="buy">60$</div></div>
                        <div className='bacic'>EXCLUSIVE RIGHTS<div className="buy">100$</div></div>
                        <div className='info'>Details +</div>
                        <div className='close' onClick={() => this.changeColor("prises")}>
                            <AiOutlineCloseCircle className='closeBut'></AiOutlineCloseCircle>
                        </div>
                    </div>
                </div>
                <div className='AudioP'>
                    <span className={this.props.photo} ></span>
                    <h3>{this.props.name}</h3>
                    <div className='BUT'>
                        <div className='but' onClick={() => this.changeColor("none")}>BUY</div>
                    </div>
                    <div className='line'>
                        <AudioPlayer rearrange={rearrangedPlayer} hideName='true' fontSize="1.7vw" playerWidth="100%" audioFiles={[
                            {
                                src: this.props.url,
                                title: "S",
                                artist: "S"
                            }
                        ]}></AudioPlayer>
                    </div>
                </div>
            </div>
        );
    }
}





export default Audio;