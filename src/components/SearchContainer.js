import React, {
    PropTypes
} from 'react'

import actions from '../actions/SearchActionCreator'
import searchAPI from '../sources/SearchAPI'

const SearchContainer = React.createClass({
    displayName: 'searchContainer',

    render() {
        return ( <form onSubmit = {submit} className = "search-form" >
            <label htmlFor = "search" > search 
			< /label> <input id = "search"
            type = "text"
            required ref = {
                input => _search = input
            }
            /> 
            <button > Search < /button>
            </form>
        )
    },

})