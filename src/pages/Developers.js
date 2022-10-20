import React from "react";
//import { Link } from "react-router-dom";
import "../App.css";
import "./Developers.css";

function Developers() {
  return (
    <div className="title"> 
    <table className="center" border={2} cellSpacing="auto">
      <caption>Developer Information</caption>
      <tr>
        <th>Name</th>
        <th>Roles</th>
        <th>Email</th>
        <th>LinkedIn</th>
        <th>Github</th>
      </tr>
      <tr>
        <td>Nathanial Bintliff {" "}</td>
        <td>Project Owner, App Developer, Documentation</td>
        <td>nbintlif@students.kennesaw.edu</td>
        <td>
          <a href="https://www.linkedin.com/in/nathanial-bintliff-13b8881bb/" target ="_blank" rel="noopener noreferrer">
            Nathanial's LinkedIn
          </a>
        </td>
        <td><a href="https://github.com/bintliffn"target ="_blank" rel="noopener noreferrer">
            Nathanial's Github
          </a></td>
      </tr>
      <tr>
        <td>AJ Christian</td>
        <td>Website Developer,App Developer, Documentation</td>
        <td>achris54@students.kennesaw.edu</td>
        <td>
          <a href="https://www.linkedin.com/in/addison-christian-054771208/" target ="_blank" rel="noopener noreferrer">
            AJ's LinkedIn
          </a>
        </td>
        <td><a href="https://github.com/Achris54"target ="_blank" rel="noopener noreferrer">
            AJ's Github
          </a></td>
      </tr>
      <tr>
        <td>Tyler Holmes</td>
        <td>App Developer, Database Management</td>
        <td> tholme60@students.kennesaw.edu</td>
        <td>
          <a href="https://www.linkedin.com/in/tylergholmes/" target ="_blank" rel="noopener noreferrer">
            Tyler's LinkedIn
          </a>
        </td>
        <td><a href="https://github.com/tylerholmes"target ="_blank" rel="noopener noreferrer">
            Tyler's Github
          </a></td>
      </tr>
      <tr>
        <td>Jimmy Nguyen</td>
        <td>App Developer, Web Developer, Database Management</td>
        <td> jnguy127@students.kennesaw.edu</td>
        <td>
          <a href="https://www.linkedin.com/in/jimmy-nguyen-0101/" target ="_blank" rel="noopener noreferrer">
            Jimmy's LinkedIn
          </a>
        </td>
        <td><a href="https://github.com/PrettyLegit0101"target ="_blank" rel="noopener noreferrer">
            Jimmy's Github
          </a></td>
      </tr>
      <tr>
        <td>Alex Tawara</td>
        <td>App Developer, Documentation</td>
        <td>atawara@students.kennesaw.edu</td>
        <td>
          <a href="https://www.linkedin.com/in/alex-tawara-698877232/" target ="_blank" rel="noopener noreferrer">
            Alex's LinkedIn
          </a>
        </td>
        <td><a href="https://github.com/AlexTawara"target ="_blank" rel="noopener noreferrer">
            Alex's Github
          </a></td>
      </tr>
    </table>
    </div>
  );
}

export default Developers;
