import React, { Component } from 'react';
import styles from './modal.module.css';
import { connect } from "react-redux";
import { closeModal } from "../reducers/index";

const mapStateToProps = state => {
    return { stateOfModal: state.stateOfModal };
  };

  const mapDispatchToProps = {
    closeModal
  }

export class ConnectedModal extends Component {

    render(){
          
        return (
            <div className={styles.bg}>
                <div className={styles.modalBox}>
                    <h2>Testing the modal</h2>
                                    <button onClick={() => this.props.closeModal()}>Close</button>

                    </div>
                {/* {this.props.stateOfModal == false ? null : <Modal/> } */}
                
            </div>

        )
      }
    }

    const Modal = connect(mapStateToProps,mapDispatchToProps)(ConnectedModal);

    export default Modal;