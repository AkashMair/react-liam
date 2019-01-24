import React, { Component } from 'react';
// import logo from './logo.svg';
// import kash from './kash.jpg';
import './App.css';
import test from './images/test.png'
import  Section  from './component/sections';
import * as content from '../src/content.json';
import { connect } from "react-redux";
import { addArticle, deleteArticle, openModal } from "./reducers/index";
import Modal from './component/modal';


// import {testComponent} from 

const mapStateToProps = state => {
  return { articles: state.articles, stateOfModal: state.stateOfModal };
};

const mapDispatchToProps = {
  addArticle, deleteArticle,openModal
}

class ConnectedApp extends Component {
  render() {

    let sections = content.sections.map((section, id) => {
      return <Section key={id} section={section} />

    
    }
    );
    console.log(this.props)
    return (
      <div>{this.props.stateOfModal == true ? <Modal/> : null}
      <div className="App">
      
        <div className="Teal">

          <div className="Dots">
            <div className="Diamond">
              <img src={test} alt="diamond" />
            </div>
          </div>
            <div className="Beige">
              {sections}
              <ul>
                {/* {this.props.articles.map(article=><li>{article}</li>)} */}
              </ul>
              {/* {this.props.articles === 'lemons' ? <Modal /> : null}
              <button onClick={() => this.props.addArticle('hello test')}>Click</button>
              <button onClick={()=> this.props.deleteArticle()}>Delete</button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);


export default App;
