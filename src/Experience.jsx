import React, {Component} from 'react';
import {
    Router,
    Link,
    Redirect,
    Location,
    navigate,
    Match
} from "@reach/router";
import HorizontalScroll from 'react-scroll-horizontal';
import normalizeWheel from 'normalize-wheel';

import logo from './assets/sr-logo.png';

document.addEventListener('mousewheel', function (event) {
    const normalized = normalizeWheel(event);

    console.log(normalized.pixelX, normalized.pixelY);
});

class Experience extends Component {
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
                                            Creative digital &amp;<br/>and experiences.<br/>My aim is to create
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
                                                Creative digital &amp;<br/>and experiences.<br/>My aim is to create
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
                                <block></block>

                                <block>
                                    <h1 className="expHeading">Experience</h1>
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
                    <section  className={"pSection " + slide}>

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
                    <section  className={"pSection " + slide}>

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

                    <section  className={"pSection " + slide}>

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
                    <section  className={"pSection " + slide}>

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
                                    <h1 className="workHeading">samrob.nz@gmail.com</h1>
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
                                    <h1 className="workHeading">022 699 2719</h1>
                                </block>
                                <text></text>
                                <text className="skills">
                                    <h1></h1>
                                </text>
                            </itemheading>
                        </row>
                    </section>

                </HorizontalScroll>
                {/* <section className="pSection">
                        <row className="row1">
                        </row>
                        <row className="row2">
                        </row>
                    </section> */
                }
            </container>

        )
    }
}

export default Experience;