import React, {Component} from 'react';

import Tilt from 'react-tilt';
import {Scrollbars} from 'react-custom-scrollbars';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import tenslogolines from './assets/10sColours.png';
import tenslogobw from './assets/10squares-logo-bw.png';
import tenslogo from './assets/10squares-logo.png';
import tensColours from './assets/10sColours.png';
import tensbanner1 from './assets/10s-banner1.jpg';
import tenswebmocks from './assets/10s-website-mocks.png';
import tensRenderbg from './assets/10s-render-bg.png';
import tensRender from './assets/10s-render.png';
import tensRender1 from './assets/10s-render1.png';
import tensRender2 from './assets/10s-render2.jpg';
import tensRender3 from './assets/10s-render3.jpg';
import tensRender4 from './assets/10s-render4.jpg';
import tensRender5 from './assets/10s-render5.jpg';
import tensMins from './assets/10s-m-ins.png';

import mjprogress from './assets/mj-bcards.png';
import mjlogobg from './assets/mj-bg.jpg';

import mjlogo from './assets/mitchells-joinery-logo.png';
import mjlogolines from './assets/mjColours.png';
import mjlogobw from './assets/mitchells-joinery-logo-bw.png';

import tenspage from './assets/10s-page.png';
class Stage2 extends Component {

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
            scrolling,
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
        pages={5}
        scrolling={true}
        vertical="vertical"
        ref={ref => (this.parallax = ref)}>

        <container className="caseSection">

            <container class="imageBanner">
                <div className={"s2Col2 " + expandImg2}></div>
                <div className={"s2Col1 " + expandImg1}></div>
                <div className={"s2Col3 " + expandImg3}></div>
            </container>
            <row className="row">
                <div className="infoContainer">
                    <h1
                        style={{
                            color: '#df713e'
                        }}>Logo Design</h1>
                    <div className="infoBlock">
                        <div className="infoCol">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo, eu vestibulum tellus imperdiet quis. Suspendisse ullamcorper
                                arcu sed sagittis feugiat. Vestibulum faucibus cursus mi a varius. Phasellus
                                fringilla, ante ut placerat imperdiet.
                            </p>
                            <div className="logoContainer">

                                <img
                                    style={{
                                        width: '21em'
                                    }}
                                    alt={this.imgAlt}
                                    src={tensColours}/>

                            </div>
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
                                            width: '30em',
                                            paddingLeft: '10em',
                                            paddingTop: '3em'
                                        }}
                                        alt={this.imgAlt}
                                        src={tenslogo}/>
                                </div>
                            </ParallaxLayer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo, eu vestibulum tellus imperdiet quis. Suspendisse ullamcorper
                                arcu sed sagittis feugiat. Vestibulum faucibus cursus mi a varius. Phasellus
                                fringilla, ante ut placerat imperdiet.
                            </p>
                        </div>

                    </div>

                </div>

            </row>

            <row className={"row"}>
                <container
                    class="imageBanner"
                    style={{
                        marginBottom: '5em'
                    }}>
                    <div
                        style={{
                            height: '100%',
                            backgroundImage: 'url(' + tensRender2 + ')'
                        }}></div>
                    <div
                        style={{
                            height: '100%',
                            backgroundImage: 'url(' + tensRender3 + ')'
                        }}></div>
                    <div
                        style={{
                            height: '100%',
                            backgroundImage: 'url(' + tensRender5 + ')'
                        }}></div>
                    {/* <div style={{height:'100%',backgroundImage:'url('+tensRender4+')'}}></div> */}
                </container>

                {/* <div className={"s1Col4 "+expandImg3}></div> */}
                {/* <div className="stageOne stageBanner">

                    </div> */
                }
            </row>

            <row className="row">
                <div className="infoContainer">
                    <h1
                        style={{
                            color: '#df713e'
                        }}
                        className="rightSide">Rendering</h1>
                    <div className="infoBlock">

                        <div className="infoCol">
                            <ParallaxLayer
                                style={{
                                    position: 'relative',
                                    height: '17em',
                                    marginTop: '0em',
                                    marginLeft: '0em'
                                }}
                                offset={0}
                                speed={0.03}>
                                <div className="infoImg1">
                                    <img
                                        alt={this.imgAlt}
                                        style={{
                                            width: '45em',
                                            marginLeft: '-12em',
                                            marginTop: '-8em'
                                        }}
                                        src={tensRender}/>
                                </div>
                            </ParallaxLayer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo, eu vestibulum tellus imperdiet quis. Suspendisse ullamcorper
                                arcu sed sagittis feugiat. Vestibulum faucibus cursus mi a varius. Phasellus
                                fringilla, ante ut placerat imperdiet.
                            </p>

                        </div>
                        <div className="infoCol">

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo, eu vestibulum tellus imperdiet quis. Suspendisse ullamcorper
                                arcu sed sagittis feugiat. Vestibulum faucibus cursus mi a varius. Phasellus
                                fringilla, ante ut placerat imperdiet.
                            </p>
                            <ParallaxLayer
                                style={{
                                    position: 'relative',
                                    height: '17em',
                                    marginTop: '0em',
                                    marginLeft: '0em'
                                }}
                                offset={0}
                                speed={0.02}>
                                <div className="infoImg1">
                                    <img
                                        alt={this.imgAlt}
                                        style={{
                                            width: '40em',
                                            marginLeft: '-3em',
                                            marginTop: '3em'
                                        }}
                                        src={tensRender1}/>
                                </div>
                            </ParallaxLayer>
                            <div className="infoImg1">
                                <img
                                    alt={this.imgAlt}
                                    style={{
                                        position: 'absolute',
                                        width: '70em',
                                        marginLeft: '-83em',
                                        marginTop: '-9em'
                                    }}
                                    src={tensRenderbg}/>
                            </div>

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
                        speed={0.04}>
                        <div
                            className={"bannerImg"}
                            style={{
                                backgroundImage: 'url(' + tensbanner1 + ')'
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
                                <a href="//10squares.co.nz" target="_blank" rel="noopener noreferrer">
                                    <div className="webImage tens"></div>
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
                                <a href="//10squares.co.nz" target="_blank" rel="noopener noreferrer">
                                    <div className="webImage tens-m"></div>
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
                    <h1
                        style={{
                            color: '#df713e'
                        }}
                        className="rightSide">Web Design</h1>
                    <div className="infoBlock">

                        <div className="infoCol">
                            <ParallaxLayer
                                style={{
                                    position: 'relative',
                                    height: '17em',
                                    marginTop: '0em',
                                    marginLeft: '0em'
                                }}
                                offset={0}
                                speed={0.04}>
                                <div className="infoImg1">
                                    <img
                                        alt={this.imgAlt}
                                        style={{
                                            width: '28em'
                                        }}
                                        src={tenswebmocks}/>
                                </div>
                            </ParallaxLayer>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo, eu vestibulum tellus imperdiet quis. Suspendisse ullamcorper
                                arcu sed sagittis feugiat. Vestibulum faucibus cursus mi a varius. Phasellus
                                fringilla, ante ut placerat imperdiet.
                            </p>

                        </div>
                        <div className="infoCol">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis
                                consectetur leo, eu vestibulum tellus imperdiet quis. Suspendisse ullamcorper
                                arcu sed sagittis feugiat. Vestibulum faucibus cursus mi a varius. Phasellus
                                fringilla, ante ut placerat imperdiet.
                            </p>
                            <ParallaxLayer
                                style={{
                                    position: 'relative',
                                    height: '17em',
                                    marginTop: '0em',
                                    marginLeft: '3em'
                                }}
                                offset={0}
                                speed={0.03}>
                                <div className="infoImg1">
                                    <img
                                        alt={this.imgAlt}
                                        style={{
                                            width: '33em',
                                            marginTop: '10em'
                                        }}
                                        src={tensMins}/>
                                </div>
                            </ParallaxLayer>

                        </div>
                    </div>

                </div>
                <img
                    style={{
                        marginTop: '5em',
                        width: '75em',
                        marginLeft: '0em'
                    }}
                    alt={this.imgAlt}
                    src={tenspage}/>
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

export default Stage2