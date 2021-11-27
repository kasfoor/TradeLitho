import './jquery.dataTables.css';
import React from 'react';
import { Component } from 'react';
//import { data } from 'jquery';

const $ = require('jquery');
$.DataTable = require('datatables.net');


export class EightColumnTable extends Component{

  getInitialState(){
    return({hidden : "hidden"});
  }
  


     componentDidMount() {
     setTimeout(() => {
      this.$element = $(this.element);
      this.$element.DataTable({
        data: this.props.data,

        columns: [
          { title: this.props.FirstColumnName },
          { title: this.props.SecondColumnName },
          { title: this.props.ThirdColumnName },
          { title: this.props.FourthColumnName },
          { title: this.props.FifthColumnName },
          { title: this.props.SixthColumnName },
          { title: this.props.SeventhColumnName },
          { title: this.props.EighthColumnName },
        ],
      });
// closing datatable




       this.show();
     }, this.props.wait)
    }

    show(){
      this.setState({hidden : ""});
    }
  
    render() {
      return <div>
        <table class="display" width="100%" ref={element => this.element = element}></table>
      </div>
    }
  }
