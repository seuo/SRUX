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
            row: 'fade-in',
            mainNav: 'closeNav',
            heroblock: '',
            experience: '',
            home: '',
            slide: 'slide-up',
            headerS: 'none',
            nav: '',
            colTwoBg: 'colBlack',
            colTwoBgImg:'',
            currentIndex: 0,
            stageImage: [
                'stageOne','stageTwo','stageThree','stageFour','stageFive','stageSix','stageSeven','stageEight'
            ]
        }

    }


    nextIndex = () => {
        const { stageImage, currentIndex } = this.state;
        if (currentIndex == stageImage.length - 1) {    
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
        
                })
                
        
                    window.setTimeout(() => {
                    navigate("/experience")
                }, 700)
                window.setTimeout(() => {
                    this.setState({
                        tAnim:'',
                        hAnim:'',
                    })
                }, 1400)
            
        
        }
 
        return this.setState({
            currentIndex: currentIndex + 1,

        });
    };

    prevIndex = () => {
        const { stageImage, currentIndex } = this.state;
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
                    headerTransition: 'headerTransHome'
                })
        
                window.setTimeout(() => {
                    navigate("/")
                    this.setState({headerS: '', slide: '', row: '', navMenu: '', nav: ''})
                }, 1500)

            return this.setState({
                currentIndex: 0,
                stageImage: -1,
            });
        }
 
        return this.setState({
            currentIndex: currentIndex - 1
        });
    };

    componentDidMount = () => {

        let data = this
            .props
            .data

            this
            .setState({
                headerS: data.headerS,
                portfolio: data.portfolio,
                row: data.row,
                mainNav: data.mainNav,
                heroblock: data.heroblock,
                experience: data.experience,
                home: data.home,
                slide: data.slide,
                nav: data.nav,
                hAnim: data.hAnim,
                tAnim: data.tAnim,

                colTwoBg: 'colBlack',
                headerTransition: 'headerTransWork fade-in'
            })

    }

    navHome = (e) => {
        e.preventDefault();

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
            headerTransition: 'headerTransHome fade-out',
            currentIndex:-1
        })

        window.setTimeout(() => {
            navigate("/")
            this.setState({headerS: '', slide: '', row: '', navMenu: '', nav: ''})
        }, 1500)
    }

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
            home,
            portfolio,
            row,
            slide,
            heroblock,
            experience,
            navMenu,
            blackbar,
            headerTransition,
            colTwoBg,
            vScroller
        } = this.state;

        let {hAnim, tAnim} = this.props.data;

        const {stageImage,currentIndex } = this.state;




        return (
            <> < CustomView condition = {
                browserName != "Firefox" && isBrowser
            } > <container className="pWrap">

                <div className={"navMenu P " + navMenu}>

                    <div className="navlist P">
                        <h2 onClick={this.navHome}>HOME NAV</h2>
                    </div>
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
                            <div className={"col c2 "+stageImage[currentIndex]+" "+colTwoBg} >
                                <div className="ui gone"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className={"headerSection pHeaderSection stageZero "+stageImage[currentIndex]}>
                    <div className="header pHeader">
                        <div className="hero">
                            <div className={"col c1 " + headerTransition}>
                                <div onClick={this.navHome} className={"heroblock"}>
                                    <div className="heading">
                                    
                                        <h1>Mitchells Joinery</h1>
                                    </div>
                                    <div>
                                        <p>
                                        The team over at Mitchell's Joinery required a new brand design along with a website upgrade to a more modern and intuitive UX design. Mitchell's Joinery main focus was on the marine industry.</p><p>The new logo and website required a more premium design along with a more logical catagory / navigation hirechy.

</p>
                                    </div>
                                    <div>
                                        <h2>Research<br></br>Brand Design<br></br>Site Design</h2>
                                    </div>
                                </div>
                            </div>
                            <div className={"col c2 "+stageImage[currentIndex]+" "+colTwoBg} >
                                <div className="ui gone"></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <div className={"col c2 "+stageImage[currentIndex]+" "+colTwoBg} >
                                <div className="ui gone"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
               <ReactScrollWheelHandler
                    upHandler={this.prevIndex}
                    downHandler={this.nextIndex}
                    className={"vScroller "+vScroller}
                    customStyle={{
                        // width: "100%",
                        // height: "100vh",
                        transform:"rotate(-20deg) scale(1) translateY(-"+currentIndex+"00vh)",
                        transformOrigin:"top left",
                       

                    }}
                >
                <section className={"pSection fade-in"}>
                    <row className="row1">
                        <blurb className={"eText " + tAnim}>
                            <div className={"webWork " + tAnim}>
                                <a href="//mitchellsjoinery.co.nz/" target="_blank">
                                    <div className="webImage mj"></div>
                                </a>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block>
                                <h1 className={"workHeading " + hAnim}>Web Work</h1>
                                <div class={"scroll-downs " + tAnim}>
                                    <div class="mousey">
                                        <div class="scrollerAnim"></div>
                                    </div>
                                    <div class="arrow arrow-first"></div>
                                </div>
                            </block>

                            <text>
                                <imgblock className={tAnim}><img src={mjlogo}/></imgblock>
                            </text>

                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText " + tAnim}>
                            <div className={"webWork " + tAnim}>
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
                        <blurb className={"eText " + tAnim}>
                            <div className={"webWork " + tAnim}>
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
                        <blurb className={"eText " + tAnim}>
                            <div className={"webWork " + tAnim}>
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
                        <blurb className={"eText " + tAnim}>
                            <div className={"webWork " + tAnim}>
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
                        <blurb className={"eText " + tAnim}>
                            <div className={"printWork " + tAnim}>
                                <div className="webImage mglogo"></div>
                            </div>
                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block>
                                <h1 className={"skillHeading " + hAnim}>Print Work</h1>
                            </block>
                            <text>
                                <imgblock><img src={mglogo}/></imgblock>
                            </text>
                
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>
                    <row className="row1">
                        <blurb className={"eText " + tAnim}>
                            <div className={"printWork " + tAnim}>
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
                        <blurb className={"eText " + tAnim}>
                            <div className={"printWork " + tAnim}>
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
                {/* <section className={"pSection"}>

                    <row className="row1">
                        <blurb className={"eText " + tAnim}>
                            <div className={"printWork " + tAnim}>
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
                        <blurb className={"eText " + tAnim}>
                            <div className={"printWork " + tAnim}>
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
                
                <HorizontalScroll
                    reverseScroll={true}
                    config={{
                        stiffness: 3,
                        damping: 3
                    }}
                    className={"work " + experience}
                    animValues={1}>

                <section className={"pSection"}>

                    <row className={"eRow1"}>
                        <blurb className={"eText " + tAnim}>
                            <block></block>

                        </blurb>
                    </row>
                    <row className="eRow2">
                        <itemheading>
                            <block></block>

                            <block>
                                <h1 className={"skillHeading " + hAnim}>Experience</h1>
                            </block>

                            <text>
                                <block></block>
                            </text>

                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="eRow1">
                        <blurb className={"eText " + tAnim}>

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
                        <itemheading className={"hText " + tAnim}>
                            <text>
                                <h4>Technical Knowledge</h4>
                                HTML / CSS, SCSS<br/>React, Jquery & Javascript<br/>
                                WordPress CMS & Magento CMS<br/>
                                3D Modeling & Rendering
                                <br/>
                                Windows & MAC OS Operator
                                <br/>Computer Assembly Procedures<br/>
                                Technical Configuration.
                            </text>
                            <text>
                                <h4>Web & UX Applications</h4>
                                Visual Studio Code<br/>Sublime<br/>Sketch<br/>Adobe XD<br/>Github
                            </text>
                            <text className="skills"></text>
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="eRow1">
                        <blurb className={"eText " + tAnim}>

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
                        <itemheading className={"hText " + tAnim}>
                            <text>
                                <h4>Print & Rendering Applications</h4>
                                Adobe Photoshop<br/>Adobe Illustrator<br/>Adobe Indesign<br/>Adobe Animate<br/>Adobe Premiere<br/>Google Sketchup
                            </text>
                            <text></text>
                            <text className="skills"></text>
                        </itemheading>
                    </row>
                </section>
                <section className={"pSection"}>

                    <row className="eRow1">
                        <blurb className={"eText " + tAnim}>

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

                <section className={"pSection"}>

                    <row className="eRow1">
                        <blurb className={"eText " + tAnim}>

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
                <section className={"pSection"}>

                    <row className="eRow1">
                        <blurb className={"eText " + tAnim}>

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
                <section className={"pSection"}>

                    <row className="row1">
                        <formpos>
                            <block></block>
                            <text>

                                <form
                                    className={"myForm " + tAnim}
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
                    <row className="row2">
                        <itemheading>
                            <block></block>
                            <text></text>
                            <text className="skills">
                                <h1></h1>
                            </text>
                        </itemheading>
                    </row>
                </section>
                </HorizontalScroll>

                {/* </scroller> */}
                <div className={"blackBar " + blackbar}></div>
                

            </container>
        </CustomView>

        {/* <CustomView condition={browserName === "Firefox" || isMobile}>
            <container className="pWrap">

                <div className={"pheaderSection "}>
                    <div className="header">
                        <div className={"hero " + heroblock}>
                            <div className="col c1">
                                <div className="heroblock">
                                    <div className={"heading " + home + " one"}><img src={logo} alt=""/>
                                        <h1>Print &<br/>Digital<br/>Design</h1>
                                    </div>
                                    <div className={home + " three"}>
                                        <p>
                                            Creative digital &amp;<br/>brand experiences.<br/>My aim is to create
                                            <br/>functional, professional<br/>&amp; eye catching design.</p>
                                    </div>
                                    <div className={home + " five"}>
                                        <h2>Sam Robertson</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col c2"></div>
                        </div>
                    </div>
                </div>

                <HorizontalScroller className="scroller" invert="invert" sensibility={200}>

                    <div className="headerSection pHeaderSection">
                        <div className="header pHeader">
                            <div className={"hero " + portfolio}>
                                <div className="col c1">
                                    <div onClick={this.navHome} className="heroblock">
                                        <div className="heading"><img src={logo} alt=""/>
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
                                <div className="col c2">
                                    <div className="ui gone"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className={"pSection " + row}>
                        <row className="row1"></row>
                        <row className="row2"></row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage mj"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>Mitchell's Joinery</h1>
                                    <p>Market Research / Brand Design / Site Design</p>
                                    <p>The team over at Mitchell's Joinery required a new brand design along with a
                                        website upgrade to a more modern and intuitive UX design. Mitchell's Joinery
                                        main focus was on the marine industry. The new logo and website required a more
                                        premium design along with a more logical catagory / navigation order.</p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block>
                                    <h1 className="workHeading">Web Work</h1>
                                </block>
                                <text className="skills">
                                    <h1>Front-end Development</h1>
                                </text>
                                <text>
                                    <imgblock className={tAnim}><img src={mjlogo}/></imgblock>
                                </text>

                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage tens"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>10 Squares Cabins</h1>
                                    <p>Brand Design / Site Design / Drafting & Rendering</p>
                                    <p>10 Squares Cabins is a new manufacturer of small cabins & sleep-outs that fit
                                        within the 10m² council requirements. They required a brand-id along with a
                                        website showcasing the quality and process that goes into building their kitset
                                        cabins. I worked closely with the 10 Squares team to create a clean &
                                        informative website. Using renders I was able to show the customer the build
                                        process from start to finish. I continued work for them doing drafting & render
                                        work for customers who needed custom builds.</p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text>
                                    <imgblock className={tAnim}><img src={tenslogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>Wordpress / Magento CMS</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage gubba"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>Gubba Sheds</h1>
                                    <p>Site Design</p>
                                    <p>Gubba required a site design for their garden shed range. They wanted their
                                        website to easily display their full range & the amount of customisations
                                        possible. To do this I would develop a functional shed configurator which I
                                        integrated with an online ecommerce platform. This made it possible for
                                        customers to resize, change colour, add doors, windows & add a variety of other
                                        extras, it also gave them ability to add assembly service to their order. The
                                        shed configurator has been a great point of difference between Gubba Garden
                                        Sheds & their competitors.</p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text>
                                    <imgblock className={tAnim}><img src={gubbalogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>HTML Markup / CSS / SCSS</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage py"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>Playtionery</h1>
                                    <p>Logo / Website</p>
                                    <p>The client wanted an e-commerce website that was fun and playful which would
                                        portray their stationery well.</p>
                                    <p>I designed the navigation to be as simple as possible making it child’s play
                                        to use and navigate. Making the buttons directly link through to the product
                                        category pages without any dropdowns made it really easy to use.
                                    </p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text>
                                    <imgblock className={tAnim}><img src={pylogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>Eccommerce Solutions</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage heli"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>heliboard.nz</h1>
                                    <p>Website</p>
                                    <p>The team at heliboard nz needed a redesign of their website to look more
                                        modern & eye catching.</p>
                                    <p>They wanted the website to be designed for results, they were getting the
                                        traffic but not the conversion rate. I came up with a solution by designing more
                                        of a one page site with the most important features at the top that customers
                                        would be interested in. By creating an eye catching call to action & displaying
                                        the instructors directly below, heliboard.nz has had a large improvement in
                                        conversions from the booking system.
                                    </p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text className="skills1">
                                    <h1>Javascript / Jquery / React</h1>
                                </text>

                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage mglogo"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>Mangawhai Village Market</h1>
                                    <p>Logo / Brand Design</p>
                                    <p>The Mangawhai Village Market needed a brand for their ever growing markets I
                                        discussed with them design concepts & we came up with the idea to include a
                                        local bird, the Fairy Tern, which is a distinctive bird that locals will
                                        recognize.</p>
                                    <p>I really enjoyed working on this brand, something a bit different.</p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block>
                                    <h1>Print Work</h1>
                                </block>
                                <text>
                                    <imgblock className="mgLogoBlock"><img src={mglogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>Adobe Creative Suite</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage cc"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>The Cabin Crew</h1>
                                    <p>Logo / Brand Design</p>
                                    <p>The Cabin Crew team required a logo for their newly formed building company.
                                        The owner wanted a brand that meant something to him, but also had a
                                        contemporary and professional design to reflect the modern dwellings they were
                                        building.</p>
                                    <p>I used red & black colours to show his Maori heritage and a wave design to
                                        reflect one of his passions in life, surfing. I enjoyed working with him to come
                                        up with a design we were both happy with.

                                    </p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text>
                                    <imgblock className="mgLogoBlock"><img src={cclogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>Photoshop / Illustrator</h1>
                                </text>

                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage autposter"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>AUT Poster</h1>
                                    <p>Poster</p>
                                    <p>For this assignment I was required to create a poster advertising Auckland
                                        University of Technology’s Diploma in Graphic Communication.</p>
                                    <p>I wanted to design something that really caught the eye, was simple & not too
                                        obvious. I feel I achieved this by only using two colours & having the finer
                                        details large enough to read but small enough to take a second look.</p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text>
                                    <imgblock className="mgLogoBlock"><img src={autlogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>Indesign / Sketch</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage gcpackage"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>Good Coffee</h1>
                                    <p>Coffee Packaging Brand</p>
                                    <p>The brief for this assignment was to produce a brand and packaging design for
                                        a New Zealand roasting company called GOOD Coffee.</p>
                                    <p>They wanted their brand to appeal to the average New Zealander and the design
                                        to reflect a medium price point. The subtle green koru patterns at the base of
                                        the pack work with the rest of the design to portray a New Zealand feel.</p>

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text>
                                    <imgblock className="mgLogoBlock"><img src={gclogo}/></imgblock>
                                </text>
                                <text className="skills">
                                    <h1>Google Sketch Design</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>
                        <div className={"webWork " + tAnim}>
                            <div className="webImage renders"></div>
                        </div>
                        <row className="row1">
                            <blurb className={"eText " + tAnim}>
                                <block></block>
                                <text>
                                    <h1>13b Design</h1>
                                    <p>Renders & Floor Plans</p>
                                    <p>These renders & floor plans were created for a for a draftsman so they could
                                        show the client and give them a better idea and visual of what their finished
                                        home will look like.</p>
                                    <p>I worked with the client through the design process, providing different
                                        cladding, scructure, design options & made changes along the way to suit</p>
                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text></text>
                                <text className="skills1">
                                    <h1>Draft Work & Rendering</h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>

                    <section className={"pSection"}>

                        <row className={"eRow1"}>
                            <blurb className={"eText " + tAnim}>
                                <block></block>

                            </blurb>
                        </row>
                        <row className="eRow2">
                            <itemheading>
                                <block></block>

                                <block>
                                    <h1>Experience</h1>
                                </block>

                                <text>
                                    <block></block>
                                </text>

                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>

                        <row className="eRow1">
                            <blurb className={"eText " + tAnim}>

                                <text>
                                    <h1>Yoobee Web & UX Development</h1>
                                    <p>Level 6 / 2019</p>
                                    <p>This one year diploma has been a great refresher, gave me a whole range of
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
                            <itemheading>
                                <text>
                                    <h4>Technical Knowledge</h4>
                                    HTML / CSS, SCSS<br/>React, Jquery & Javascript<br/>
                                    WordPress CMS & Magento CMS<br/>
                                    3D Modeling & Rendering
                                    <br/>
                                    Windows & MAC OS Operator
                                    <br/>Computer Assembly Procedures<br/>
                                    Technical Configuration.
                                </text>
                                <text>
                                    <h4>Web & UX Applications</h4>
                                    Visual Studio Code<br/>Sublime<br/>Sketch<br/>Adobe XD<br/>Github
                                </text>
                                <text className="skills"></text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>

                        <row className="eRow1">
                            <blurb className={"eText " + tAnim}>

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
                            <itemheading>
                                <text>
                                    <h4>Print & Rendering Applications</h4>
                                    Adobe Photoshop<br/>Adobe Illustrator<br/>Adobe Indesign<br/>Adobe Animate<br/>Adobe Premiere<br/>Google Sketchup
                                </text>
                                <text></text>
                                <text className="skills"></text>
                            </itemheading>
                        </row>
                    </section>
                    <section className={"pSection"}>

                        <row className="eRow1">
                            <blurb className={"eText " + tAnim}>

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

                    <section className={"pSection"}>

                        <row className="eRow1">
                            <blurb className={"eText " + tAnim}>

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
                    <section className={"pSection"}>

                        <row className="eRow1">
                            <blurb className={"eText " + tAnim}>

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
                                    <h1>samrob.nz@gmail.com</h1>
                                </block>
                                <text></text>
                                <text className="skills1"></text>
                            </itemheading>
                        </row>

                    </section>
                    <section className={"pSection"}>

                        <row className="row1">
                            <formpos>
                                <block></block>
                                <text>
                                    <form
                                        className="myForm"
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
                        <row className="row2">
                            <itemheading>
                                <block></block>
                                <text></text>
                                <text className="skills">
                                    <h1></h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>

                </HorizontalScroller>

            </container>
        </CustomView> */}

    </>

        )
    }
}

export default MyWork;