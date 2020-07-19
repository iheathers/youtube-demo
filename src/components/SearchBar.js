import React from "react";


class SearchBar extends React.Component{

    state = {searchTerm: ''}

    handleChange = (event) => {        
        this.setState({searchTerm: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();       
        this.props.onSearch(this.state.searchTerm);
    }

    render(){
        return (
            <form className="ui padded segment form" onSubmit={this.handleSubmit}>
              <div className="field">
                <label>Youtube Search</label>
                <input type="text"  placeholder="Search..." onChange={this.handleChange} value={this.state.searchTerm}/>
              </div>
            </form>
        )
    }
}

export default SearchBar;
