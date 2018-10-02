import React, { Component } from "react";
import { Container, Row}  from "./Grid";
import AllImages from "../Charlie.json";
import Header from "./Header"
import CharliePic from "./CharliePic";
class MainContainer extends Component {
  state = {
    AllImages,
    id: 0,
    message: "Make a guess",
    score: 0,
    highscore: 0
  };

  handleClick = (image) => {
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
  


  render() {
    return (
      <div >
      <Header message={this.state.message} score={this.state.score} highscore={this.state.highscore} />
      <Container fluid>
          {/* EXPLICITLY BREAKING INTO 3x4 */}
          <div className='mx-auto pt-4'>
            <Row > 
              <CharliePic id={this.state.AllImages[0].id} handleClick={this.handleClick}/> 
              <CharliePic id={this.state.AllImages[1].id} handleClick={this.handleClick} /> 
              <CharliePic id={this.state.AllImages[2].id} handleClick={this.handleClick}/>
              <CharliePic id={this.state.AllImages[3].id} handleClick={this.handleClick}/>
            </Row>

            <Row >
              <CharliePic id={this.state.AllImages[4].id} handleClick={this.handleClick}/> 
              <CharliePic id={this.state.AllImages[5].id} handleClick={this.handleClick}/> 
              <CharliePic id={this.state.AllImages[6].id} handleClick={this.handleClick}/>
              <CharliePic id={this.state.AllImages[7].id} handleClick={this.handleClick}/>
            </Row>

            <Row >
              <CharliePic id={this.state.AllImages[8].id} handleClick={this.handleClick}/> 
              <CharliePic id={this.state.AllImages[9].id} handleClick={this.handleClick} /> 
              <CharliePic id={this.state.AllImages[10].id} handleClick={this.handleClick}/>
              <CharliePic id={this.state.AllImages[11].id} handleClick={this.handleClick} />
            </Row>
            </div>

        </Container>
      </div>
    );
  }
}

export default MainContainer;
