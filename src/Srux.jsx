import React, {Component} from 'react';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import logo from './assets/srux-logo.svg';
// import MyWork from './MyWork';
import PortfolioImg from './assets/portfolio.png';
import expImg from './assets/experience.png';
import contactImg from './assets/contact.png';
import mjlogo from './assets/mitchells-joinery-logo.png';
import tenslogo from './assets/10squares-logo.png';
import gubbalogo from './assets/gubba-logo.png';
import pylogo from './assets/playtionery-logo.jpg';
import mglogo from './assets/mg-logo.jpg';
import cclogo from './assets/cc-logo.jpg';
import autlogo from './assets/aut.jpg';
import gclogo from './assets/gc-logo.jpg';

class Srux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: 'none',

            currentPage: 0,
            currentIndex: 0,
            currentExp: 0,

            stageNum: [
                'stageOne',
                'stageTwo',
                'stageThree',
                'stageFour',
                'stageFive',
                'stageSix',
                'stageSeven',
                'stageEight'
            ],
            stageExpNum: [
                'ExpStageOne',
                'ExpStageTwo',
                'ExpStageThree',
                'ExpStageFour',
                'ExpStageFive',
                'ExpStageSix'
            ],

            vScroller: '',
            hScroller: '',

            stageZero: 'stageZero',

            headerS: 'none',

            colTwoBg: 'colBlack',
            colTwoBgImg: '',

            homeHeader: 'homeHeader',
            headerTransitionHome: 'headerTransHome',
            headerTransition: 'headerTransWork'
        }

    }

    componentDidMount = () => {
        this.setState({})
    }

    nextPage = () => {

        this.setState({
            currentIndex: 0,
            currentExp: 0,
            homeHeader: 'homeHeader slide-out',
            stageZero: 'stageZero',
            hScroller: '',
            vScroller: ''
        })

    };

    prevPage = (e) => {

        this.setState({currentIndex: 7, currentExp: 6})
        setTimeout(() => {
            this.setState({hScroller: 'above', homeHeader: 'homeHeader slide-right'})
        }, 700)
    };

    nextIndex = () => {
        const {stageNum, currentIndex} = this.state;

        if (currentIndex == 7) {

            setTimeout(() => {
                this.setState({

                    tAnim: 'tFade',
                    hAnim: 'hSlide',
                    stageState: 'stageF-out',
                    expColTrans: "exp-col-trans",
                    expColTransHeader: "exp-col-trans-header",
                    currentExp: 0,
                    headerTransition: 'headerTransWork fade-out',
                    vScroller: '',
                    hScroller: 'above'
                })
            }, 200)
            this.setState({stageState: 'stageF-in'})
            setTimeout(() => {
                this.setState({stageState: 'stageF-in'})
            }, 200)
        }

        this.setState({stageState: 'stageF-out'});
        setTimeout(() => {
            this.setState({
                stageState: 'stageF-in',
                currentIndex: currentIndex + 1
            })
        }, 200)

    };

    prevIndex = () => {
        const {stageNum, currentIndex} = this.state;
        if (currentIndex == 0) {

            this.setState({
                homeHeader: 'homeHeader slide-back-down',
                currentIndex: 0,
                currentExp: 0,
                headerTransitionHome: 'headerTransHome fade-in',
                stageZero: 'stageZero fade-out-fast',
                stageState: 'stageF-in',
                hScroller: '',
                vScroller: ''
            })

            setTimeout(() => {
                this.setState({stageZero: 'stageZero'})
            }, 600)

        }

        this.setState({stageState: 'stageF-out'});

        setTimeout(() => {
            this.setState({
                stageState: 'stageF-in',
                currentIndex: currentIndex - 1
            })
        }, 200)

    };

    nextExp = () => {
        const {stageExpNum, currentExp} = this.state;

        if (currentExp == 6) {
            this.setState({
                homeHeader: 'homeHeader slide-back-left',
                headerTransitionHome: 'headerTransHome fade-in',
                headerTransition: 'headerTransWork fade-in',
                currentIndex: 0,
                currentExp: 0,
                vScroller: '',
                hScroller: 'above'
            })

        }

        this.setState({
            stageState: 'stageF-in',
            currentExp: currentExp + 1
        });

    };

    prevExp = () => {
        const {stageExpNum, currentExp} = this.state;
        if (currentExp == 0) {

            this.setState({

                expColTrans: "",
                expColTransHeader: "",
                stageZero: 'stageZero',

                headerTransition: 'headerTransWork fade-in',

                currentIndex: 7,
                currentExp: 0,
                stageExpNum: -1,
                hScroller: ''
            })

            setTimeout(() => {
                this.setState({expColTrans: "", expColTransHeader: ""})
            }, 600)
        }

        this.setState({
            // stageState:'stageF-out',
            currentExp: currentExp - 1,
            expColTrans: "exp-col-trans",
            expColTransHeader: "exp-col-trans-header"
        });

    };

    navHome = () => {
        const {stageNum, currentIndex} = this.state;

        this.setState({
            homeHeader: 'homeHeader slide-back-left',
            currentIndex: 0,
            currentExp: 0,
            headerTransition: 'headerTransHome fade-in',
            stageZero: 'stageZero fade-out-fast',
            stageState: 'stageF-in'
        })

        setTimeout(() => {
            this.setState({stageZero: 'stageZero'})
        }, 600)
    };

    navMyWork = (e) => {
        e.preventDefault();

        this.setState({
            homeHeader: 'homeHeader slide-out',
            headerTransition: 'headerTransWork fade-in',
            heroblock: 'base',
            colBlack: 'colBlack',
            currentIndex: 0,
            currentExp: 0,
            hScroller: '',
            vScroller: '',
            stageZero: 'stageZero'
        })
    }

    navExpDirect = (e) => {

        e.preventDefault();

        this.setState({
            homeHeader: 'homeHeader slide-right',
            headerTransition: 'headerTransWork fade-out',
            tAnim: 'tFade',
            hAnim: 'hSlide',
            blackbar: '',
            currentIndex: 7,
            currentExp: 0,
            expColTrans: "exp-col-trans",
            expColTransHeader: "exp-col-trans-header",
            hScroller: 'above'
        })

    }

    navContactDirect = () => {

        this.setState({

            headerTransition: 'headerTransWork fade-out',
            tAnim: 'tFade',
            hAnim: 'hSlide',
            blackbar: '',
            currentIndex: 7,
            currentExp: 6,
            expColTrans: "exp-col-trans",
            expColTransHeader: "exp-col-trans-header",
            hScroller: 'above'
        })
        setTimeout(() => {
            this.setState({})
        }, 600)
    }

    handleContactShow = (e) => {
        e.preventDefault();
        this.setState({contact: 'fade-in'})
    }

    handleContactHide = (e) => {
        e.preventDefault();
        this.setState({contact: 'none'})
    }




render (){
    let {headerS,home,nav,navMenu,contact,bcState,blackbar,whiteTransForm,headerTransition,logoPath,
        headerTransitionHome,
        homeHeader,
        colTwoBg,
        vScroller,
        hScroller,
        stageState,
        expColTrans,
        expColTransHeader,
        stageZero,
        stageNum,
        currentIndex,
        stageExpNum,
        currentExp,
        hAnim, 
        tAnim
    } = this.state;

        let expLineStyle = {
            width:+currentExp+"75vw"
        }

  



    return (
        <>
            <ReactScrollWheelHandler
                upHandler={this.prevPage}
                downHandler={this.nextPage}
                customStyle={{
                    // width: "100%",
                    // height: "100vh",
                    // transform:"rotate(-20deg) scale(1) translateY(-"+currentIndex+"00vh)",
                    // transformOrigin:"top left",
                }}
                >
        <div className={"HomeHeaderSection"}>
            <div className={"header "+homeHeader}>
                <div className="hero">
                    <div className={"col c1 "+headerTransitionHome}><div className="heroblock"><div className={"heading "+home+" one"}>
                    <svg className={logoPath} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.37 289.36">
                        <path className="leftPath" d="M189.19,285.14H-.84V-4.22H48C45.26.25,41.92,4.34,40.05,9c-8.25,20.66-8.34,40.63,6.18,59A53.05,53.05,0,0,0,70.65,85.25a93,93,0,0,0,14.54,3.48c8.31,1.52,16.7,2.59,25,4.15,5.28,1,10.51,2.37,15.67,3.86,8,2.31,14.5,6.93,20.14,12.92a44.66,44.66,0,0,1,9.12,14.16c4.7,11.79,4.65,23.79,1,35.8a33.24,33.24,0,0,1-18.71,21.46c-4.38,2-8.91,3.72-13.86,3.88a28.75,28.75,0,0,0-4.41.56c-2.38.46-3,1.83-1.76,3.89,1,1.66,2.32,3.16,3.49,4.74,4.47,6,8.92,12.1,13.42,18.11,3.39,4.52,6.88,9,10.26,13.47,4.4,5.88,8.7,11.84,13.11,17.71s9.05,11.83,13.53,17.77Q180.24,273.15,189.19,285.14Z" transform="translate(0.84 4.22)"/>
                        <path className="rightPath" d="M253.52,285.14h-28.2l-66.86-88.82a56.69,56.69,0,0,0,15.07-9.92c7.83-7.46,12.32-16.61,14.92-26.9,2.76-10.95,2.28-21.89-.32-32.76A65.56,65.56,0,0,0,179,104.85a55.81,55.81,0,0,0-13.25-13.22A67.89,67.89,0,0,0,139.81,79.4c-8.4-1.83-17-2.66-25.53-4-6.53-1-13.16-1.11-19.57-3.35a56.55,56.55,0,0,1-16.95-9.49,26.6,26.6,0,0,1-8.74-13,51.17,51.17,0,0,1-1-28.26A34.4,34.4,0,0,1,76.56,6.23,48.8,48.8,0,0,1,81.38,2.1c4.47-3.57,9.29-6.32,15.27-6.32H253.52Z" transform="translate(0.84 4.22)"/>
                    </svg>

                    <h1>Print &<br/>Digital<br/>Design</h1></div><div className={home+" three"}><p>
                                Creative digital &amp;<br/>brand experiences.<br/>My aim is to create <br/>functional, professional<br/>&amp; eye catching design.</p></div><div className={home+" five"}><h2>Sam Robertson</h2></div>
                    </div>
                        </div>
                            <div className="col c2">
                                <div className={"ui " + nav}>
                                    <div className={"contactinfo "+contact}><p>samrob.nz@gmail.com</p></div>
                                    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 731.4 803">
                                    <g>
                                        <g id ="contactContainer"  onClick={this.navContactDirect}>                                     
                                        <g id="contact">
                                        <g>
                                            <image width="697" height="511" transform="translate(35.02 293.48)" href={contactImg}/>
                                        </g>
                                        <polygon points="466.5 643 260.65 643 308.5 608 466.5 608 466.5 643"/>
                                        <g id="contacttext">
                                            <path d="M349.2,633.11a10.3,10.3,0,0,1-4.19.76c-3.91,0-7.47-2.52-7.47-8.17,0-5,3.07-8.38,8-8.38a7.65,7.65,0,0,1,3.6.68l-.38,1.12a7.46,7.46,0,0,0-3.22-.7c-4,0-6.65,2.69-6.65,7.28,0,4.36,2.42,7.07,6.5,7.07a8.48,8.48,0,0,0,3.47-.72Z" transform="translate(1.17)"/>
                                            <path d="M365.26,625.47c0,5.69-3.3,8.42-7,8.42-3.92,0-6.88-3.06-6.88-8.13,0-5.33,3.07-8.44,7.07-8.44S365.26,620.52,365.26,625.47Zm-12.55.25c0,3.56,2,7.1,5.57,7.1s5.63-3.44,5.63-7.28c0-3.35-1.74-7.14-5.57-7.14S352.71,622.15,352.71,625.72Z" transform="translate(1.17)" />
                                            <path d="M379.78,633.64h-1.25l-5.77-9.08a56.38,56.38,0,0,1-3-5.25l-.06,0c.13,2,.15,3.77.15,6.52v7.79h-1.25V617.58h1.29l5.86,9.16a51.22,51.22,0,0,1,2.94,5.12l0,0c-.17-2.2-.19-4-.19-6.58v-7.68h1.27v16.06Z" transform="translate(1.17)" />
                                            <path d="M393.39,618.68h-5v15h-1.31v-15h-5v-1.11h11.35v1.11Z" transform="translate(1.17)"/>
                                            <path d="M406.59,633.64h-1.37l-1.91-5.5h-6.07l-1.88,5.5H394l5.61-16.06H401ZM403,627.08l-1.82-5.19c-.35-1.12-.61-2-.84-3h-.07a27.68,27.68,0,0,1-.82,2.89l-1.84,5.28Z" transform="translate(1.17)"/>
                                            <path d="M420.22,633.11a10.26,10.26,0,0,1-4.19.76c-3.91,0-7.47-2.52-7.47-8.17,0-5,3.07-8.38,8-8.38a7.65,7.65,0,0,1,3.6.68l-.38,1.12a7.43,7.43,0,0,0-3.22-.7c-4,0-6.65,2.69-6.65,7.28,0,4.36,2.42,7.07,6.5,7.07a8.48,8.48,0,0,0,3.47-.72Z" transform="translate(1.17)"/>
                                            <path d="M432.69,618.68h-5v15h-1.31v-15h-5v-1.11h11.35v1.11Z" transform="translate(1.17)"/>
                                            
                                        </g>
                                        <polygon points="727.61 292.11 33.61 802.11 32.17 803 43.99 803 730.7 298.52 730.7 289.83 727.61 292.11"/>
                                        </g></g>
                                        
                                        <g id ="cvContainer" onClick={this.navExpDirect}> 
     
                                        <g id="cv">
                                        <g>
                                            <image width="435" height="492" transform="translate(296.7)" href={expImg}/>
                                        </g>
                                        <polygon points="526.5 90 325.3 90 314.55 55 526.5 55 526.5 90"/>
                                        <g id="cvtext">
                                            <path d="M369.64,80.64h-8.29V64.57h7.93v1.1h-6.62v6h6.24v1.1h-6.24v6.8h7v1.1Z" transform="translate(1.17)"/>
                                            <path d="M383.15,80.64h-1.51l-2.33-3.9c-.91-1.44-1.46-2.33-2-3.28h0c-.52,1-1,1.8-1.93,3.31l-2.2,3.87h-1.51l5-8.15-4.77-7.91h1.51l2.45,4.16c.64,1,1.1,1.87,1.59,2.73h0c.49-.93,1-1.67,1.61-2.7l2.52-4.19h1.52l-4.95,7.81Z" transform="translate(1.17)"/>
                                            <path d="M386.25,64.76a19.61,19.61,0,0,1,3.45-.31c4.94,0,5.48,3.09,5.48,4.53,0,3.89-3.22,5-5.8,5a7.11,7.11,0,0,1-1.84-.17v6.8h-1.29V64.76Zm1.3,8a6.23,6.23,0,0,0,1.9.21c2.75,0,4.42-1.35,4.42-3.83s-1.86-3.57-4.19-3.57a9.31,9.31,0,0,0-2.13.19Z" transform="translate(1.17)" />
                                            <path d="M407,80.64h-8.3V64.57h7.94v1.1H400v6h6.24v1.1H400v6.8h7v1.1Z" transform="translate(1.17)"/>
                                            <path d="M416,72.89c1.29.4,2.07,1.63,2.46,3.43a20.52,20.52,0,0,0,1.18,4.32H418.3a20.56,20.56,0,0,1-1-3.92c-.49-2.28-1.44-3.39-3.49-3.39h-2.31v7.31h-1.29V64.79a17.29,17.29,0,0,1,3.49-.34c2.07,0,3.39.42,4.29,1.31a4.15,4.15,0,0,1,1.15,2.92A4.24,4.24,0,0,1,416,72.85v0Zm-2.18-.59c2.39,0,3.95-1.35,3.95-3.43,0-2.69-2.13-3.36-4.14-3.36a9.13,9.13,0,0,0-2.18.19v6.6Z" transform="translate(1.17)"/>
                                            <path d="M422.65,64.57H424V80.64h-1.32Z" transform="translate(1.17)"/>
                                            <path d="M436.56,80.64h-8.3V64.57h7.94v1.1h-6.63v6h6.25v1.1h-6.25v6.8h7v1.1Z" transform="translate(1.17)"/>
                                            <path d="M451,80.64h-1.25L444,71.56a56.38,56.38,0,0,1-3-5.25l-.06,0c.13,2,.14,3.77.14,6.52v7.79h-1.24V64.57h1.29l5.86,9.17a51.22,51.22,0,0,1,2.94,5.12l0,0c-.17-2.2-.19-4-.19-6.58V64.57H451V80.64Z" transform="translate(1.17)"/>
                                            <path d="M466,80.11a10.26,10.26,0,0,1-4.19.76c-3.91,0-7.47-2.52-7.47-8.17,0-5,3.06-8.38,8-8.38a7.79,7.79,0,0,1,3.6.68l-.38,1.12a7.46,7.46,0,0,0-3.22-.7c-4,0-6.65,2.69-6.65,7.28,0,4.36,2.41,7.07,6.5,7.07a8.48,8.48,0,0,0,3.47-.72Z" transform="translate(1.17)"/>
                                            <path d="M477.4,80.64h-8.29V64.57H477v1.1h-6.62v6h6.24v1.1h-6.24v6.8h7v1.1Z" transform="translate(1.17)"/>
                                        </g>
                                        <polygon points="447.53 489.51 303.29 11.08 300.14 0.82 289.77 0.86 437.95 493.39 442.04 506.97 453.46 498.56 727.66 297.01 731.07 294.98 730.94 281.64 729.75 281.61 447.53 489.51"/>
                                        </g>
    
                                        </g><g id ="portfolioContainer" onClick={this.navMyWork}>
                                            
                                            <g id="portfolio">
                                            <g>
                                            <image width="429" height="669" transform="translate(11.56)" href={PortfolioImg}/>
                                            </g>
                                            <polygon id="portfolioBlock" points="399.05 367 174.05 367 174.05 332 388.27 332 399.05 367"/>
                                            <g id="porttext">
                                            <path d="M227.18,341.77a18.59,18.59,0,0,1,3.45-.32c4.93,0,5.48,3.09,5.48,4.53,0,3.89-3.22,5-5.8,5a7.07,7.07,0,0,1-1.84-.17v6.8h-1.29V341.77Zm1.29,8a6.33,6.33,0,0,0,1.91.21c2.75,0,4.42-1.35,4.42-3.83s-1.86-3.57-4.19-3.57a9.48,9.48,0,0,0-2.14.19Z" transform="translate(1.17)"/>
                                            <path d="M252.49,349.47c0,5.69-3.3,8.42-7,8.42-3.92,0-6.88-3.06-6.88-8.13,0-5.33,3.07-8.44,7.07-8.44S252.49,344.52,252.49,349.47Zm-12.55.25c0,3.56,2,7.09,5.57,7.09s5.63-3.43,5.63-7.27c0-3.35-1.74-7.14-5.56-7.14S239.94,346.15,239.94,349.72Z" transform="translate(1.17)"/>
                                            <path d="M261.64,349.89c1.29.4,2.07,1.63,2.45,3.43a20.53,20.53,0,0,0,1.19,4.32h-1.36a21.71,21.71,0,0,1-1-3.92c-.49-2.28-1.44-3.38-3.49-3.38h-2.31v7.3H255.8V341.79a17.22,17.22,0,0,1,3.49-.34c2.07,0,3.38.42,4.29,1.31a4.15,4.15,0,0,1,1.15,2.92,4.24,4.24,0,0,1-3.09,4.17v0Zm-2.18-.59c2.39,0,4-1.35,4-3.43,0-2.69-2.14-3.36-4.14-3.36a9.13,9.13,0,0,0-2.18.19v6.6Z" transform="translate(1.17)"/>
                                            <path d="M277.59,342.68h-5v15h-1.32v-15h-5v-1.11h11.34v1.11Z" transform="translate(1.17)"/>
                                            <path d="M279.83,357.64V341.58h7.92v1.1h-6.6v6.2h6.07V350h-6.07v7.66Z" transform="translate(1.17)"/>
                                            <path d="M304.15,349.47c0,5.69-3.3,8.42-7,8.42-3.92,0-6.88-3.06-6.88-8.13,0-5.33,3.07-8.44,7.07-8.44S304.15,344.52,304.15,349.47Zm-12.55.25c0,3.56,2,7.09,5.57,7.09s5.63-3.43,5.63-7.27c0-3.35-1.74-7.14-5.57-7.14S291.6,346.15,291.6,349.72Z" transform="translate(1.17)"/>
                                            <path d="M315.71,357.64h-8.26V341.58h1.31v15h6.95Z" transform="translate(1.17)"/>
                                            <path d="M318.56,341.57h1.32v16.07h-1.32Z" transform="translate(1.17)"/>
                                            <path d="M337.08,349.47c0,5.69-3.3,8.42-7,8.42-3.91,0-6.87-3.06-6.87-8.13,0-5.33,3.06-8.44,7.06-8.44S337.08,344.52,337.08,349.47Zm-12.55.25c0,3.56,2,7.09,5.56,7.09s5.63-3.43,5.63-7.27c0-3.35-1.73-7.14-5.56-7.14S324.53,346.15,324.53,349.72Z" transform="translate(1.17)"/>
                                            </g>
                                            <g id="portfolio-border">
                                            <polygon points="10.8 397.5 206.05 667.02 436.55 497.62 287.55 0 76.55 0 10.8 397.5"/>
                                            <polygon points="446.13 494.76 297.99 0 287.55 0 436.55 497.62 206.05 667.02 10.8 397.5 76.55 0 66.41 0 0.68 395.86 0 399.99 2.46 403.37 197.96 672.9 203.86 681.04 211.97 675.08 442.47 505.68 448.15 501.51 446.13 494.76"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </ReactScrollWheelHandler>
        
                        <>

                        <div className={"whiteTrans "+whiteTransForm}></div>
                        <div className={"navMenu "+navMenu}>
                            
                        <div className="navlist">
                            <h2 className="zB" onClick={this.navHome}>HOME NAV</h2>
                            <h2 className="z999" onClick={this.navMyWork}>PORTFOLIO</h2>
                            <h2 className="z999" onClick={this.navExpDirect}>EXPERIENCE</h2>
                            <h2 className="z999" onClick={this.navContactDirect}>CONTACT</h2>       
                        </div>
                        </div>

                        </>


                    <container className="pWrap">

                <div className={"navMenu P " + navMenu}>

                </div>

                <div className={"headerSection pHeaderSection "+stageZero+" "+stageNum[currentIndex]}>
                    <div className="header pHeader">
                        <div className="hero">
                            <div className={"col c1 " +headerTransition}>
                                <div onClick={this.navHome} className={"heroblock"}>
                                    <div className={stageNum[currentIndex]+" heading "+stageState}>
                                        <h1>
                                            {/* content goes here from css */}
                                        </h1>
                                    </div>
                                    <div className={stageNum[currentIndex]+" description "+stageState}>
                                        <p>
                                            {/* content goes here from css */}
                                        </p>

                                    </div>
                                    <div className={stageNum[currentIndex]+" workDone "+stageState}>
                                        <h2>
                                            {/* content goes here from css */}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className={"col c2 "+stageNum[currentIndex]+" "+colTwoBg} >
                                <div className="ui gone"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
               <ReactScrollWheelHandler
                    upHandler={this.prevIndex}
                    downHandler={this.nextIndex}
                    className={"vScroller "+vScroller}
                    customStyle={{
                        // width: "100%",
                        // height: "100vh",
                        transform:"rotate(0deg) scale(1) translateY(-"+currentIndex+"00vh)",
                        transformOrigin:"top left",
                    }}
                >
                <section className={"pSection fade-in"}>
                    <row className="row1">
                        <blurb className={"eText"}>
                            <div className={"webWork "}>
                                <a href="//mitchellsjoinery.co.nz/" target="_blank">
                                    <div className="webImage mj"></div>
                                </a>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block>
                                {/* <h1 className={"workHeading " + hAnim}>Web Work</h1> */}
                                {/* <div class={"scroll-downs "}>
                                    <div class="mousey">
                                        <div class="scrollerAnim"></div>
                                    </div>
                                    <div class="arrow arrow-first"></div>
                                </div> */}
                            </block>

                            <text>
                                <imgblock className={tAnim}><img src={mjlogo}/></imgblock>
                            </text>

                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"webWork "}>
                                <a href="//10squares.co.nz" target="_blank">
                                    <div className="webImage tens"></div>
                                </a>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                                <imgblock className={tAnim}><img src={tenslogo}/></imgblock>
                            </text>
                          
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"webWork "}>
                                <a href="//gubbagardensheds.co.nz" target="_blank">
                                    <div className="webImage gubba"></div>
                                </a>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                                <imgblock className={tAnim}><img src={gubbalogo}/></imgblock>
                            </text>
                        
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"webWork "}>
                                <div className="webImage py"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                                <imgblock className={tAnim}><img src={pylogo}/></imgblock>
                            </text>
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"webWork "}>
                                <div className="webImage heli"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                        

                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"printWork "}>
                                <div className="webImage mglogo"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block>
                                {/* <h1 className={"skillHeading " + hAnim}>Print Work</h1> */}
                            </block>
                            <text>
                                <imgblock><img src={mglogo}/></imgblock>
                            </text>
                
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"printWork "}>
                                <div className="webImage cc"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                                <imgblock><img src={cclogo}/></imgblock>
                            </text>
                        

                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"printWork "}>
                                <div className="webImage autposter"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                                <imgblock><img src={autlogo}/></imgblock>
                            </text>
                       
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="row1">
                        <blurb className={"eText "}>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                               
                            </text>
                       
                        </itemheading>
                    </row>
                </section>
                {/* <section className={"pSection"}>

                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"printWork "}>
                                <div className="webImage gcpackage"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text>
                                <imgblock><img src={gclogo}/></imgblock>
                            </text>
                        
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText "}>
                            <div className={"printWork "}>
                                <div className="webImage renders"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text></text>
                          
                        </itemheading>
                    </row>
                </section> */}
                </ReactScrollWheelHandler>
                <ReactScrollWheelHandler
                    upHandler={this.prevExp}
                    downHandler={this.nextExp}
                    className={"hScroller "+hScroller}
                    customStyle={{
                        // width: "100%",
                        // height: "100vh",
                        transform:"rotate(0deg) scale(1) translateX(-"+currentExp+"00vw)",
                        transformOrigin:"top left",
                       
                    }}
                >
                    <div className={"headerSection pHeaderSection "+stageZero}>
                                        <div className="header pHeader">
                                            <div className="hero">
                                                <div className={"col c1 "+expColTrans+" headerTransExp"}>
                                                    <div onClick={this.navHome} className={expColTransHeader+" heroblock stageExp"}>
                                                        <div className={"heading "+stageState}>
                                                            <h1> 
                                                                {/* content goes here from css */}
                                                            </h1>
                                                            
                                                        </div>
                                                        <div className={" description "+stageState}>
                                                            <p>
                                                                {/* content goes here from css */}
                                                            </p>
                                                            

                                                        </div>
                                                        <div className={" workDone "+stageState}>
                                               
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={"col c2 cTwoExp"}>
                                                <div className="expLine" style={expLineStyle}></div>
                                                <blurb className={"eText exp-col-trans"}>

                                                    <text>
                                                        <h1>Technical Knowledge</h1>
                                                        <p>HTML / CSS, SCSS</p>
                                                        <p>React, Jquery & Javascript</p>
                                                        <p>WordPress CMS & Magento CMS</p>
                                                        <p>3D Modeling & Rendering</p>
                                                        <p>Windows & MAC OS Operator</p>
                                                        <p>Computer Assembly Procedures</p>
                                                        
                                                    </text>
                                                  
                                                    <text>
                                                        <h1>Web & UX Tools</h1>
                                                        <p>Visual Studio Code</p>
                                                        <p>Sublime</p>
                                                        <p>Sketch</p>
                                                        <p>Adobe XD</p>
                                                        <p>Github</p>
                                                        
                                                    </text>
                                                    </blurb>
                                                    <blurb className="eText exp-col-trans">
                                                    <text>
                                                        <h1>Print & Design Tools</h1>
                                                        <p>Adobe Photoshop</p>
                                                        <p>Adobe Illustrator</p>
                                                        <p>Adobe Indesign</p>
                                                        <p>Adobe Animate</p>
                                                        <p>Adobe Premiere</p>
                                                        
                                                    </text>
                                                    </blurb>

                                                    <div className="ui">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

   
                <section className={"eSection"}>

                    <row className="eRow1">
                        <blurb className={"eText "}>

                            <text>
                                <h1>Yoobee Web & UX Development</h1>
                                <p>Level 6 / 2019</p>
                                <p>This one year diploma has been a great refresher, gave a me whole range of
                                    new skills.
                                </p>
                                <p>The course was an intensive full time course covering design, markup,
                                    styling, coding, cms development as well as agile group work. I also got a great
                                    introduction to coding, learning Javascript, Jquery & React.
                                </p>
                                <p>Using all these skills I am able to develop a more advanced range of web
                                    sites & applications.</p>
                                <p>The course was split into 4 modules over the year.<br/>UX & Web Design / Javascript, Jquery / React / CMS Development</p>

                            </text>
                        </blurb>
                    </row>
                    <row className="eRow2">
                        
                    </row>
                </section>
                <section className={"eSection"}>

                    <row className="eRow1">
                        <blurb className={"eText "}>

                            <text>
                                <h1>Graphic & Web Designer</h1>
                                <p>Gubba Products Ltd / 2006 - 2018</p>
                                <p>My main role at Gubba Products Ltd involved designing content for print and
                                    digital. I created advertising material for Gubba Products in magazines such as
                                    New Zealand Gardener, Weekend Gardener, and Your Home & Garden. I was also
                                    responsible for designing their yearly catalogue for their large home and garden
                                    product range.</p>
                                <p>I was later assigned the job of designing and building several web sites for
                                    specific products that needed dedicated ecommerce stores which helped drive
                                    revenue. Most notably their Gubba Garden Sheds Website which has improved on
                                    sales every year since and continues to improve.</p>
                                <p>Reference Manager - David Graves / Marketing Manager - Tim Graves<br/>Ph: 09 915 9250 / 021 771 119</p>

                            </text>
                        </blurb>
                    </row>
                    <row className="eRow2">
                      
                    </row>
                </section>
                <section className={"eSection"}>

                    <row className="eRow1">
                        <blurb className={"eText "}>

                            <text>
                                <h1>AUT Diploma in Graphic Communication</h1>
                                <p>Level 5 / 2008 - 2010</p>
                                <p>The Diploma in Graphic Communication at AUT was a 2 year full time course
                                    which involved the use and application of the following skills: Print
                                    production, pre-press, graphic design, web design, desktop publishing, digital
                                    imaging, computer graphics, pre production, postproduction and operating a MAC.</p>
                                <p>Reference: David Sinfield</p>

                            </text>
                        </blurb>

                    </row>
                    <row className="eRow2">
                        <itemheading>
                            <block></block>
                            <text></text>
                            <text className="skills"></text>
                        </itemheading>
                    </row>
                </section>

                <section className={"eSection"}>

                    <row className="eRow1">
                        <blurb className={"eText "}>

                            <text>
                                <h1>Production Fabricator</h1>
                                <p>2003 - 2006</p>
                                <p>I built electrical panels for boats and recreational vehicles. I had to learn
                                    about AC and DC electrical components; how they function, and their purpose.</p>
                                <p>
                                    In my last year I was promoted to team leader for a team of 4 DC assemblers,
                                    then I moved up to team 2 before leaving.</p>
                                <p>Reference Manager - Elaine Hodgeson</p>

                            </text>
                        </blurb>
                    </row>
                    <row className="eRow2">
                        <itemheading>
                            <block></block>
                            <text></text>
                            <text className="skills1"></text>
                        </itemheading>
                    </row>

                </section>
                <section className={"eSection"}>

                    <row className="eRow1">
                        <blurb className={"eText "}>

                            <text>
                                <h1>Multimedia & Graphic Design Certificate</h1>
                                <p>2002 - 2003</p>
                                <p>This was a 6 month Multimedia and graphic design course which involved a
                                    range of design applications.
                                </p>
                                <p>Adobe Photoshop, Adobe Premier, Adobe Dreamweaver, Adobe Flash., Adobe
                                    Fireworks.</p>

                            </text>
                        </blurb>
                    </row>
                    <row className="eRow2">
                        <itemheading>
                            <block>
                                <h1 className={"skillHeading " + hAnim}>srux.web@gmail.com</h1>
                            </block>
                            <text></text>
                            <text className="skills1"></text>
                        </itemheading>
                    </row>

                </section>
                <section className={"eSection fade-in"}>

                    <row className="eRow1">
                        <formpos>
                            
                            <text>

                                <form
                                    className={"myForm fade-in one"}
                                    action="https://formspree.io/srux.web@gmail.com"
                                    method="POST">
                                    <h1>Get in touch</h1>
                                    <formgrp>
                                        <input type="text" placeholder="Name" name="name" required="required"/>
                                        <input type="email" placeholder="Email" name="email" required="required"/>
                                    </formgrp>
                                    <formgrp>
                                        <input type="text" placeholder="Subject" name="subject" required="required"/>
                                        <input type="tel" placeholder="Phone (optional)" name="name"/>
                                    </formgrp>

                                    <textarea
                                        className="message"
                                        type="textarea"
                                        placeholder="Message"
                                        name="message"
                                        required="required"/>

                                    <input className="submit" value="Send" type="submit"/>
                                </form>

                            </text>
                        </formpos>
                    </row>
                    <row className="eRow2">
                        <itemheading>
                            <block></block>
                            <text></text>
                            <text className="skills">
                                <h1></h1>
                            </text>
                        </itemheading>
                    </row>
                </section>
                    <section className="eSection cWhite">
                                      
                    </section>
                    
                </ReactScrollWheelHandler>
                

                {/* </scroller> */}
                <div className={"blackBar " + blackbar}></div>
                

            </container>

        {/* <Router>
           <MyWork path="/my-work" data={this.state}/>
        </Router> */}
        </>
    )
    }
}

export default Srux;