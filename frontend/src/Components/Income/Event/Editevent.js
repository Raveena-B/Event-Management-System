import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../App.css";
import "./event.css";
import { useParams } from "react-router-dom";

const EditEvent = () => {
  const [eventId, setEventId] = useState("");
  const [eventName, setEventName] = useState("");
  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await axios
        .get(`/event/get/${id}`)
        .then((json) => {
          console.log(json);
          setEventId(json.data.eventId);
          setEventName(json.data.eventName);
          setAmount(json.data.amount);
        })
        .catch((err) => alert(err));
    };
    getData();
  }, []);

  const editHandler = async (e) => {
    // create handler for saving data to the db
    e.preventDefault();

    setLoading(true);

    const config = {
      //headers
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      await axios.put(
        //use axios API
        `/event/update/${id}`,
        {
          eventId,
          eventName,
          amount,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated 😘");
        setEventId("");
        setEventName("");
        setAmount("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setEventId("");
      setEventName("");
      setAmount("");
      setLoading(false);
    }
  };

  return (
    <div id="header">
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
        <br></br>
        <br></br>
        <div>
          <a href="/displayevent">
            <button className="btnback"> « Back</button>
          </a>
          <br />
          <div
            className="form-wrapper container"
            style={{
              width: "70%",
              background: "#000000",
              marginLeft: "380px",
              height: "200px",
              // padding: "5px 5px 5px 5px",
              opacity: "0.8",
            }}
          >
            <br />
            <br />
            <h1 style={{ color: "white" }}>Current Info 👁</h1>
            <table>
              <td controlId="eventId">
                <label style={{ color: "white", padding: "20px " }}>
                  Event Id
                </label>
                <input
                  type="text"
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  required
                  disabled
                />
              </td>

              <td controlId="eventName">
                <label style={{ color: "white", padding: "20px " }}>
                  Event Name
                </label>
                <input
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  required
                  disabled
                />
              </td>

              <td controlId="amount">
                <label style={{ color: "white", padding: "20px " }}>
                  Amount
                </label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  disabled
                />
              </td>
            </table>
            <br />
          </div>
          <br />
          <div
            className="form-wrapper container"
            style={{
              width: "40%",
              background: "#000000",
              marginLeft: "500px",
              height: "500px",
              // padding: "5px 5px 10px 10px",
              opacity: "0.8",
            }}
          >
            <br />
            <h1 style={{ color: "white" }}>Need to Update ? 🤔</h1>
            <Form onSubmit={editHandler}>
              <Form.Group controlId="eventId">
                <Form.Label style={{ color: "white" }}>Event Id</Form.Label>
                <Form.Control
                  type="text"
                  value={eventId}
                  onChange={(e) => setEventId(e.target.value)}
                  placeholder="✍🏻 Edit Event Id"
                  required
                  pattern="[0-9]{1,3}"
                />
              </Form.Group>
              <br />

              <Form.Group controlId="eventName">
                <Form.Label style={{ color: "white" }}>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  placeholder="✍🏻 Edit Event Name"
                  required
                />
              </Form.Group>
              <br />

              <Form.Group controlId="amount">
                <Form.Label style={{ color: "white" }}>Amount</Form.Label>
                <Form.Control
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="✍🏻 Edit Amount"
                  required
                />
              </Form.Group>
              <br />

              <br />
              <Button variant="danger" size="lg" block="block" type="submit">
                <i className="fa fa-paper-plane-o" aria-hidden="true"></i>{" "}
                {loading ? "Updating..." : "Update"}
              </Button>
            </Form>
            <br />
          </div>
          <br />
          <br />
        </div>
      </section>
    </div>
  );
};

export default EditEvent;
