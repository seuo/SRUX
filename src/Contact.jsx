import React, {Component} from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import normalizeWheel from 'normalize-wheel';

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
                            <blurb>
                                <block></block>
                                <text>
                               

                                </text>
                            </blurb>
                        </row>
                        <row className="row2">
                            <itemheading>
                            <block>
                                    <h1 className="workHeading">Creative digital & brand experiences</h1>
                                </block>
                                <text></text>
                                <text className="skills">
                                  
                                </text>
                            </itemheading>
                        </row>
                    </section>

                </HorizontalScroll>
 
            </container>

        )
    }
}

export default Contact;