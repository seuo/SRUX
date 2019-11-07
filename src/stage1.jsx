import React, {Component} from 'react';


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
        let {expandImg1,expandImg2,expandImg3} = this.state;
        return (
            <>
 
            <container class="imageMason">
                <div className={"s1Col1 "+expandImg1}></div>
                <div className={"s1Col2 "+expandImg2}></div>
                {/* <div className={"s1Col3 "+expandImg3}></div> */}
                {/* <div className="iCol4"></div>
                <div className="iCol5"></div>
                <div className="iCol6"></div> */}
            </container>
            </>
        )

        
    }
}

export default Stage1