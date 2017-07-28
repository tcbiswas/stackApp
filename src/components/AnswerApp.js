import { Component } from 'react'
import { Answer } from './Answer'
import searchAPI from '../sources/SearchAPI'

export class AnswerApp extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchResult: [
		]
		}
		this.getAnswer = this.getAnswer.bind(this)
	}
	getAnswer(item) {
		var that = this
		const onResult = (jsonArray)=>{
			console.log(jsonArray)
			console.log(that)
			that.setState({
				searchResult:jsonArray
			})		
}
	searchAPI.getAnswersById(item.search, onResult)
	}


	render() {
		return(
			<div className="app">
			
				
				<Answer />
			 			
							</div>
		)

		
	}
}




