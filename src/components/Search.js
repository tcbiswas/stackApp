import { PropTypes } from 'react'

export const SearchForm = ({onSearch}) => {
	let _search;
	
	const submit = (e) => {
		e.preventDefault()
		onSearch({
			search: _search.value
		})
		_search.value = ''
}
	

	return (
		<form onSubmit={submit} className="search-form">

			<label htmlFor="search">search</label>
			<input id="search" 
				   type="text" 
				   required 
				   ref={input => _search = input}/>
<button>Search</button>
			
		</form>
	)
}

SearchForm.defaultProps = {
	search: "search"
}


SearchForm.propTypes = {
	search: PropTypes.string.isRequired
}