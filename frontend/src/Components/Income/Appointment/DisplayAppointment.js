import React from "react";
import "../../../../src/styles.css";
import { Link } from "react-router-dom";
import "../../../App.css";
import axios from "axios";
// import "./delivery.css";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class DisplayAppointment extends React.Component {
  state = {
    query: "",
    data: [],
    filteredData: [],
  };

  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData,
      };
    });
  };

  getData = () => {
    fetch("/appointment/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const { query } = this.state;
        const filteredData = data.filter((element) => {
          return (
            element.appointmentType
              .toLowerCase()
              .includes(query.toLowerCase()) >= 0 ||
            element.date.toLowerCase().includes(query.toLowerCase()) >= 0 ||
            element.amount.toLowerCase().includes(query.toLowerCase()) >= 0
          );
        });

        this.setState({
          data,
          filteredData,
        });
      });
  };
  componentWillMount() {
    this.getData();
  }

  deleteData = async (id, type) => {
    //method for deleting a data
    if (window.confirm("Do you want to delete !")) {
      await axios.delete(`/appointment/delete/${id}`);
      window.location.reload();
    }
  };

  render() {
    return (
      <div id="header">
        <section className="bg2">
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
          <br></br>
          <br></br>
          <div>
            <a href="/addappointment">
              <button className="btnback"> « Back</button>
            </a>
            <h1
              style={{
                color: "black",
                marginRight: "300px",
                marginTop: "10px",
                fontWeight: "bold",
              }}
            >
              <center> All Appointments ..</center>
            </h1>

            <br />

            {/* Display data from API */}
            <div
              className="students"
              style={{ width: "80%", marginLeft: "70px" }}
            >
              {this.state.filteredData.length === 0 ? (
                <div
                  className="alert alert-danger"
                  style={{ marginLeft: "380px", width: "25%" }}
                >
                  <center>
                    Data is not found
                    <br />
                    <br />
                    <img src="notfound.jpg" style={{ width: "70%" }} />
                  </center>
                  <br />
                </div>
              ) : (
                this.state.filteredData.map((i) => (
                  <p>
                    <div
                      className="student"
                      style={{ background: "#d1e189", width: "350px" }}
                    >
                      <div className="details">
                        <div>
                          <div style={{ float: "right" }}></div>

                          <p>
                            <b style={{ color: "blue" }}>Appointment Type : </b>
                            {i.appointmentType}
                          </p>
                          <p>
                            <b style={{ color: "orange" }}>
                              Appointment Date :{" "}
                            </b>
                            {i.date}
                          </p>
                          <p>
                            <b style={{ color: "red" }}>Amount : </b>
                            {i.amount}
                          </p>
                        </div>
                        <div style={{ display: "flex" }}>
                          <div>
                            <Link to={`/editappointment/${i._id}`}>
                              <button className="btn btn-secondary">
                                Edit
                              </button>
                            </Link>
                          </div>
                          &nbsp;
                          <div>
                            <button
                              className="btn btn-secondary"
                              onClick={() => this.deleteData(i._id)}
                            >
                              Delete
                            </button>
                          </div>
                          &nbsp;
                        </div>
                      </div>
                    </div>
                  </p>
                ))
              )}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </section>
      </div>
    );
  }
}
