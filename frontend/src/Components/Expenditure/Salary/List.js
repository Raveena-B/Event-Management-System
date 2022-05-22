import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TableRow from "./TableRow";
import { Link } from "react-router-dom";
import "./salary.css";
export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("/salary")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <TableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="bg5">
        <Link to="/reportgenerator">
          <div>
            <button
              className="info__button"
              type="primary"
              style={{ float: "right", marginTop: "100px" }}
            >
              <i class="fa fa-cogs" aria-hidden="true"></i> Genarate PDF
            </button>
          </div>
          <br />
          <br />
          <br />
          <br />
        </Link>

        <div>
          <div className="table-wrapper container ">
            <center>
              <Table
                striped
                bordered
                style={{
                  background: "#000000",
                  // padding: "20px 20px 20px 20px",
                  marginLeft: "100px",
                  marginTop: "70px",
                  opacity: "0.7",
                }}
              >
                <thead>
                  <tr>
                    <th style={{ color: "white" }}>Employee ID</th>
                    <th style={{ color: "white" }}>Employee Name</th>
                    <th style={{ color: "white" }}>Salary Date</th>
                    <th style={{ color: "white" }}>Amount</th>
                  </tr>
                </thead>
                <tbody style={{ color: "white" }}>{this.DataTable()}</tbody>
              </Table>
            </center>
            <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br /> <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    );
  }
}
