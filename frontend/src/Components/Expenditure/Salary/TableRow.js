import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
import "react-toastify/dist/ReactToastify.css";

export default class StudentTableRow extends Component {
  constructor(props) {
    super(props);
    // this.deleteStudent = this.deleteStudent.bind(this);
  }

  render() {
    return (
      <tr>
        <td style={{ color: "black", backgroundColor: "white" }}>
          {this.props.obj.employeeId}
        </td>
        <td style={{ color: "black", backgroundColor: "white" }}>
          {this.props.obj.employeeName}
        </td>
        <td style={{ color: "black", backgroundColor: "white" }}>
          {this.props.obj.date}
        </td>
        <td
          style={{
            color: "black",
            backgroundColor: "white",
            marginLeft: "10px",
          }}
        >
          {this.props.obj.amount}
        </td>
      </tr>
    );
  }
}
