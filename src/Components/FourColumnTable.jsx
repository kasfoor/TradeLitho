import "./jquery.dataTables.css";
import React from "react";
import { Component } from "react";
//import { data } from 'jquery';

const $ = require("jquery");
$.DataTable = require("datatables.net");

export class FourColumnTable extends Component {
  getInitialState() {
    return { hidden: "hidden" };
  }

  componentDidMount() {}
  componentWillMount() {
    setTimeout(() => {
      this.$element = $(this.element);
      this.$element.DataTable({
        data: this.props.data,
        columns: [
          { title: this.props.firstColumnName },
          { title: this.props.secondColumnName },
          { title: this.props.thirdColumnName },
          { title: this.props.fourthColumnName },
        ],
      });
      this.show();
    }, this.props.wait);
  }

  show() {
    this.setState({ hidden: "" });
  }

  render() {
    return (
      <div>
        <table
          class="display"
          width="100%"
          ref={(element) => (this.element = element)}
        ></table>
      </div>
    );
  }
}
