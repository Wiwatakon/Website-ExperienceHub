import React from 'react'
import { Modal, Button, Form, Row, Col, Alert,ListGroup } from "react-bootstrap";
import styled from "styled-components";
const StyleElem = styled.div`
.material-icons{ 
    padding: 0px;
    margin: 0px;
    float: right;
}
  .lable-text{
      margin-top:20px;
  }
`;
const AddbtnStyle = styled.div`
  .add-btn {
    margin-top: 20px;
    float: right;
  }
`;
function ModalTest({ modalShow, setModalShow }) {
    return (
        <>
          {" "}
          <Modal
            show={modalShow}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={() => setModalShow(false)}
          >
            <Modal.Header closeButton>
              <h4>แก้ไขWEBSITES</h4>
            </Modal.Header>
           <Modal.Body>
               sadasd
           </Modal.Body>
           <Modal.Footer>
               5656sad
           </Modal.Footer>
          </Modal>
        </>
      );
    }

export default ModalTest