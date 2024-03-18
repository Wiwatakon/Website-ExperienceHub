import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import styledComponents from 'styled-components'

function undoModal({undoModalShow,setUndoModalShow,currentUser,isUserMember,isUserJoin}) {
  return (
    <Modal 
    show={undoModalShow}
    size="sm"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    onHide={() => setUndoModalShow(false)}
    >
    <Modal.Header closeButton>
    <div>สำหรับสมาชิกเท่านั้น</div>
    </Modal.Header>
    <Modal.Body>
    <div>ข้อมูลนี้สำหรับสมาชิกภายในโปรเจคเท่านั้น
        ขอเข้าร่วมเลย!
    </div>
    </Modal.Body>
    <Modal.Footer>
    <Button>โอเคร</Button>
    </Modal.Footer>
        
    </Modal>
  )
}

export default undoModal