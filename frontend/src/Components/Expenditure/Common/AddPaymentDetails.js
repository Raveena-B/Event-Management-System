import React, { useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
import { Link } from "react-router-dom";
// import "../EmployeeSalary/employee.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPaymentDetails = () => {
  const [accNo, setAccountNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvv, setCvv] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const handleSubmit = async (e) => {
    //logic for adding data to the BACKEND
    e.preventDefault();

    setLoading(true); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      //exception handling
      const { data } = await axios.post(
        "/paymentDetails/add",
        {
          accNo,
          cardType,
          cardHolderName,
          cardNumber,
          expireDate,
          cvv,
        },
        config
      );
      toast("Success! Added Card Details");
      setAccountNumber("");
      setCardType("");
      setCardHolderName("");
      setCardNumber("");
      setExpireDate("");
      setCvv("");
      setLoading(false);
    } catch (error) {
      toast(error);
      setLoading(false);
      setTimeout(() => {}, 5000); //5s
    }
  };

  return (
    <div>
      <div id="header">
        <section className="bg5">
          <nav className="nav">
            <ul className="ul">
              <center>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                <Dropdown as={ButtonGroup}>
                  <Button
                    style={{ backgroundColor: "#5377B1  " }}
                    className="btn"
                  >
                    Financial
                  </Button>

                  <Dropdown.Toggle
                    // split
                    style={{ backgroundColor: "#5377B1  " }}
                    // id="dropdown-split-basic"
                  />

                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Link
                        to="/adddelivery"
                        style={{ textDecoration: "none" }}
                      >
                        Delivery
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link to="/addevent" style={{ textDecoration: "none" }}>
                        Event
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        to="/addappointment"
                        style={{ textDecoration: "none" }}
                      >
                        Appointment
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        to="/addadvertisement"
                        style={{ textDecoration: "none" }}
                      >
                        Advertisement
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link to="/addsalary" style={{ textDecoration: "none" }}>
                        Salary
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link
                        to="/addinventory"
                        style={{ textDecoration: "none" }}
                      >
                        Inventory
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link to="/addother" style={{ textDecoration: "none" }}>
                        Other
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </center>
            </ul>
          </nav>

          <b>
            {" "}
            <h2
              className="h2"
              style={{
                color: "#60A43E",
                padding: "2px",
                fontWeight: "bold",
                fontFamily: "Times New Roman",
                paddingtop: "5px",
              }}
            >
              {" "}
              Finance Management
            </h2>
          </b>
          <a href="/">
            <button className="btnback"> « Back</button>
          </a>
          <center>
            <h1 style={{ color: "black" }}>Add Payment Details ..</h1>
            <br />
          </center>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            style={{
              width: "50%",
              margin: "center",
              marginLeft: "auto",
              marginTop: 0,
              marginRight: "270px",
              display: "block",
              background: "black",
              padding: " 10px 10px 10px 10px",
              opacity: "0.8",
            }}
          >
            <div className="cmb-3">
              <label for="accNo" className="food">
                Account Number
              </label>

              <br />
              <input
                type="text"
                placeholder="Enter the accNo"
                className="form-control"
                name="accNo"
                value={accNo}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
              <br />
              <label for="cardType" className="food">
                Card Type
              </label>

              <br />
              <input
                type="text"
                placeholder="Enter the cardType"
                className="form-control"
                name="cardType"
                value={cardType}
                onChange={(e) => setCardType(e.target.value)}
                required
                pattern="[A-Za-z]+"
              />
              <br />
              <label for="cardHolderName" className="food">
                card Holder Name
              </label>

              <br />
              <input
                type="text"
                placeholder="Enter the cardHolderName"
                className="form-control"
                name="cardHolderName"
                value={cardHolderName}
                onChange={(e) => setCardHolderName(e.target.value)}
                required
              />
              <br />
              <label for="cardNumber" className="food">
                Card Number
              </label>

              <br />
              <input
                type="text"
                placeholder="Enter the cardNumber"
                className="form-control"
                name="cardNumber"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />

              <br />
              <label for="expireDate" className="food">
                Expire Date
              </label>
              <br />

              <input
                type="text"
                placeholder="Enter the expireDate"
                className="form-control"
                name="expireDate"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
                required
              />
              <br />

              <label for="cvv" className="food">
                CVV
              </label>
              <br />

              <input
                type="text"
                placeholder="Enter the cvv"
                className="form-control"
                name="cvv"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </div>

            <div>
              {/*decision*/}
              <button
                type="submit"
                className="btn btn-primary mt-3"
                disabled={loading}
              >
                <i class="fa fa-upload" aria-hidden="true"></i>{" "}
                {loading ? "Uploading..." : "Upload"}
              </button>
              <ToastContainer style={{ marginTop: "50px" }} />
            </div>
            <br />
            <a href="/addpaymentdetails">
              <button type="submit" className="btn btn-success">
                <i class="fa fa-refresh" aria-hidden="true"></i> Refresh
              </button>
            </a>
          </form>
          <br />
          <a href="/displaysalary">
            <button className="display">Display Employees</button>
          </a>
        </section>
      </div>

      <br />
    </div>
  );
};

export default AddPaymentDetails;
