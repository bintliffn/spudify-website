import React from "react";
//import { Link } from "react-router-dom";
import "../App.css";
import "./Developers.css";

function Developers() {
  return (
    <table className="center" border={2} cellSpacing="auto" width={100}>
      <tr>
        <th>Name</th>
        <th>Roles</th>
        <th>Email</th>
        <th>LinkedIn</th>
        <th>Github</th>
      </tr>
      <tr>
        <td>Nathanial Bintliff</td>
        <td>Project Owner, App Developer, Documentation</td>
        <td>nbintlif@students.kennesaw.edu</td>
        <td>
          <a href="/https://www.linkedin.com/in/nathanial-bintliff-13b8881bb/">
            Nathanial's LinkedIn
          </a>
        </td>
        <td>Nathanial's Github</td>
      </tr>
    </table>
  );
}

export default Developers;
