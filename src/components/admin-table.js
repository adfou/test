import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import TestDecision from "../components/test-decision";
import NavButton from "../components/nav-button";



const AdminTable = ({ userid, cancerType, site, test }) => {
  return (
    <Table striped>
      <thead>
        <th>Field</th>
        <th>Value</th>
        <th>Edit</th>
      </thead>
      <tbody>
        <tr>
          <td>User id</td>
          <td>{ userid }</td>
          <td></td>
        </tr>
        <tr>
          <td>Cancer type</td>
          <td>{ cancerType }</td>
          <td></td>
        </tr>
        <tr>
          <td>Site</td>
          <td>{ site }</td>
          <td></td>
        </tr>
        <tr>
          <td>Wants test?</td>
          <td>{ test.doYouWantGeneticTest }</td>
          <td><NavButton path="/its-your-decision">Change</NavButton></td>
        </tr>
        <TestDecision test={ test }>
          { (resp, field, value, path) => {
            return (
              <tr>
                <td>{ field }</td>
                <td>{ value }</td>
                <td><NavButton path={ path }>Change</NavButton></td>
              </tr>
            )
          }}
        </TestDecision>
      </tbody>
    </Table>
  )
}

AdminTable.propTypes = {
  userid: PropTypes.string.isRequired,
  cancerType: PropTypes.string.isRequired,
  site: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}

export default AdminTable;
