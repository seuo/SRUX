import React, {Component} from 'react';

import Tilt from 'react-tilt';
import { Scrollbars } from 'react-custom-scrollbars';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


import mjprogress from './assets/mj-bcards.png';
import mjlogobg from './assets/mj-bg.jpg';
import mjbanner1 from './assets/mj-banner1.jpg';
import mjlogo from './assets/mitchells-joinery-logo.png';
import mjlogolines from './assets/mjColours.png';
import mjlogobw from './assets/mitchells-joinery-logo-bw.png';

import mjwebmocks from './assets/mj-website-mocks.png';
import mjpage from './assets/mj-page.png';
class Stage1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandImg1:'',
            expandImg2:'',
            expandImg3:'',
            mobTrans:'',
            stageImages:'',
            gridStyles:[1,2,3,4,5,6,7,8,9,10],
        }
    }

    componentDidMount = () => {
        this.setState({
        stageNum:this.props.data.stageNum,
        currentWorkIndex:this.props.data.currentWorkIndex,
    })

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
        let {expandImg1,
            expandImg2,
            expandImg3,
            mobTrans,
            stageImages,
            stageNum,
            currentWorkIndex} = this.state;

        const gridStyles = this.state.gridstyles;
        console.log(gridStyles);

        
        return (
<>
        <div className="background-holder">
                <div className={"gridlines"}>

                {this.state.gridStyles.map(item => (
                    <div key={item} className={"gcol gridcol"+item} style={{left: 10 *item + '%'}} ></div>
                ))}

                </div>
            </div>
        <Parallax className='section' pages={3.5} scrolling={true} vertical ref={ref => (this.parallax = ref)} >

                    <container className="caseSection">

                   
                    <container class="imageBanner">
                <ParallaxLayer className="topHero" style={{position:'relative'}} offset={0} speed={0.1}>
                    <div className={"s1Col2 "+expandImg2}></div>
                    {/* <div className={"s1Col3 "+expandImg3}></div> */}
                    <div className={"s1Col1 "+expandImg1}></div>
                </ParallaxLayer>
                    </container>

                    <row className={"row1"}>
                    

                      

                        {/* <div className={"s1Col4 "+expandImg3}></div> */}
                        {/* <div className="stageOne stageBanner">

                        </div> */}
                    </row>
   
                    <row className="row">
                        <div className="infoContainer">
                        <h1 style={{color:'#2bb0ce'}}>Logo Design</h1>
                            <div className="infoBlock">
                            <div className="infoCol">
                            <p>
                                    For the logo design, I wanted to develop a modern clean brand that represented the industry well & was recognizable.
                                    The client wanted the logo to contain colours that closely matched their existing brand, they also wanted the company initials M J to be included in the logo. </p>
                                <div className="logoContainer">
                               
                                    <img alt={this.imgAlt} src={mjlogolines}/>
                               
                                </div>
                            </div>
                            <div className="infoCol">
                                <div className="infoImg1">    
                                    <img alt={this.imgAlt} src={mjprogress}/>
                                </div>
                                <p> The process included sketching up rough concepts & coming up with a variety of alternative ideas then making alterations & continued refinement
                                    until I had narrowed it down to a specific design.</p><p>I then made further alterations in Illustrator, got feed back from the client & exprimented with different colours until 
                                    we were both happy with the final design.
                                </p>                              
                            </div>

                        </div>

                        </div>

                    </row>
                    <row className={"row2"}>
                            

                         
                        
                </row>   
                    <row className="row">
                    <container class="imageBannerRow" style={{position:'absolute',marginTop:'25em'}}>
                <ParallaxLayer className="banner" style={{position:'relative'}} offset={0} speed={0.05}>
                    <div className={"bannerImg"} style={{backgroundImage:'url('+mjbanner1+')'}}></div>
                    
                </ParallaxLayer>
                    </container>
                    </row>
                    <row className={"row1"}>
                    

                   
                    <div className="item1">
                        <div className="webWorkTilt">
                        <ParallaxLayer className="topHero" offset={0} speed={0.05}>
                            <div
                                className={"webWork "}>
                                <Scrollbars
                                    className="webWorkInner"
                                    autoHideTimeout={1000}
                                    autoHideDuration={200}>
                                    <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                        <div className="webImage mj"></div>
                                    </a>
                                </Scrollbars>
                            </div>
                            </ParallaxLayer>
                        </div>
                        
                        <div
                            className="webWorkMobileTilt">
                    <ParallaxLayer className="topHero" offset={0} speed={0.03}>
                            <div
                                className={"webWorkMobile Tilt-inner "+mobTrans}>
                                <Scrollbars
                                    className="webWorkInner"
                                    autoHideTimeout={1000}
                                    autoHideDuration={200}>
                                    <a href="//mitchellsjoinery.co.nz/" target="_blank" rel="noopener noreferrer">
                                        <div className="webImage mj-m"></div>
                                    </a>
                                </Scrollbars>
                            </div></ParallaxLayer>
                        </div>
                    </div>

                  

                    {/* <div className={"s1Col4 "+expandImg3}></div> */}
                    {/* <div className="stageOne stageBanner">

                    </div> */}
                </row>

                <row className="row">
                    <div className="infoContainer">
                        <h1 className="rightSide">Web Design</h1>
                        <div className="infoBlock">

                            <div className="infoCol">
                                <div className="infoImg1">    
                                    <img alt={this.imgAlt} style={{width:'25em'}} src={mjwebmocks}/>
                                </div>
                                <p> I wanted to incorperate the shapes and angles of the boating industry into the design & layout.
                                    The site design consists of of subtle angles & trim in the company colours that break up the sections
                                    & create a clean, clear & easily read layout. 
                                </p>

                            </div>
                            <div className="infoCol">
                            <p> The initial mocks were created in Adobe XD, Photography & images edited using Adobe Photoshop.
                                I did the markup & styling before incorperating them into the Wordpress CMS. 
                                This made it easy for the client to edit & add additional content.
                                </p>
                                

                            </div>
                    </div>

                    </div>
                    <img style={{marginTop:'5em',width:'70em',marginLeft:'-5em'}} alt={this.imgAlt} src={mjpage}/>
                </row>
                <row className={"row2"}>
                        

                     
                    
            </row>   

                    </container>
                    </Parallax>
        {/* <div className="stageImages">
            <container class="imageMason">
                <div className={"s1Col1 "+expandImg1}></div>
                <div className={"s1Col2 "+expandImg2}></div>
                <div className={"s1Col3 "+expandImg3}></div>
            </container>
        </div> */}
</>
        )

        
    }
}

export default Stage1