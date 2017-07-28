import { PropTypes } from 'react'
import { Link } from 'react-router'
const convertToDate =(asked)=>{
								return new Date(JSON.parse(asked*1000)).toString();
							}
export const SearchItems = ({score, question, 
							viewcount, tags, asked, id}) => (
							
	<tr>
		<td>
			{score}
		</td>
		<td>
							<Link to={`/answers/${id}`}>
						{question}
					</Link>
			
		</td>
		<td>
			{viewcount}
		</td>
		<td>
			{tags}
		</td>
		<td>
			{convertToDate(asked)}
		</td>
	</tr>						

)




