import { SearchItems } from './SearchItems'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const SearchList = ({results}) => {

  return (
  	<div className="search-list">
	<table>
		<thead>
			<tr>
				<th>Score</th>
				<th>Question</th>
				<th>ViewCount</th>
				<th>Tags</th>
				<th>Asked</th>
			</tr>
			<tr>
				<td colSpan={5}>
					
				</td>
			</tr>
		</thead>
		<tbody>
			{results.map((result, i) =>
				<SearchItems key={i}
						   {...result}/>	
				)}
		</tbody>

	</table>
	</div>
)
}  

SearchList.propTypes = {
	results: function(props) {
		if(!Array.isArray(props.results)) {
			return new Error(
				"result should be an array"	
				)
		} else if(!props.results.length) {
			
		} else {
			return null
		}
	}
}













