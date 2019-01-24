import React, { Component } from 'react';
import styles from './section.module.css';
import Modal from './modal'
import { openModal } from "../reducers/index";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { stateOfModal: state.stateOfModal };
  };


const mapDispatchToProps = {
    openModal
  }

export class ConnectedSection extends Component {

    render(){
        const { header, icon, items, readmore } = this.props.section;
        let itemsJSX = items.map((item, index) => {
            return <div key={index}>
            <div className={styles.section}>
                <img src={item.picture}/>
                <p>{item.dates}</p>
                <p>{item.rating}</p>
                <p className={styles.text}>{item.subtitle}</p>
                <p className={styles.detail}>{item.description}</p>
            </div>
            </div>
          }
          );
        return (
            
            <div className={styles.container}>
            <h2 className={styles.header}><i className={icon}></i> {header}....</h2>
               <div>{itemsJSX}</div>
               <button onClick={() => this.props.openModal()}>{readmore}</button>
            </div>
        )
      }
    }
    const Section = connect(mapStateToProps,mapDispatchToProps)(ConnectedSection);


    export default Section;