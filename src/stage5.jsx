import React, {Component} from 'react';
import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import mglogo2 from './assets/mmColours.png';
import mglogo3 from './assets/mangawhai-logo-2-w.png';

import mglogo4 from './assets/mangawhai-logo-2.png';

class Stage5 extends Component {

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
                        <div className="printImage mglogo"></div>
                    </div>
                
            </row>
            <row className="row2">
            <div className= {"brand "+stageImages}>
                            <div className="logoContainer">
                                <img alt={this.imgAlt} src={mglogo2}/>
                            </div>
                            <div className="logoContainer">
                                <img alt={this.imgAlt} src={mglogo3}/>
                            </div>
                            <div className="logoContainer">
                                <img alt={this.imgAlt} src={mglogo4}/>
                            </div>

                         </div>
            </row>
        </section>
      
        )

        
    }
}

export default Stage5