import { Link } from "react-router-dom";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./event.css";
import "../../../App.css";
import "../../../index.css";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div id="header">
      <header></header>

      <section className="bg8">
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
                <Link to=""> Food</Link>
              </li>
              <li className="li">
                <Link to=""> Event</Link>
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
                    <Link to="/adddelivery" style={{ textDecoration: "none" }}>
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
                    <Link to="/addinventory" style={{ textDecoration: "none" }}>
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

              <li className="li">
                <Link to=""> Supplier</Link>
              </li>
              <li className="li">
                <Link to=""> Customer</Link>
              </li>
              <li className="li">
                <Link to=""> Inventory</Link>
              </li>
              <li className="li">
                <Link to=""> Delivery</Link>
              </li>
              <li className="li" style={{ textDecoration: "none" }}>
                <Link to=""> Employee</Link>
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

        <h1 className="h1" style={{ color: "white", marginTop: "0px" }}>
          <center>
            <b>~ Welcome to the Financial Management ~</b>
            <br />
          </center>
        </h1>
        <div class="wrap">
          <a href="/adddelivery">
            <button class="touch">Get Start</button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
