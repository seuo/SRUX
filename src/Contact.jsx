import React, {Component} from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import normalizeWheel from 'normalize-wheel';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

  import {
    navigate,
} from "@reach/router";

import logo from './assets/sr-logo.png';

document.addEventListener('mousewheel', function (event) {
    const normalized = normalizeWheel(event);

    console.log(normalized.pixelX, normalized.pixelY);
});

class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            portfolio: '',
            row: '',
            mainNav: 'closeNav',
            heroblock: 'slide-in-fade',
            experience: '',
            home: '',
            slide: '',
            nav: '',
        }

    }
    
    

    componentDidMount = () => {
        
        let data = this.props.data
         
         this.setState({
         headerS:data.headerS,
         portfolio:data.portfolio,
         row:data.row,
         mainNav:data.mainNav,
         heroblock:data.heroblock,
         experience:data.experience,
         home:data.home,
         slide:data.slide,
         nav:data.nav,
         blackbar:data.blackbar,
      })
          
      }


    //         
    //         .then(res => {
    //             this.setState({products: res.data})
    //         })
    // }

   



    navHome = (e) => {
        e.preventDefault();

        this.setState({
            experience: 'exp',
            home: "active",
            portfolio: "base",
            heroblock: "slide-out",
            row: "slide-out-row",
            slide: "slide-down",
            nav: '',
            navMenu: 'fade-out',
            blackbar: 'gone',
        })

        window.setTimeout(() => {
            navigate("/")
            this.setState({headerS: '', slide: '', row: '', navMenu: '',nav: '',})
        }, 1500)
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
            blackbar
        } = this.state;


        return (
            <>
            <BrowserView>
            <container className="pWrap">
            <div className={"navMenu P "+navMenu}>
                            
                            <div className="navlist P">
                                <h2 onClick={this.navHome}>HOME NAV</h2>     
                            </div>
                            </div>
                <div className={"pHeaderSection "}>
                    <div className="header">
                        <div className={"hero " + heroblock}>
                            <div className="col c1">
                                <div className="heroblock" onClick={this.navHome}>
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

                <HorizontalScroll
                    // pageLock      = { bool }
                    reverseScroll={true}
                    // style         = { object }
                    config={{
                        stiffness: 3,
                        damping: 3
                    }} className={"work " + experience} animValues={1}>

                    <div className="headerSection eHeaderSection">
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
                                    <div className="ui gone">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section className={"pSection " + row}>

                    <row className={"row1"}>
                        <blurb>
                            <block></block>

                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                        <block>
                                    <div class="scroll-downs">
                                    <div class="mousey">
                                        <div class="scrollerAnim"></div>
                                    </div>
                                    <div class="arrow arrow-first"></div>
                                    </div>
                            </block>

                            <text>
                                <block></block>
                            </text>

                        </itemheading>
                    </row>
                    </section>
                    <section  className={"pSection " + slide}>

                        <row className="eRow1">
                        <blurb>

                            <text>
                                <h1>Sam Robertson</h1>
                                <p></p>
                                <p>I’m a frontend developer based in Auckland, New Zealand.</p><p>I have a passion for design & creating high quality, functional web solutions.</p>
                                <p>Get in touch if you have a job / project you need help with!</p>

                            </text>
                            </blurb>
                        </row>
                        <row className="eRow2">
                            <itemheading>
                                <block>
                                    <h1 className="workHeading">samrob.nz@gmail.com</h1>
                                </block>

                                <text></text>
                                <text className="skills1"></text>
                            </itemheading>
                        </row>

                        </section>
                    <section className={"pSection " + slide}>

                        <row className="row1">
                            <formpos>
                                <block></block>
                                <text>
                                <form className="myForm" action="https://formspree.io/srux.web@gmail.com" method="POST" >
                                    <h1>Get in touch</h1>
                                    <formgrp>
                                        <input type="text" placeholder="Name" name="name" required/>
                                        <input type="email" placeholder="Email" name="email" required/>
                                    </formgrp>
                                    <formgrp>
                                        <input type="text" placeholder="Subject" name="subject" required/>
                                        <input type="tel"  placeholder="Phone (optional)" name="name"/>
                                    </formgrp>
                                    
                                    <textarea className="message" type="textarea" placeholder="Message" name="message" required/>
                                   
                                    <input className="submit" value="Send" type="submit"/>
                                </form>

                                </text>
                            </formpos>
                        </row>
                        <row className="row2">
                            <itemheading>
                            <block>
                                    <h1 className="contactHeading">Creative digital & brand experiences</h1>
                                </block>
                                <text></text>
                                <text className="skills">
                                  
                                </text>
                            </itemheading>
                        </row>
                    </section>
                    <div className={"blackBar " +blackbar}></div>
                </HorizontalScroll>
 
            </container>
            </BrowserView>

                <MobileView>
                <container className="pWrap">
                <div className={"pHeaderSection "}>
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

                <scroller className="scroller">

                    <div className="headerSection eHeaderSection">
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
                                    <div className="ui gone">
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <section className={"pSection " + row}>

                    <row className={"row1"}>
                        <blurb>
                            <block></block>

                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                        <block>
                                  
                                </block>

                            <text>
                                <block></block>
                            </text>

                        </itemheading>
                    </row>
                    </section>
                    <section className={"pSection " + row}>

                    <row className={"row1"}>
                        <blurb>
                            <block></block>

                        </blurb>
                    </row>
                    <row className="row2">
                        <itemheading>
                            <block>
                                  
                            </block>


                            <text>
                                <block></block>
                            </text>

                        </itemheading>
                    </row>
                    </section>
                    <section  className={"pSection " + slide}>

                        <row className="eRow1">
                        <blurb>

                            <text>
                                <h1>Sam Robertson</h1>
                                <p></p>
                                <p>I’m a frontend developer based in Auckland, New Zealand.</p><p>I have a passion for design & creating high quality, functional web solutions.</p>
                                <p>Get in touch if you have a job / project you need help with!</p>

                            </text>
                            </blurb>
                        </row>
                        <row className="eRow2">
                            <itemheading>
                                <block>
                                    <h1 className="workHeading">samrob.nz@gmail.com</h1>
                                </block>

                                <text></text>
                                <text className="skills1"></text>
                            </itemheading>
                        </row>

                        </section>
                    <section className={"pSection " + slide}>

                        <row className="row1">
                        <formpos>
                                <block></block>
                                <text>
                                <form className="myForm" action="https://formspree.io/srux.web@gmail.com" method="POST" >
                                    <h1>Get in touch</h1>
                                    <formgrp>
                                        <input type="text" placeholder="Name" name="name" required/>
                                        <input type="email" placeholder="Email" name="email" required/>
                                    </formgrp>
                                    <formgrp>
                                        <input type="text" placeholder="Subject" name="subject" required/>
                                        <input type="tel"  placeholder="Phone (optional)" name="name"/>
                                    </formgrp>
                                    
                                    <textarea className="message" type="textarea" placeholder="Message" name="message" required/>
                                   
                                    <input className="submit" value="Send" type="submit"/>
                                </form>

                                </text>
                            </formpos>
                        </row>
                        <row className="row2">
                            <itemheading>
 
                                <text></text>
                                <text className="skills">
                                  
                                </text>
                            </itemheading>
                        </row>
                    </section>

                    </scroller>
 
            </container>
                    
                </MobileView>
</>
        )
    }
}

export default Contact;