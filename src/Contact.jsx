import React, {Component} from 'react';
import {navigate, Link} from "@reach/router";
import HorizontalScroll from 'react-scroll-horizontal';
import normalizeWheel from 'normalize-wheel';
import HorizontalScroller from 'react-horizontal-scroll-container';
import ReactScrollWheelHandler from "react-scroll-wheel-handler";


import {isBrowser, isMobile, CustomView, browserName} from "react-device-detect";


document.addEventListener('mousewheel', function (event) {
    const normalized = normalizeWheel(event);

    console.log(normalized.pixelX, normalized.pixelY);
});

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            portfolio: '',

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
            stageState:'stageF-in',
            stageNum: [
                'cStageOne','cStageTwo','cStageThree',
            ]
        }

    }

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

                stageState:'stageF-in',
                colTwoBg: 'colBlack',
            })

    }
    
    

    nextIndex = () => {
        const { stageNum, currentIndex } = this.state;
            this.setState({
                currentIndex: currentIndex + 1,
            });
            setTimeout(() => {
                    navigate("/")
             }, 1500)
    };

 

    prevIndex = (e) => {
        let navExp = this.navExpDirect
        navExp(e);
    };





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

        setTimeout(() => {
            navigate("/")
            this.setState({headerS: '', slide: '', row: '', navMenu: '', nav: ''})
        }, 1500)
    }


    navExpDirect = (e) => {
        e.preventDefault();
        
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
        

            setTimeout(() => {
            navigate("/experience")
        }, 700)
        setTimeout(() => {
            this.setState({
                tAnim:'',
                hAnim:'',
            })
        }, 1400)
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
            hScroller,
            stageState,
        } = this.state;

        let {hAnim, tAnim} = this.props.data;
        // 

        const {stageNum,currentIndex } = this.state;

        let expLineStyle = {
            width:+currentIndex+"75vw"
        }
        return (
            <>
              <ReactScrollWheelHandler
                    upHandler={this.prevIndex}
                    downHandler={this.nextIndex}
                    className={"hScroller "+hScroller}
                    customStyle={{
                        // width: "100%",
                        // height: "100vh",
                        // overflow:"hidden",
                        transform:"rotate(0deg) scale(1) translateX(-"+currentIndex+"00vw)",
                        transformOrigin:"top left",
                       
                    }}
                >
   
<section className={"eSection"}>

<row className="eRow1">
    <formpos>
        
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
<section className="eSection">
                   <div className="headerSection pHeaderSection">
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
        <div className={"col c2 "} >
            <div className="ui gone"></div>
        </div>
    </div>
</div>
</div>
</section>

</ReactScrollWheelHandler>
</>
        )
    }
}

export default Contact;