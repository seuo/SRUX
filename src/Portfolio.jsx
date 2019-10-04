import React, {Component} from 'react';
import {navigate,} from "@reach/router";
import HorizontalScroll from 'react-scroll-horizontal';
import normalizeWheel from 'normalize-wheel';


import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

import mjlogo from './assets/mitchells-joinery-logo.png';
import tenslogo from './assets/10squares-logo.png';
import gubbalogo from './assets/gubba-logo.png';
import pylogo from './assets/playtionery-logo.jpg';
import mglogo from './assets/mg-logo.jpg';
import cclogo from './assets/cc-logo.jpg';
import autlogo from './assets/aut.jpg';
import gclogo from './assets/gc-logo.jpg';
import logo from './assets/sr-logo.png';

document.addEventListener('mousewheel', function (event) {
    const normalized = normalizeWheel(event);

    console.log(normalized.pixelX, normalized.pixelY);
});

class Portfolio extends Component {
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
            nav: ''
        }
    }

    componentDidMount = () => {

        this.setState({headerS: 'none'})

        let experience = this.props.experience;
        this.setState({experience: experience})
        console.log(experience)

    }

    handleHover = (e) => {
        e.preventDefault();
        console.log('over')
        this.setState({

            home: '',

        })
        e.preventDefault();
        navigate("/experiences")

    }

    render() {
        let {
            home,
            portfolio,
            row,
            slide,
            heroblock,
            experience
        } = this.props.data;
        let handleHover = this
            .handleHover
            console
            .log(handleHover);


        return (
            <>

            <BrowserView>
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

                    <HorizontalScroll
                        reverseScroll={true}
                        config={{
                            stiffness: 3,
                            damping: 3
                        }} className={"work " + experience} animValues={1}>
                    {/* <scroller className="scroller"> */}
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
                                        <div className="ui gone">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className={"pSection " + row}>
                            <row className="row1"></row>
                            <row className="row2"></row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage mj"></div>
                            </div>
                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                        <h1>Mitchell's Joinery</h1>
                                        <p>Market Research / Brand Design / Site Design</p>
                                        The team over at Mitchell's Joinery required a new brand design along with a
                                        website upgrade to a more modern and intuitive UX design. Mitchell's Joinery
                                        main focus was on the marine industry. The new logo and website required a more
                                        premium design along with a more logical catagory / navigation hirechy.

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
                                        <imgblock><img src={mjlogo}/></imgblock>
                                    </text>


                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage tens"></div>
                            </div>
                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                        <h1>10 Squares Cabins</h1>
                                        <p>Brand Design / Site Design / Drafting & Rendering</p>
                                        10 Squares Cabins is a new manufacturer of small cabins & sleep-outs that fit
                                        within the 10m² council requirements. They required a brand-id along with a
                                        website showcasing the quality and process that goes into building their kitset
                                        cabins. I worked closely with the 10 Squares team to create a clean &
                                        informative website. Using renders I was able to show the customer the build
                                        process from start to finish. I continued work for them doing drafting & render
                                        work for customers who needed custom builds.

                                    </text>
                                </blurb>
                            </row>
                            <row className="row2">
                                <itemheading>
                                    <block></block>
                                    <text>
                                        <imgblock><img src={tenslogo}/></imgblock>
                                    </text>
                                    <text className="skills">
                                        <h1>Wordpress / Magento CMS</h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage gubba"></div>
                            </div>
                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                        <h1>Gubba Sheds</h1>
                                        <p>Site Design</p>
                                        Gubba required a site design for their garden shed range. They wanted their
                                        website to easily display their full range & the amount of customisations
                                        possible. To do this I would develop a functional shed configurator which I
                                        integrated with an online ecommerce platform. This made it possible for
                                        customers to resize, change colour, add doors, windows & add a variety of other
                                        extras, it also gave them ability to add assembly service to their order. The
                                        shed configurator has been a great point of difference between Gubba Garden
                                        Sheds & their competitors.

                                    </text>
                                </blurb>
                            </row>
                            <row className="row2">
                                <itemheading>
                                    <block></block>
                                    <text>
                                        <imgblock><img src={gubbalogo}/></imgblock>
                                    </text>
                                    <text className="skills">
                                        <h1>HTML Markup / CSS / SCSS</h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage py"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                                        <imgblock><img src={pylogo}/></imgblock>
                                    </text>
                                    <text className="skills">
                                        <h1>Eccommerce Solutions</h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage heli"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage mglogo"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage cc"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage autposter"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage gcpackage"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage renders"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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

                        <section className={"pSection " + slide}>

                            <row className={"eRow1"}>
                                <blurb>
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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

                                    <text>
                                        <h1>Yoobee Web & UX Development</h1>
                                        <p>Level 6 / 2019</p>
                                        <p>This one year diploma has been a great refresher, gave me whole range of new
                                            skills.
                                        </p>
                                        <p>The course was an intensive full time course covering design, markup,
                                            styling, coding, cms development as well as agile group work. I also got a great
                                            introduction to coding, learning Javascript, Jquery & React.
                                        </p>
                                        <p>Using these all these skills I was able to develop a new tier of web sites &
                                            applications.</p>
                                        <p>UX & Web Design / Javascript, Jquery, React, CMS Development</p>

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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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
                                        <p>When I wasn't working on design, I was learning new skills in other areas.
                                            With the position being an In-house role I also took on a variety of extra work,
                                            whether it was for the sales team, taking calls for customer service or being
                                            their IT guy. There was a lot of variety at Gubba, I enjoyed helping out where
                                            ever I could and enjoyed working with the Gubba team.</p>
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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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

                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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
                        <section className={"pSection " + slide}>

                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                    

                                    </text>
                                </blurb>
                            </row>
                            <row className="row2">
                                <itemheading>
                                    <block>
                                        
                                    </block>
                                    <text></text>
                                    <text className="skills">
                                        <h1></h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                    {/* </scroller> */}
                    </HorizontalScroll>

                    </container>
            </BrowserView>

            <MobileView>
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


                    <scroller className="scroller">
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
                                        <div className="ui gone">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <section className={"pSection " + row}>
                            <row className="row1"></row>
                            <row className="row2"></row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage mj"></div>
                            </div>
                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                        <h1>Mitchell's Joinery</h1>
                                        <p>Market Research / Brand Design / Site Design</p>
                                        The team over at Mitchell's Joinery required a new brand design along with a
                                        website upgrade to a more modern and intuitive UX design. Mitchell's Joinery
                                        main focus was on the marine industry. The new logo and website required a more
                                        premium design along with a more logical catagory / navigation hirechy.

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
                                        <imgblock><img src={mjlogo}/></imgblock>
                                    </text>


                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage tens"></div>
                            </div>
                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                        <h1>10 Squares Cabins</h1>
                                        <p>Brand Design / Site Design / Drafting & Rendering</p>
                                        10 Squares Cabins is a new manufacturer of small cabins & sleep-outs that fit
                                        within the 10m² council requirements. They required a brand-id along with a
                                        website showcasing the quality and process that goes into building their kitset
                                        cabins. I worked closely with the 10 Squares team to create a clean &
                                        informative website. Using renders I was able to show the customer the build
                                        process from start to finish. I continued work for them doing drafting & render
                                        work for customers who needed custom builds.

                                    </text>
                                </blurb>
                            </row>
                            <row className="row2">
                                <itemheading>
                                    <block></block>
                                    <text>
                                        <imgblock><img src={tenslogo}/></imgblock>
                                    </text>
                                    <text className="skills">
                                        <h1>Wordpress / Magento CMS</h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage gubba"></div>
                            </div>
                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                        <h1>Gubba Sheds</h1>
                                        <p>Site Design</p>
                                        Gubba required a site design for their garden shed range. They wanted their
                                        website to easily display their full range & the amount of customisations
                                        possible. To do this I would develop a functional shed configurator which I
                                        integrated with an online ecommerce platform. This made it possible for
                                        customers to resize, change colour, add doors, windows & add a variety of other
                                        extras, it also gave them ability to add assembly service to their order. The
                                        shed configurator has been a great point of difference between Gubba Garden
                                        Sheds & their competitors.

                                    </text>
                                </blurb>
                            </row>
                            <row className="row2">
                                <itemheading>
                                    <block></block>
                                    <text>
                                        <imgblock><img src={gubbalogo}/></imgblock>
                                    </text>
                                    <text className="skills">
                                        <h1>HTML Markup / CSS / SCSS</h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage py"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                                        <imgblock><img src={pylogo}/></imgblock>
                                    </text>
                                    <text className="skills">
                                        <h1>Eccommerce Solutions</h1>
                                    </text>
                                </itemheading>
                            </row>
                        </section>
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage heli"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage mglogo"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage cc"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage autposter"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage gcpackage"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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
                        <section className={"pSection " + slide}>
                            <div className="webWork">
                                <div className="webImage renders"></div>
                            </div>
                            <row className="row1">
                                <blurb>
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

                        <section className={"pSection " + slide}>

                            <row className={"eRow1"}>
                                <blurb>
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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

                                    <text>
                                        <h1>Yoobee Web & UX Development</h1>
                                        <p>Level 6 / 2019</p>
                                        <p>This one year diploma has been a great refresher, gave me whole range of new
                                            skills.
                                        </p>
                                        <p>The course was an intensive full time course covering design, markup,
                                            styling, coding, cms development as well as agile group work. I also got a great
                                            introduction to coding, learning Javascript, Jquery & React.
                                        </p>
                                        <p>Using these all these skills I was able to develop a new tier of web sites &
                                            applications.</p>
                                        <p>UX & Web Design / Javascript, Jquery, React, CMS Development</p>

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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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
                                        <p>When I wasn't working on design, I was learning new skills in other areas.
                                            With the position being an In-house role I also took on a variety of extra work,
                                            whether it was for the sales team, taking calls for customer service or being
                                            their IT guy. There was a lot of variety at Gubba, I enjoyed helping out where
                                            ever I could and enjoyed working with the Gubba team.</p>
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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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

                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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
                        <section className={"pSection " + slide}>

                            <row className="eRow1">
                                <blurb>

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
                        <section className={"pSection " + slide}>

                            <row className="row1">
                                <blurb>
                                    <block></block>
                                    <text>
                                    

                                    </text>
                                </blurb>
                            </row>
                            <row className="row2">
                                <itemheading>
                                    <block>
                                        
                                    </block>
                                    <text></text>
                                    <text className="skills">
                                        <h1></h1>
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

export default Portfolio;