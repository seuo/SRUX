import React, {Component} from 'react';
import {navigate, Link} from "@reach/router";
import HorizontalScroll from 'react-scroll-horizontal';
import normalizeWheel from 'normalize-wheel';
import HorizontalScroller from 'react-horizontal-scroll-container';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


import {isBrowser, isMobile, CustomView, browserName} from "react-device-detect";

import mjlogo from './assets/mitchells-joinery-logo.png';
import tenslogo from './assets/10squares-logo.png';
import gubbalogo from './assets/gubba-logo.png';
import pylogo from './assets/playtionery-logo.jpg';
import mglogo from './assets/mg-logo.jpg';
import cclogo from './assets/cc-logo.jpg';
import autlogo from './assets/aut.jpg';
import gclogo from './assets/gc-logo.jpg';
import logo from './assets/srux-logo.svg';



document.addEventListener('mousewheel', function (event) {
    const normalized = normalizeWheel(event);

    console.log(normalized.pixelX, normalized.pixelY);
});

class MyWork extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: '',
            vScroller: 'fade-in',
            hScroller: 'fade-in',

            row: 'fade-in',
            mainNav: 'closeNav',
            heroblock: '',

            stageZero:'stageZero',


            experience: '',
            home: '',
            slide: 'slide-up',
            headerS: 'none',
            nav: '',
            tAnim:'fade-in',
            hAnim:'hSlide',
            colTwoBg: 'colBlack',
            colTwoBgImg:'',
            stageState:'stageF-in',
            currentIndex: 0,
            stageNum: [
                'stageOne','stageTwo','stageThree','stageFour','stageFive','stageSix','stageSeven','stageEight',
            ],
            currentExp: 0,
            stageExpNum: [
                'ExpStageOne','ExpStageTwo','ExpStageThree','ExpStageFour','ExpStageFive','ExpStageSix','ExpStageSeven'
            ],
            expColTrans:"",
            expColTransHeader:"",
            blackbar:"",
        }

    }

    componentDidMount = () => {

        let data = this
            .props.data

            this
            .setState({

                vScroller:data.vScroller,
                hScroller:data.hScroller,

                mainNav: data.mainNav,
                heroblock: data.heroblock,
                home: data.home,

                slide: data.slide,
                nav: data.nav,

                currentIndex:data.currentIndex,
                currentExp:data.currentExp,
            
                expColTrans:data.expColTrans,
                expColTransHeader:data.expColTransHeader,
                blackbar:data.blackbar,
                navMenu:data.navMenu,
                colTwoBg:data.colTwoBg,

                vScroller:data.vScroller,
                hScroller:data.hScroller,

                stageZero:data.stageZero,

                stageState:'stageF-in',
                colTwoBg: 'colBlack',
                headerTransition: 'headerTransWork'
            })

    }


        componentDidUpdate(prevProps) {
        
            if (prevProps.data !== this.props.data) {
                this.componentDidMount();
            }
        }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.data !== this.props.data) {
    //       this.updateAndNotify();
    //     }
    //   }
    
    

    nextIndex = () => {
        const { stageNum, currentIndex } = this.state;
      

        if (currentIndex == 7) {    

                setTimeout(() => {
                    this.setState({
                        experience: '',
                        portfolio: 'hero-base',
                        home: '',
                        heroblock: 'base-hero',
                        row: "row-base",
                        slide: '',
                        tAnim:'tFade',
                        hAnim:'hSlide',
                        blackbar:'fade-out',
                        vScroller:'none',
                        colTwoBg:'none',
                        stageState:'stageF-out',
                        expColTrans:"exp-col-trans",
                        expColTransHeader:"exp-col-trans-header",
                        headerTransition:"none",
                        currentExp:0,
                    })
                }, 200)
                    this.setState({
                        stageState:'stageF-in',
                    })
                    setTimeout(() => {
                        this.setState({
                            stageState:'stageF-in',
                        })
                    }, 200)
        }
 
        this.setState({
            stageState:'stageF-out',
        });
        setTimeout(() => {
            this.setState({
                stageState:'stageF-in',
                currentIndex: currentIndex + 1,
            })
        }, 200)

    };

 

    prevIndex = () => {
        const { stageNum, currentIndex } = this.state;
        if (currentIndex == 0) {
        
                this.setState({
                    experience: 'exp',
                    home: "active",
                    vScroller:"fade-out",
                    portfolio: "base",
                    heroblock: "slide-out",
                    row: "slide-out-row",
                    slide: "slide-down",
                    nav: '',
                    navMenu: 'fade-out',
                    blackbar: 'fade-out',
                    colTwoBg: 'colWhite',
                    headerTransition: 'none',
                    stageZero:'stageZero',
                })
        
                setTimeout(() => {
                    navigate("/")
                    this.setState({headerS: '', slide: '', row: '', navMenu: '', nav: ''})
                }, 1500)

            return this.setState({
                currentIndex: 0,
                stageNum: -1,

            });
        }
 
        this.setState({
            stageState:'stageF-out',
        });
        setTimeout(() => {
            this.setState({stageState:'stageF-in',
            currentIndex: currentIndex - 1
        })
        }, 200)

    };


    nextExp = () => {
        const { stageExpNum, currentExp } = this.state;
      

        if (currentExp == 6) {    
                this.setState({
                    experience: '',
                    portfolio: 'hero-base',
                    home: '',
                    heroblock: 'base-hero',
                    row: "row-base",
                    slide: '',
                    tAnim:'tFade',
                    hAnim:'hSlide',
                    blackbar:'',
                    currentExp: stageExpNum.length,
                    
                })
                setTimeout(() => {
                    navigate("/")
                    this.setState({headerS: '', slide: '', row: '', navMenu: '', nav: ''})
                }, 1500)
        }
 
        this.setState({
            stageState:'stageF-in',
            currentExp: currentExp + 1,
        });

    };

 

    prevExp = () => {
        const { stageExpNum, currentExp } = this.state;
        if (currentExp == 0) {

                this.setState({
                    // experience: 'exp',
                    // home: "active",
                    // vScroller:"fade-out",
                    // portfolio: "base",
                    // heroblock: "slide-out",
                    // row: "slide-out-row",
                    // slide: "slide-down",
                    // nav: '',
                    // navMenu: 'fade-out',
                    // blackbar: 'fade-out',
                    // headerTransition: 'none'
                    headerTransition: 'headerTransWork fade-in one',
                    blackbar:'fade-in',
                    stageState:'stageF-out',
                    hScroller:'',
                    
                })
                setTimeout(() => {
                    this.setState({                    
                    colTwoBg: 'colBlack',
                    stageState:'fade-in',
                    currentIndex:7,
                    vScroller:'fade-in',
                    headerTransition: 'headerTransWork',
                    expColTrans:"",
                    expColTransHeader:"",
                })
                }, 600)


           this.setState({
 
                currentExp: 0,
                stageExpNum: -1,

            });
        }
 
        this.setState({
            // stageState:'stageF-out',
            currentExp: currentExp - 1,
            expColTrans:"exp-col-trans",
            expColTransHeader:"exp-col-trans-header",
        });
       

    };


    renderFirefox = () => {
        if (isMobile) {
            return <div>
                This content is unavailable on mobile</div>
        }
        return <div>
            ...content
        </div>
    }

    render() {
        let {
            navMenu,
            blackbar,
            headerTransition,
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
            currentExp
        } = this.state;

        let {hAnim, tAnim,} = this.props.data;

        let expLineStyle = {
            width:+currentExp+"75vw"
        }

        return (
            <> < CustomView condition = {
                browserName != "Firefox" && isBrowser
            } > <container className="pWrap">

                <div className={"navMenu P " + navMenu}>

                </div>

                

                {/* <scroller className="scroller"> */}
                {/* <div className="headerSection pHeaderSection">
                    <div className="header pHeader">
                        <div className="hero">
                            <div className={"col c1 " + headerTransition}>
                                <div onClick={this.navHome} className={"heroblock"}>
                                    <div className="heading">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.37 289.36">
                                            <path
                                                d="M189.19,285.14H-.84V-4.22H48C45.26.25,41.92,4.34,40.05,9c-8.25,20.66-8.34,40.63,6.18,59A53.05,53.05,0,0,0,70.65,85.25a93,93,0,0,0,14.54,3.48c8.31,1.52,16.7,2.59,25,4.15,5.28,1,10.51,2.37,15.67,3.86,8,2.31,14.5,6.93,20.14,12.92a44.66,44.66,0,0,1,9.12,14.16c4.7,11.79,4.65,23.79,1,35.8a33.24,33.24,0,0,1-18.71,21.46c-4.38,2-8.91,3.72-13.86,3.88a28.75,28.75,0,0,0-4.41.56c-2.38.46-3,1.83-1.76,3.89,1,1.66,2.32,3.16,3.49,4.74,4.47,6,8.92,12.1,13.42,18.11,3.39,4.52,6.88,9,10.26,13.47,4.4,5.88,8.7,11.84,13.11,17.71s9.05,11.83,13.53,17.77Q180.24,273.15,189.19,285.14Z"
                                                transform="translate(0.84 4.22)"/>
                                            <path
                                                d="M253.52,285.14h-28.2l-66.86-88.82a56.69,56.69,0,0,0,15.07-9.92c7.83-7.46,12.32-16.61,14.92-26.9,2.76-10.95,2.28-21.89-.32-32.76A65.56,65.56,0,0,0,179,104.85a55.81,55.81,0,0,0-13.25-13.22A67.89,67.89,0,0,0,139.81,79.4c-8.4-1.83-17-2.66-25.53-4-6.53-1-13.16-1.11-19.57-3.35a56.55,56.55,0,0,1-16.95-9.49,26.6,26.6,0,0,1-8.74-13,51.17,51.17,0,0,1-1-28.26A34.4,34.4,0,0,1,76.56,6.23,48.8,48.8,0,0,1,81.38,2.1c4.47-3.57,9.29-6.32,15.27-6.32H253.52Z"
                                                transform="translate(0.84 4.22)"/>
                                        </svg>
                                        <h1>Print &<br/>Digital<br/>Design</h1>
                                    </div>
                                    <div>
                                        <p>
                                            Creative digital &amp;<br/>brand experiences.<br/>My aim is to create
                                            <br/>functional, professional<br/>&amp; eye catching design.</p>
                                    </div>
                                    <div>
                                        <h2>Sam Robertson</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={"col c2 "+stageNum[currentIndex]+" "+colTwoBg} >
                                <div className="ui gone"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={"headerSection pHeaderSection stageZero "+stageNum[currentIndex]}>
                    <div className="header pHeader">
                        <div className="hero">
                            <div className={"col c1 " + headerTransition}>
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
                                                        <h2>
                                                            {/* content goes here from css */}
                                                        </h2>
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
                                       <div className="headerSection pHeaderSection">
                    <div className="header pHeader">
                        <div className="hero">
                            <div className={"col c1 "}>
                                <div onClick={this.navHome} className={"heroblock"}>
                                    <div className="heading">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 254.37 289.36">
                                            <path
                                                d="M189.19,285.14H-.84V-4.22H48C45.26.25,41.92,4.34,40.05,9c-8.25,20.66-8.34,40.63,6.18,59A53.05,53.05,0,0,0,70.65,85.25a93,93,0,0,0,14.54,3.48c8.31,1.52,16.7,2.59,25,4.15,5.28,1,10.51,2.37,15.67,3.86,8,2.31,14.5,6.93,20.14,12.92a44.66,44.66,0,0,1,9.12,14.16c4.7,11.79,4.65,23.79,1,35.8a33.24,33.24,0,0,1-18.71,21.46c-4.38,2-8.91,3.72-13.86,3.88a28.75,28.75,0,0,0-4.41.56c-2.38.46-3,1.83-1.76,3.89,1,1.66,2.32,3.16,3.49,4.74,4.47,6,8.92,12.1,13.42,18.11,3.39,4.52,6.88,9,10.26,13.47,4.4,5.88,8.7,11.84,13.11,17.71s9.05,11.83,13.53,17.77Q180.24,273.15,189.19,285.14Z"
                                                transform="translate(0.84 4.22)"/>
                                            <path
                                                d="M253.52,285.14h-28.2l-66.86-88.82a56.69,56.69,0,0,0,15.07-9.92c7.83-7.46,12.32-16.61,14.92-26.9,2.76-10.95,2.28-21.89-.32-32.76A65.56,65.56,0,0,0,179,104.85a55.81,55.81,0,0,0-13.25-13.22A67.89,67.89,0,0,0,139.81,79.4c-8.4-1.83-17-2.66-25.53-4-6.53-1-13.16-1.11-19.57-3.35a56.55,56.55,0,0,1-16.95-9.49,26.6,26.6,0,0,1-8.74-13,51.17,51.17,0,0,1-1-28.26A34.4,34.4,0,0,1,76.56,6.23,48.8,48.8,0,0,1,81.38,2.1c4.47-3.57,9.29-6.32,15.27-6.32H253.52Z"
                                                transform="translate(0.84 4.22)"/>
                                        </svg>
                                        <h1>Print &<br/>Digital<br/>Design</h1>
                                    </div>
                                    <div>
                                        <p>
                                            Creative digital &amp;<br/>brand experiences.<br/>My aim is to create
                                            <br/>functional, professional<br/>&amp; eye catching design.</p>
                                    </div>
                                    <div>
                                        <h2>Sam Robertson</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={"col c2 "} >
                                <div className="ui gone"></div>
                            </div>
                        </div>
                    </div>
                </div>
                    </section>
                    
                </ReactScrollWheelHandler>
                

                {/* </scroller> */}
                <div className={"blackBar " + blackbar}></div>
                

            </container>
        </CustomView>

       
    </>

        )
    }
}

export default MyWork;