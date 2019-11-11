import React, {Component} from 'react';

import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import { ParallaxProvider,ParallaxBanner,Parallax,Image } from 'react-scroll-parallax';

import mjprogress from './assets/mj-progress.png';
import mjlogobg from './assets/mj-bg.jpg';
import mjlogo from './assets/mitchells-joinery-logo.png';
import mjlogolines from './assets/mjColourSwatches.png';
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
            gridStyles:[1,2,3,4,5,6,7,8,9,10],
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

        const gridStyles = this.state.gridstyles;
        console.log(gridStyles);
        
        return (
<ParallaxProvider>
            
<section className={"section"}>
             <div className="background-holder">
                <div className={"gridlines"}>

                {this.state.gridStyles.map(item => (
                    <div key={item} className={"gcol gridcol"+item} style={{left: 10 *item + 'vw'}} ></div>
                ))}

                </div>
            </div>
                    <row className={"row1"}>
                        <div className="item1">
                            <div className="webWorkTilt">
                                <div
                                    className={"webWork "}>
                                    <Scrollbars
                                        className="webWorkInner"
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}>
                                        <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                            <div className="webImage mj"></div>
                                        </a>
                                    </Scrollbars>
                                </div>

                            </div>
                            <div
                                className="webWorkMobileTilt">

                                <div
                                    className={"webWorkMobile Tilt-inner "+mobTrans}>
                                    <Scrollbars
                                        className="webWorkInner"
                                        autoHideTimeout={1000}
                                        autoHideDuration={200}>
                                        <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                            <div className="webImage mj-m"></div>
                                        </a>
                                    </Scrollbars>
                                </div>
                            </div>
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
                        <container class="imageMason">
                            <div className={"s1Col2 "+expandImg2}></div>
                            <div className={"s1Col1 "+expandImg1}></div>
                            {/* <div className={"s1Col4 "+expandImg3}></div> */}
                            
                
                {/* <div className="iCol4"></div>
                <div className="iCol5"></div>
                <div className="iCol6"></div> */}
            </container>
                        {/* <div className="stageOne stageBanner">

                        </div> */}
                    </row>
   
                    <row className="row">
                        <div className="infoContainer">
                        <h1>Logo Design</h1>
                            <div className="infoBlock">
                            <div className="infoCol">
                            <p>
                                    For the logo design, I wanted to develop a modern clean brand that represented the industry well & was recognizable.
                                    The client wanted the logo to contain colours that closely matched their existing brand, they also wanted the company initials M J to be included in the logo. </p>
                                    <div className="logoContainer">
                                    <img alt={this.imgAlt} src={mjlogolines}/>
                                </div>
                            </div>
                            <div className="infoCol">
                                <div className="infoImg1">    
                                    <img alt={this.imgAlt} src={mjprogress}/>
                                </div>
                                <p> I went about sketching up some concepts & tieing the intials in until I had narrowed it down to a specific design.<br/>I then made further alterations in Illustrator, got feed back from the client & exprimented with different colours until 
                                    we were both happy. 
                                </p>
                                <div className= {"brand "+stageImages}>
                                    <img alt={this.imgAlt} src={mjlogobw}/>  
                                    <img alt={this.imgAlt} src={mjlogo}/>
                            </div>
                            </div>

                        </div>

                        </div>

                    </row>
                    <row className={"row2"}>
                            

                         
                        
                </row>   
                    <row className="row">
                        <div className="banner"></div>
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