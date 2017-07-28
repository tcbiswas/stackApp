import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { App } from './components/App'
import { Answer } from './components/Answer'
import { page404 } from './components/Page404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
	<Router history={hashHistory}>
		<Route exact path="/" component={App}>
		<Route path="answers/:id" component={App}/>
</Route>
	</Router>,
	document.getElementById('react-container')
)

