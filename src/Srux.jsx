import React, {Component} from 'react';
import {
    Router,
    navigate,
    Match
} from "@reach/router";




import logo from './assets/sr-logo.png';
import Portfolio from './Portfolio';
import Experience from './Experience';
import Contact from './Contact';
import PortfolioImg from './assets/portfolio.png';
import expImg from './assets/experience.png';
import contactImg from './assets/contact.png';

class Srux extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            headerS: '',
            home: '',
            nav: '',
            heroblock: 'slide-in-fade',
            portfolio: 'slide-in',
            row: 'slide-in-row',
            mainNav: 'closeNav',
            slide: 'slide-up',
            navMenu: '',
            experience: '',
            contact:'none',
            blackbar:'',
            bcState:'',
            hAnim:'',
            tAnim:'',
        }
    
    }

    componentDidMount = () => {
            this.setState({
            headerS: '',
            home: 'active',
            nav: '',
            heroblock: 'slide-in-fade',
            portfolio: 'slide-in',
            row: 'slide-in-row',
            mainNav: 'closeNav',
            slide: 'slide-up',
            navMenu: '',
            experience: '',
            contact:'none',
            blackbar:'',
            hAnim:'',
            tAnim:'',

        })

    }

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
            headerS: 'none',
            blackbar:'gone',
            bcState:'',
        })

        window.setTimeout(() => {
            navigate("/")
            this.setState({
                headerS: '', slide: '', row: '',
                nav: '',})
        }, 1500)
    }


    

    navPortfolio = (e) => {
        e.preventDefault();

        this.setState({
            experience: '',
            portfolio: 'slide-in',
            navMenu: 'fade-in',
            nav: 'away',
            home: '',
            heroblock: 'base',
            row: "slide-in-row",
            slide: 'slide-up',
            blackbar:'twodelay',
        })

        window.setTimeout(() => {
 
            this.setState({
                headerS: '',
                home: 'active',
                nav: '',
                heroblock: 'base',
                portfolio: 'slide-in',
                row: 'slide-in-row',
                mainNav: 'closeNav',
                slide: 'slide-up',
                navMenu: '',
                experience: '',
                contact:'none',
            })
            navigate("/portfolio")
        }, 1500)
    }

    navContact = (e) => {
        e.preventDefault();

        this.setState({
            experience: '',
            portfolio: 'slide-in',
            navMenu: 'fade-in',
            nav: 'away',
            home: '',
            heroblock: 'base',
            row: "slide-in-row",
            slide: 'slide-up',
            blackbar:'twodelay',
        })

        window.setTimeout(() => {

            this.setState({
                headerS: '',
                home: 'active',
                nav: '',
                heroblock: 'base',
                portfolio: 'slide-in',
                row: 'slide-in-row',
                mainNav: 'closeNav',
                slide: 'slide-up',
                navMenu: '',
                experience: '',
                contact:'none',
            })
            navigate("/contact")
        }, 1500)
    }


    navExp = (e) => {
        this.setState({
            experience: '',
            portfolio: 'slide-in',
            navMenu: 'fade-in',
            nav: 'away',
            home: '',
            heroblock: 'base',
            row: "slide-in-row",
            slide: 'slide-up',
            blackbar:'twodelay',
        })
        e.preventDefault();
        window.setTimeout(() => {

            this.setState({
                headerS: '',
                home: 'active',
                nav: '',
                heroblock: 'base',
                portfolio: 'slide-in',
                row: 'slide-in-row',
                mainNav: 'closeNav',
                slide: 'slide-up',
                navMenu: '',
                experience: '',
                contact:'none',
            })
            navigate("/experience")
        }, 1500)
    }

    navContactDirect = (e) => {

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
        window.setTimeout(() => {
            navigate("/contact")
            }, 700)
        window.setTimeout(() => {
            this.setState({
                tAnim:'',
                hAnim:'',
            })
        }, 1400)
    }

    navPortfolioDirect = (e) => {
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

        window.setTimeout(() => {
            navigate("/portfolio")
            this.setState({headerS: ''})
        }, 700)
        window.setTimeout(() => {
            this.setState({
                tAnim:'',
                hAnim:'',
            })
        }, 1400)
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



    handleContactShow = (e) => {
        e.preventDefault();
        this.setState({
            contact:'fade-in',
        })
    }

    handleContactHide = (e) => {
        e.preventDefault();
        this.setState({
            contact:'none',
        })
    }




render (){
    let {headerS,home,nav,navMenu,contact,bcState} = this.state;
    console.log(home)



    return (
        <>
                  

                  
     
        <Match path="/">
        {props =>
            props.match ? (
    
        <div className={"headerSection "+headerS}>
            <div className="header">
                <div className="hero">
                    <div className="col c1"><div className="heroblock"><div className={"heading "+home+" one"}><img src={logo} alt=""/><h1>Print &<br/>Digital<br/>Design</h1></div><div className={home+" three"}><p>
                                Creative digital &amp;<br/>brand experiences.<br/>My aim is to create <br/>functional, professional<br/>&amp; eye catching design.</p></div><div className={home+" five"}><h2>Sam Robertson</h2></div>
                    </div>
                        </div>
                            <div className="col c2">
                                <div className={"ui " + nav}>
                                    <div className={"contactinfo "+contact}><p>samrob.nz@gmail.com</p></div>
                                    <svg id="Layer_1" data-name="Layer 1" viewBox="0 0 731.4 803">
                                    <g>
                                        <g id ="contactContainer"  onClick={this.navContact}>                                     
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
                                        
                                        <g id ="cvContainer" onClick={this.navExp}> 
     
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
    
                                        </g><g id ="portfolioContainer" onClick={this.navPortfolio}>
                                            
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
                    ) : (
                        <>
                         {/* <MobileView> */}
                        <div className={"blackCover " +bcState}></div>
                        <div className={"navMenu "+navMenu}>
                            
                        <div className="navlist">
                            <h2 className="zB" onClick={this.navHome}>HOME NAV</h2>
                            <h2 className="z999" onClick={this.navPortfolioDirect}>PORTFOLIO</h2>
                            <h2 className="z999" onClick={this.navExpDirect}>EXPERIENCE</h2>
                            <h2 className="z999" onClick={this.navContactDirect}>CONTACT</h2>       
                        </div>
                        </div>
                        {/* </MobileView> */}
                    </>
                        )
                    }
        </Match>

        <Router>
           <Portfolio path="/portfolio" data={this.state}/>
           <Experience path="/experience" data={this.state}/>
           <Contact path="/contact" data={this.state}/>
        </Router>
        </>
    )
    }
}

export default Srux;