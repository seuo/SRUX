import React, {Component} from 'react';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import mjlogo from './assets/mitchells-joinery-logo.png';
import mjlogolines from './assets/mjColours.png';
import mjlogobw from './assets/mitchells-joinery-logo-bw.png';

class Stage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandImg1:'',
            expandImg2:'',
            expandImg3:'',
        }
    }

    onImgClick1 = () => {
        this.setState({

        })
    }

    onImgClick2 = () => {
        this.setState({

        })
    }

    onImgClick3 = () => {
        this.setState({

        })
    }



    render (){
        let mobTrans = this.props.mobTrans;
        let stageImages = this.props.stageImages;
        let rState = this.props.rState;
        let currentWorkIndex = this.props.currentWorkIndex;
        
        let {expandImg1,expandImg2,expandImg3} = this.state;
        return (
            <section className={"section"}>
            <row className={"row1"}>
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
                                <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                    <div className="webImage mj"></div>
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
                                <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                    <div className="webImage mj-m"></div>
                                </a>
                            </Scrollbars>
                        </div>
                    </Tilt>
                    
                </div>

            </row>
            <row className={"row2"}>
                
                 
                        {/* <h1 className={"workHeading " + hAnim}>Web Work</h1> */}
                        {/* <div class={"scroll-downs "}>
                            <div class="mousey">
                                <div class="scrollerAnim"></div>
                            </div>
                            <div class="arrow arrow-first"></div>
                        </div> */}
                 

                    
                        <div className= {"brand "+stageImages}>
                            {/* <div className="logoContainer">
                                <img alt={this.imgAlt} src={mjlogolines}/>
                            </div>
                            <div className="logoContainer">
                                <img alt={this.imgAlt} src={mjlogobw}/>  
                            </div>
                            <div className="logoContainer">
                                <img alt={this.imgAlt} src={mjlogo}/>
                            </div> */}
                        </div>
                     
                    

               
            </row>
          
        </section>
        )

        
    }
}

export default Stage1