import React, { useState } from "react";
import axios from "axios";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../App.css";
// import "./delivery.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAdvertisement = () => {
  const [advertisementName, setAdvertisementName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

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
      var { data } = await axios.post(
        "/advertisement/add",
        { advertisementName, date, amount },
        config
      );
      toast("Success! Added ... ");
      setAdvertisementName("");
      setDate("");
      setAmount("");
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
        <section className="bg3">
          <nav className="nav">
            <ul className="ul">
              <center>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <li className="li">
                  <Link to="/"> Booking</Link>
                </li>

                <li className="li">
                  <Link to="#"> Food</Link>
                </li>
                <li className="li">
                  <Link to="#"> Event</Link>
                </li>
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
                      <Link to="#" style={{ textDecoration: "none" }}>
                        Salary
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        Inventory
                      </Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                      <Link to="#" style={{ textDecoration: "none" }}>
                        Other
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <li className="li">
                  <Link to="#"> Supplier</Link>
                </li>
                <li className="li">
                  <Link to="#"> Customer</Link>
                </li>
                <li className="li">
                  <Link to="#"> Inventory</Link>
                </li>
                <li className="li">
                  <Link to="#"> Delivery</Link>
                </li>
                <li className="li" style={{ textDecoration: "none" }}>
                  <Link to="#"> Employee</Link>
                </li>
              </center>
            </ul>
          </nav>

          <h2
            className="h2"
            style={{
              color: "#60A43E",
              fontWeight: "bold",
              fontFamily: "Times New Roman",
              paddingtop: "5px",
            }}
          >
            {" "}
            Finance Management
          </h2>
          <br />
          <a href="/">
            <button className="btnback"> « Back</button>
          </a>
          <center>
            <h1 style={{ color: "white" }}>Add New Advertisement ..</h1>
          </center>
          <form
            onSubmit={handleSubmit}
            encType="multipart/form-data"
            style={{
              width: "50%",
              margin: "center",
              marginLeft: "auto",
              marginTop: 0,
              marginRight: "260px",
              display: "block",
              background: "black",
              padding: " 10px 10px 10px 10px",
              opacity: "0.8",
            }}
          >
            <div className="cmb-3">
              <label for="advertisementName" className="food">
                Advertisement Name
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter the Advertisement Name"
                className="form-control"
                name="advertisementName"
                value={advertisementName}
                onChange={(e) => setAdvertisementName(e.target.value)}
                required
              />
              <br />
              <label for="date" className="food">
                Advertisement Date
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter the Date"
                className="form-control"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <br />
              <label for="amount" className="food">
                Amount
              </label>
              <br />
              <br />
              <input
                type="text"
                placeholder="Enter the Amount"
                className="form-control"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <br />
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
            <a href="/addadvertisement">
              <button type="submit" className="btn btn-success">
                <i class="fa fa-refresh" aria-hidden="true"></i> Refresh
              </button>
            </a>
            <br />
            <br />
          </form>
          <br />
          <a href="/displayadvertisement">
            <button className="display">Display Advertisements</button>
          </a>
        </section>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default AddAdvertisement;