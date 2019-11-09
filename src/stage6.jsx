import React, {Component} from 'react';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import cclogo1 from './assets/ccColours.png';
import cclogo2 from './assets/cc-logo.png';
import cclogo3 from './assets/cc-logo.jpg';
class Stage6 extends Component {

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
                
                    <div className={"printWork"}>
                        <div className="printImage cc"></div>
                    </div>
                
            </row>
            <row className="row2">
            <div className= {"brand "+stageImages}>

            <div className="logoContainer">
                            <img alt={this.imgAlt} src={cclogo1}/>
                        </div>
                        <div className="logoContainer">
                            <img alt={this.imgAlt} src={cclogo2}/>
                        </div>
                        <div className="logoContainer">
                            <img alt={this.imgAlt} src={cclogo3}/>
                        </div>
                    </div>
            </row>
        </section>
            // <section className={"section"}>

            //         <row className="row1">

            //         </row>
            //         <row className="row2">
            //             <itemheading>
            //                 <block></block>
            //                 <text>
                               
            //                 </text>
                       
            //             </itemheading>
            //         </row>
            //     </section>

        )

        
    }
}

export default Stage6