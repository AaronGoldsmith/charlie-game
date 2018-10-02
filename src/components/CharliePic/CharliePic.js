import React from "react";
import { Col } from "../../components/Grid"
import "./CharliePic.css"


const CharliePic = props => (  
  
  <Col className="mx-1 my-3" size="md-3">

    <div className="imgContent">
    <h3 className='helper'>{props.id}</h3>

    <img className="square"
         onClick={props.handleClick}
         clicked={false}
         id = {props.id}
         src={`${process.env.PUBLIC_URL} /assets/images/charlie${props.id}.jpg`}
         alt="charlie" />
    </div>
  </Col>  
);

export default CharliePic;
