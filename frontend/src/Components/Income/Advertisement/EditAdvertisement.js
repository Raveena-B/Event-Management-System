import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../App.css";
// import "./delivery.css";
import { useParams } from "react-router-dom";

const EditAdvertisement = () => {
  const [advertisementName, setAdvertisementName] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");

  const [loading, setLoading] = useState(false); //additional

  const { id } = useParams();

  useEffect(() => {
    //component mount
    const getData = async () => {
      await axios
        .get(`/advertisement/get/${id}`)
        .then((json) => {
          console.log(json);
          setAdvertisementName(json.data.advertisementName);
          setDate(json.data.date);
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
        `/advertisement/update/${id}`,
        {
          advertisementName,
          date,
          amount,
        },
        config
      );

      setTimeout(() => {
        //set a time out
        setLoading(false);
        alert("Success! Updated ... ");
        setAdvertisementName("");
        setDate("");
        setAmount("");
        window.location.reload();
      }, 5000); //5seconds timeout
    } catch (error) {
      alert(error);
      setAdvertisementName("");
      setDate("");
      setAmount("");
      setLoading(false);
    }
  };

  return (
    <div id="header">
      <section className="bg4">
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
          <a href="/displayadvertisement">
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
              <td controlId="advertisementName">
                <label style={{ color: "white", padding: "20px " }}>
                  Advertisement Name
                </label>
                <input
                  type="text"
                  value={advertisementName}
                  onChange={(e) => setAdvertisementName(e.target.value)}
                  required
                  disabled
                />
              </td>

              <td controlId="date">
                <label style={{ color: "white", padding: "20px " }}>
                  Advertisement Date
                </label>
                <input
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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
              <Form.Group controlId="advertisementName">
                <Form.Label style={{ color: "white" }}>
                  Advertisement Name
                </Form.Label>
                <Form.Control
                  type="text"
                  value={advertisementName}
                  onChange={(e) => setAdvertisementName(e.target.value)}
                  placeholder="✍🏻 Edit Event Id"
                  required
                />
              </Form.Group>
              <br />

              <Form.Group controlId="date">
                <Form.Label style={{ color: "white" }}>
                  Advertisement Date
                </Form.Label>
                <Form.Control
                  type="text"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
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

export default EditAdvertisement;
