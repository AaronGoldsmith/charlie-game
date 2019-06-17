import React, { Component } from "react";
import { Container, Row}  from "./Grid";
import AllImages from "../Charlie.json";
import Header from "./Header"
import CharliePic from "./CharliePic";
class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      AllImages,
      id: 0,
      message: "Make a guess",
      score: 0,
      highscore: 0
    };
    this.handleClick = (image) => {
      const img = image.target;
      image.clicked=true;
      if(this.state.id === img.id){
        this.setState({message: `That's not right!`, score: 0});
      }
      else{
        this.setState({id: img.id, score: this.state.score+1, message:`Good Choice`,
        highscore: (this.state.score+1 > this.state.highscore) ?
                    this.state.score+1 : this.state.highscore});
      }
      AllImages.sort(function() { return 0.5 - Math.random() });
  };

  this.renderFour=(start)=>{
    let row = [];
    for(let i = start; i < start+4; i++){
      row.push(<CharliePic id={this.state.AllImages[i].id} handleClick={this.handleClick}/>)
    }
    return <Row>{row}</Row>;
  }
  
  }
  


  render() {
    const row1 = this.renderFour(0)
    const row2 = this.renderFour(4)
    const row3 = this.renderFour(8)

    return (
      <div >
      <Header message={this.state.message} score={this.state.score} highscore={this.state.highscore} />
      <Container fluid>
          <div className='mx-auto pt-4'>
            <Row >  {row1}  </Row>

            <Row >  {row2}  </Row>

            <Row >  {row3}   </Row>
            </div>

        </Container>
      </div>
    );
  }
}

export default MainContainer;
