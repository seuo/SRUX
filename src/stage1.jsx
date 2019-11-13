import React, {Component} from 'react';

import Tilt from 'react-tilt';
import {Scrollbars} from 'react-custom-scrollbars';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import mjprogress from './assets/mj-bcards.png';
import mjlogobg from './assets/mj-bg.jpg';
import mjbanner1 from './assets/mj-banner1.jpg';
import mjlogo from './assets/mitchells-joinery-logo.png';
import mjlogolines from './assets/mjColours.png';
import mjlogobw from './assets/mitchells-joinery-logo-bw.png';

import mjwebmocks from './assets/mj-website-mocks.png';
import mjpage from './assets/mj-page.png';
class Stage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandImg1: '',
            expandImg2: '',
            expandImg3: '',
            mobTrans: '',
            stageImages: '',
            gridStyles: [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10
            ]
        }
    }

    componentDidMount = () => {
        this.setState(
            {stageNum: this.props.data.stageNum, currentWorkIndex: this.props.data.currentWorkIndex}
        )

    }

    onImgClick1 = () => {
        this.setState({})
    }

    onImgClick2 = () => {
        this.setState({})
    }

    onImgClick3 = () => {
        this.setState({})
    }

    render() {
        let {
            expandImg1,
            expandImg2,
            expandImg3,
            mobTrans,
            stageImages,
            stageNum,
            currentWorkIndex
        } = this.state;

        const gridStyles = this.state.gridstyles;
        console.log(gridStyles);

        return (<> < div className = "background-holder" > <div className={"gridlines"}>

            {
                this
                    .state
                    .gridStyles
                    .map(item => (
                        <div
                            key={item}
                            className={"gcol gridcol" + item}
                            style={{
                                left: 10 * item + '%'
                            }}></div>
                    ))
            }

        </div>
    </div>

    <Parallax
        className='section'
        pages={1}
        scrolling={true}
        vertical="vertical"
        ref={ref => (this.parallax = ref)}>

        <container className="caseSection">

            <container class="imageBanner">

                <div className={"s1Col2 " + expandImg2}></div>
                <div className={"s1Col1 " + expandImg1}></div>
                <div className={"s1Col3 " + expandImg3}></div>

            </container>
            <row className="row">
                <div className="infoContainer">
                    <h1
                        style={{
                            color: '#2bb0ce'
                        }}>Logo Design</h1>
                    <div className="infoBlock">
                        <div className="infoCol">
                            <p>
                                For the logo design, I wanted to develop a modern clean brand that was easily recognizable. 
                                </p><p>The client needed the logo to contain colours that closely matched their existing brand. 
                                They also requested the company initials M J to be included in the logo.
                            </p>

                        </div>
                        <div className="infoCol">

                            <ParallaxLayer
                                style={{
                                    position: 'relative',
                                    height: '35em',
                                    marginTop: '-13em',
                                    marginLeft: '-9em'
                                }}
                                offset={0}
                                speed={0.05}>

                                <div className="infoImg1">
                                    <img
                                        style={{
                                            width: '47.5em',
                                            paddingLeft: '0em'
                                        }}
                                        alt={this.imgAlt}
                                        src={mjprogress}/>
                                </div>
                            </ParallaxLayer>

                        </div>

                    </div>

                </div>
                <div className="infoContainer">
  
                    <div className="infoBlock">
                        <div className="infoCol">

                            <div className="logoContainer">

                                <img
                                    style={{
                                        width: '21em'
                                    }}
                                    alt={this.imgAlt}
                                    src={mjlogolines}/>

                            </div>
                        </div>
                        <div className="infoCol">
                        <p></p>
                            <p><br/>
                                The process included sketching up concepts & coming up with a variety of
                                ideas to present to the client.</p>
                               <p>I created the logo using illustrator, got feed back from the client
                                & exprimented with different colours until we were both happy with the final
                                design.
                            </p>
                        </div>

                    </div>

                </div>

            </row>

            <row className="row bannerRow">
                <container
                    class="imageBannerRow"
                    style={{
                        position: 'absolute',
                        marginTop: '17vw',
                        marginBottom: '17vw'
                    }}>
                    <ParallaxLayer
                        className="banner"
                        style={{
                            position: 'relative'
                        }}
                        offset={0}
                        speed={0.05}>
                        <div
                            className={"bannerImg"}
                            style={{
                                backgroundImage: 'url(' + mjbanner1 + ')'
                            }}></div>

                    </ParallaxLayer>
                </container>
            </row>
            <row className={"row"}>

                <div className="item1">
                    <div className="webWorkTilt">

                        <div className={"webWork "}>
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

                    <div className="webWorkMobileTilt">

                        <div className={"webWorkMobile Tilt-inner " + mobTrans}>
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

                {/* <div className={"s1Col4 "+expandImg3}></div> */}
                {/* <div className="stageOne stageBanner">

                    </div> */
                }
            </row>

            <row
                className="row"
                style={{
                    marginTop: '10em'
                }}>
                <div className="infoContainer">
                    <h1 className="rightSide">Web Design</h1>
                    <div className="infoBlock">

                        <div className="infoCol">
                            <ParallaxLayer
                                style={{
                                    position: 'relative',
                                    height: '17em',
                                    marginTop: '0em',
                                    marginLeft: '0em'
                                }}
                                factor={.3}
                                offset={0}
                                speed={0.04}>
                                <div className="infoImg1">
                                    <img
                                        alt={this.imgAlt}
                                        style={{
                                            width: '28em'
                                        }}
                                        src={mjwebmocks}/>
                                </div>
                            </ParallaxLayer>

                        </div>
                        <div className="infoCol">
                            <p>
                                The initial mocks were created in Adobe XD, Photography & images were edited using
                                Adobe Photoshop. I created the markup & styling using VScode before incorporating them into the
                                Wordpress CMS.
                            </p>

                        </div>
                    </div>

                </div>
                <div className="infoContainer">
                    <div className="infoBlock">

                        <div className="infoCol">
 
                            <p>
                                I wanted to incorporate the shapes and angles of the yachts into the
                                design & layout. The site design consists of of subtle angles & trim in the
                                company colours that break up the sections & create a clean, clear & easily read
                                layout.
                            </p>

                        </div>
                        <div className="infoCol">


                        </div>
                    </div>

                </div>
                <a href="https://mitchellsjoinery.co.nz/" target="_blank">
                <img
                    style={{
                        marginTop: '5em',
                        width: '75em',
                        marginLeft: '0em'
                    }}
                    alt={this.imgAlt}
                    src={mjpage}/>
                    </a>
            </row>
            <row className="row">
                <a href="https://mitchellsjoinery.co.nz/" target="_blank">
                    <h1>Visit the Website</h1>
                </a>
            </row>
        </container>
    </Parallax>
            {/* <div className="stageImages">
            <container class="imageMason">
                <div className={"s1Col1 "+expandImg1}></div>
                <div className={"s1Col2 "+expandImg2}></div>
                <div className={"s1Col3 "+expandImg3}></div>
            </container>
        </div> */
        } < />
        )

        
    }
}

export default Stage1