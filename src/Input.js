import React, { Component} from "react";

class Input extends Component {

  handleSearch = (event) => {
    if(event.key === 'Enter' && event.target.value !== ''){
      this.props.performSearch(event.target.value)
    }
  }
  render() {
    return(
      <div>
        <input placeholder="Search..." className="input-style" onKeyPress={this.handleSearch}></input>
      </div>
    )
  }
}
export default Input;