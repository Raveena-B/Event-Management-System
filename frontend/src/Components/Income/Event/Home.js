import { Link } from "react-router-dom";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./event.css";
import "../../../App.css";
// import axios from "axios";
import React, { useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  // const [loading, setLoading] = useState(false); //additional
  // const [isError, setIsError] = useState(false);

  // const [newUser, setNewUser] = useState({
  //   foodId: "",
  //   foodName: "",
  //   amount: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   setIsError(false); //additional
  //   const formData = new FormData();
  //   formData.append("foodId", newUser.foodId);
  //   formData.append("foodName", newUser.foodName);
  //   formData.append("amount", newUser.amount);
  //   axios
  //     .post("", formData) //add food data
  //     .then((res) => {
  //       console.log(res);
  //       setLoading(false);
  //       toast("Success! food Item Added");
  //       setNewUser({
  //         foodId: "",
  //         foodName: "",
  //         amount: "",
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setLoading(false);
  //       setIsError(true);
  //       toast("Error Food Item is Not Added dupplicate key found");
  //     });
  // };

  return (
    <div id="header">
      <header></header>

      <section className="bg1">
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
                    <Link to="#" style={{ textDecoration: "none" }}>
                      Delivery
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link to="/addevent" style={{ textDecoration: "none" }}>
                      Event
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link to="#" style={{ textDecoration: "none" }}>
                      Appointment
                    </Link>
                  </Dropdown.Item>

                  <Dropdown.Item>
                    <Link to="#" style={{ textDecoration: "none" }}>
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <h1 className="h1" style={{ color: "white" }}>
          <center>
            <b>~ Welcome to the Financial Management ~</b>
            <br />
          </center>
        </h1>
      </section>
    </div>
  );
};

export default Home;
