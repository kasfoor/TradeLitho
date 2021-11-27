/*
   Component that renders time.
   Last worked on: 10/28/21 by Mark Cortez, ID-59
*/
import React from 'react';

class GetTime extends React.Component {
  state={
    curTime : new Date().toLocaleTimeString('en-US', {hour12:false})
  }

  render(){
    return (
      <div className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        <input
            type="text"
            name="thetime"
            id="thetime"
            value= {this.state.curTime}
            {...this.props.reg("thetime")}
        />         
      </div>
    );
  }
}

export default GetTime;