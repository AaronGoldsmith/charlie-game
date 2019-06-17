import React from "react";
import { Col } from "../../components/Grid"
import charlie1 from "../assets/images/charlie1.jpg"
import charlie2 from "../assets/images/charlie2.jpg"
import charlie3 from "../assets/images/charlie3.jpg"
import charlie4 from "../assets/images/charlie4.jpg"
import charlie5 from "../assets/images/charlie5.jpg"
import charlie6 from "../assets/images/charlie6.jpg"
import charlie7 from "../assets/images/charlie7.jpg"
import charlie8 from "../assets/images/charlie8.jpg"
import charlie9 from "../assets/images/charlie9.jpg"
import charlie10 from "../assets/images/charlie10.jpg"
import charlie11 from "../assets/images/charlie11.jpg"
import charlie12 from "../assets/images/charlie12.jpg"


import "./CharliePic.css"

var charlies = [charlie1,charlie2,charlie3,charlie4,charlie5,charlie6,charlie7,charlie8,charlie9,charlie10,charlie11,charlie12];
const CharliePic = props => (  
  
  <Col className="mx-1 my-3" size="md-3">

    <div className="imgContent">
    <h3 className='helper'>{props.id}</h3>

    <img className="square"
         onClick={props.handleClick}
         id = {props.id}
         src= {charlies[`${props.id}`-1]}
         alt={`charlie ${props.id}`} />
    </div>
  </Col>  
);

export default CharliePic;
