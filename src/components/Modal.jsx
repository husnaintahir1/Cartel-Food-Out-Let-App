import React, { useState } from "react";
import "./css/modal.css";

import { Modal } from "react-bootstrap";

function MyModal({ value, handleClose, setDeliveryZone, data }) {
  const [deliveryZoneValue, setDeliveryZonevalue] = useState();

  const handleChange = (e) => {
    setDeliveryZonevalue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDeliveryZone(deliveryZoneValue);

    handleClose();
  };

  return (
    <>
      <Modal show={value} onHide={() => handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Select Delivery Area</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Delivery Area: Minimum order amount</label>

              <select
                value={deliveryZoneValue}
                onChange={handleChange}
                className="form-control"
              >
                <option value="Karachi">Karachi</option>
                <option value="Lahore">Lahore</option>
                <option value="Peshawar">peshawar</option>
                <option value="Gilgit">Gilgit</option>
              </select>
            </div>
            <button className="btn checkOutbtn float-right">Submit</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MyModal;
