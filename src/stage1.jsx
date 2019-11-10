import React, {Component} from 'react';

import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import { ParallaxProvider,ParallaxBanner,Parallax,Image } from 'react-scroll-parallax';


import mjlogobg from './assets/mj-bg.jpg';
import mjlogo from './assets/mitchells-joinery-logo.png';
import mjlogolines from './assets/mjColours.png';
import mjlogobw from './assets/mitchells-joinery-logo-bw.png';
class Stage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandImg1:'',
            expandImg2:'',
            expandImg3:'',
            mobTrans:'',
            stageImages:'',
        }
    }

    componentDidMount = () => {
        this.setState({
        stageNum:this.props.data.stageNum,
        currentWorkIndex:this.props.data.currentWorkIndex,
    })

}

    onImgClick1 = () => {
        this.setState({

        })
    }

    onImgClick2 = () => {
        this.setState({

        })
    }

    onImgClick3 = () => {
        this.setState({

        })
    }



    render (){
        let {expandImg1,
            expandImg2,
            expandImg3,
            mobTrans,
            stageImages,
            stageNum,
            currentWorkIndex} = this.state;



        return (
<ParallaxProvider>
            
             <section className={"section"}>
             <div className="background-holder">
                <div className={"gridlines"}>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>
                    <div className="gridcol"></div>

                </div>
            </div>
                    <row className={"row1"}>
                        <div className="item1">
                            <Tilt
                                className="webWorkTilt"
                                options={{
                                                perspective:2000,
                                                max:25,
                                                reverse:true,
                                                scale: 1.25,
                                                axis:'x',
                                                speed:4000,
                                                easing:"cubic-bezier(.03,.98,.52,.99)",
                                            }}>
                                <div
                                    className={"webWork "}
                                    onMouseEnter={this.handleVerticalLock}
                                    onMouseLeave={this.handleVerticalActive}>
                                    <Scrollbars
                                        className="webWorkInner"
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}>
                                        <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                            <div className="webImage mj"></div>
                                        </a>
                                    </Scrollbars>
                                </div>

                            </Tilt>
                            <Tilt
                                className="webWorkMobileTilt"
                                options={{
                                                perspective:2000,
                                                max:25,

                                                scale: 1.25,
                                                axis:'x',
                                                speed:4000,
                                                easing:"cubic-bezier(.03,.98,.52,.99)",
                                            }}>

                                <div
                                    className={"webWorkMobile Tilt-inner "+mobTrans}
                                    onMouseEnter={this.handleMobVerticalLock}
                                    onMouseLeave={this.handleMobVerticalActive}>
                                    <Scrollbars
                                        className="webWorkInner"
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}>
                                        <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                            <div className="webImage mj-m"></div>
                                        </a>
                                    </Scrollbars>
                                </div>
                            </Tilt>
                        </div>
                        {/* <Parallax className="stageBanner" y={[-20, 20]}>
                            <Image src={mjlogobg} />
                        </Parallax> */}
                        <ParallaxBanner
                                    className="stageOne stageBanner"
                                    y={[-20, 20]}
                                        layers={[
                                            {
                                                image: mjlogobg,
                                                amount: 0.1,
                                            },

                                        ]}
                                        style={{
                                            position: 'absolute',
                                            height: '60vh',
                                            marginTop: '0',
                                        }}
                                    >
                                        
                        </ParallaxBanner>
                        {/* <div className="stageOne stageBanner">

                        </div> */}
                    </row>
   
                    <row className="row">
                        <div className="infoContainer">
                            <h1>Logo Design</h1>
                            <p>
                            For the logo design, I wanted to develop a modern clean brand that represented the industry well & was recognizable.
                            The client wanted the logo to contain a shade of blue & the initials M J. </p>
                            <p> I went about sketching up some concepts & tieing the intials in until I had narrowed down to a specific design & then created & made alterations in Illustrator. 
                            I researched colour palletes from around the marine industry, got feed back from the client & exprimented with different colours until 
                            we were both happy. 
                            </p>
                        </div>

                    </row>
                    <row className={"row2"}>
                            
                            <div className= {"brand "+stageImages}>
                            <div className="logoContainer">
                                    <img alt={this.imgAlt} src={mjlogobw}/>  
                                </div>
                                <div className="logoContainer">
                                    <img alt={this.imgAlt} src={mjlogolines}/>
                                </div>

                                <div className="logoContainer">
                                    <img alt={this.imgAlt} src={mjlogo}/>
                                </div>
                            </div>
                         
                        
                </row>   
                    <row className="row">
                    </row>  

                </section>
        {/* <div className="stageImages">
            <container class="imageMason">
                <div className={"s1Col1 "+expandImg1}></div>
                <div className={"s1Col2 "+expandImg2}></div>
                <div className={"s1Col3 "+expandImg3}></div>
            </container>
        </div> */}
 </ParallaxProvider>
        )

        
    }
}

export default Stage1