/*
   Component that renders time.
   Last worked on: 10/28/21 by Mark Cortez, ID-59.
*/
import React from 'react';

class GetDate extends React.Component {
  state={
    curDate: new Date().toLocaleDateString('fr-CA', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })
  }
  render(){
    return (
      <div className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <input
            type="text"
            name="thedate"
            id="thedate"
            value= {this.state.curDate}
            {...this.props.reg("thedate")}
        />         
      </div>
    );
  }
}

export default GetDate;