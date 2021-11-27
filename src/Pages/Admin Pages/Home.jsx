import React from 'react';
import { useState, useEffect } from 'react';
import AdminHeader from '../../Components/AdminHeader';
import Axios from 'axios';
import {FourColumnTable} from '../../Components/FourColumnTable';
import { InputGroup, FormControl } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export default function Home() {

  const [id, setId] = useState('');
  const [department, setDepartment] = useState('');
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');
  const [editorialList, setEditorialList] = useState([]);
  const [editorialDelete, setEditorialDelete] = useState('');

  useEffect(() => {
    Axios.get(process.env.REACT_APP_BACKEND_PATH + "/api/getEditorial").then(
      (Response) => {
        setEditorialList(Response.data);
      }
    );
  }, [])

  const submitEditorial = () => {
    window.location.reload(false);
    Axios.post(process.env.REACT_APP_BACKEND_PATH + "/api/insertEditorial", {
      editorialId: id,
      editorialName: department,
      editorialHeader: header,
      editorialDescription: description
    }).then(()=>{
      console.log("Submited!")
    })
  };


  const deleteEditorial = () => {
    const id = editorialDelete;
    window.location.reload(false);
    Axios.delete(
      process.env.REACT_APP_BACKEND_PATH + "/api/deleteEditorial/" + id
    );
  };

  return (
    <div>
      <AdminHeader
        name="Admin"
        PageName="Admin"
        PageLocation="Admin's Home Page"
      ></AdminHeader>
      <br />
      <FourColumnTable
        class="text-center"
        wait={1000}
        data={editorialList.map(Object.values)}
        firstColumnName="ID"
        secondColumnName="Department"
        thirdColumnName="Header"
        fourthColumnName="Description"
      ></FourColumnTable>
      <br></br>
      <div className="form">
        <InputGroup
          size="sm"
          className="mb-3"
          onChange={(e) => {
            setId(e.target.value);
          }}
          required
        >
          <InputGroup.Text id="inputGroup-sizing-sm">ID</InputGroup.Text>
          <FormControl
            aria-label="ID"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className="mb-3"
          onChange={(e) => {
            setDepartment(e.target.value);
          }}
          required
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Department
          </InputGroup.Text>
          <FormControl
            aria-label="department"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className="mb-3"
          onChange={(e) => {
            setHeader(e.target.value);
          }}
          required
        >
          <InputGroup.Text id="inputGroup-sizing-sm">Header</InputGroup.Text>
          <FormControl
            aria-label="header"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <InputGroup
          size="sm"
          className="mb-3"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        >
          <InputGroup.Text id="inputGroup-sizing-sm">
            Description
          </InputGroup.Text>
          <FormControl
            aria-label="description"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>

        <Button
          variant="outline-dark"
          onClick={submitEditorial}
          style={{ marginBottom: 10 }}
        >
          Add to Schedule
        </Button>

        <InputGroup
          className="mb-3"
          onChange={(e) => {
            setEditorialDelete(e.target.value);
          }}
        >
          <FormControl placeholder="Enter ID to delete" />
          <Button
            variant="outline-secondary"
            id="button-addon2"
            onClick={deleteEditorial}
          >
            Delete
          </Button>
        </InputGroup>

        <br />
      </div>
    </div>
  );

}
