import React, {Component} from 'react';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';

import ambvC from './assets/ambvColours.png';
import ambvlogo from './assets/ambv-logo.png';
import ambvlogo2 from './assets/ambv-logo-2.png';

class Stage4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    render (){
        let mobTrans = this.props.mobTrans;
        let stageImages = this.props.stageImages;
        return (
            <section className={"section"}>
            <row className="row1">
                    <div className={"item1 "+stageImages}>
                        <Tilt
                            className="webWorkTilt"
                            options={{
                                            perspective:2000,
                                            max:25,
                                            reverse:true,
                                            scale: 1.1,
                                            axis:'x',
                                            speed:4000,
                                            easing:"cubic-bezier(.03,.98,.52,.99)",
                                        }}>
                            <div
                                className={"webWork "}
                                onMouseEnter={this.handleVerticalLock}
                                onMouseLeave={this.handleVerticalActive}>
                                <Scrollbars
                                    className="webWorkInner"
                                    autoHideTimeout={1000}
                                    autoHideDuration={200}>
                                    <a href="//ambv.boatgrooming.co.nz/" target="_blank" rel="noopener noreferrer">
                                        <div className="webImage ambv"></div>
                                    </a>
                                </Scrollbars>
                            </div>

                        </Tilt>
                        <Tilt
                            className="webWorkMobileTilt"
                            options={{
                                            perspective:2000,
                                            max:25,

                                            scale: 1.1,
                                            axis:'x',
                                            speed:4000,
                                            easing:"cubic-bezier(.03,.98,.52,.99)",
                                        }}>

                            <div
                                className={"webWorkMobile Tilt-inner "+mobTrans}
                                onMouseEnter={this.handleMobVerticalLock}
                                onMouseLeave={this.handleMobVerticalActive}>
                                <Scrollbars
                                    className="webWorkInner"
                                    autoHideTimeout={1000}
                                    autoHideDuration={200}>
                                    <a href="//ambv.boatgrooming.co.nz/" target="_blank" rel="noopener noreferrer">
                                        <div className="webImage ambv-m"></div>
                                    </a>
                                </Scrollbars>
                            </div>
                        </Tilt>
                    </div>
                </row>
                <row className="row2">
                <div className= {"brand "+stageImages}>
                                <div className="logoContainer">
                                    <img alt={this.imgAlt} src={ambvC}/>
                                </div>
                                <div className="logoContainer">
                                    <img alt={this.imgAlt} src={ambvlogo}/>
                                </div>
                                <div className="logoContainer">
                                    <img alt={this.imgAlt} src={ambvlogo2}/>
                                </div>

                             </div>
                </row>
            </section>
        )

        
    }
}

export default Stage4