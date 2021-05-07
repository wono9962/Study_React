import React, { Component } from 'react';

class Aside extends Component{
    render(){
      console.log('Aside render');
      return(
        <aside>
          <button>hello</button>
        </aside>
      )
    }
  }
export default Aside;