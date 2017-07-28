import { Component } from 'react'
import { page404 } from './Page404'
import { Answer } from './Answer'
import { SearchForm } from './Search'
import { SearchList } from './SearchList'
import searchAPI from '../sources/SearchAPI'

export class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			searchResult: [
		]
		}
		this.getList = this.getList.bind(this)
		this.getAnswer = this.getAnswer.bind(this)
	}
	getAnswer() {
		var that = this
		const onResult = (jsonArray)=>{
			console.log(jsonArray)
			console.log(that)
			that.setState({
				searchResult:jsonArray
			})		
}
	searchAPI.getAnswersById(this.props.id, onResult)
	}
	getList(item) {
		var that = this
		const onResult = (jsonArray)=>{
			that.setState({
				searchResult:jsonArray
			})		
}
	searchAPI.getSearchList(item.search, onResult)
	}

	countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}


	render() {
		let returnEle;
		{(this.props.location.pathname === "/") ?
		returnEle =  (
			<div className="app">
			
			 	<SearchForm onSearch={this.getList}/> 
				
				<SearchList results={this.state.searchResult}
			 				/>	
							</div>):
			 (this.props.location.pathname.indexOf("/answers")>-1) ?	returnEle=(
			<div className="app">
			
				
				<Answer onId={this.getAnswer}/>
			 			
							</div>):returnEle=(<page404/>
			)
		}
		return returnEle;
		
	}
}




