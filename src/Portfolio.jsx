import React, {Component} from 'react';
import HorizontalScroll from 'react-scroll-horizontal'
class Portfolio extends Component {


render (){

        return (

            <container className="pWrap">
                    <HorizontalScroll
                        // pageLock      = { bool }
                        // reverseScroll = { bool }
                        // style         = { object }
                        // config        = {{ stiffness: int, damping: int }}
                        className="work"
                        // animValues    = { int }
                        >
                        <section className="pSection">
                            <row className="row1"></row>
                            <row className="row2"></row>
                        </section>
                        <section className="pSection">
                            <row className="row3"></row>
                            <row className="row4"></row>
                        </section>
                        <section className="pSection">
                            <row className="row1"></row>
                            <row className="row2"></row>
                        </section>
                        <section className="pSection">
                            <row className="row3"></row>
                            <row className="row4"></row>
                        </section>
                    </HorizontalScroll>


            </container>

        )
    }
}

export default Portfolio;