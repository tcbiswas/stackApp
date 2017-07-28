import _ from 'lodash'

import SearchAPI from '../sources/SearchAPI'

import {

  registerAsyncAction as unboundRegisterAsyncAction
} from './ActionUtils'

const actions = {}

const registerAction = _.partial(unboundRegisterAction, actions)
const registerAsyncAction = _.partial(unboundRegisterAsyncAction, actions)


registerAsyncAction(SearchAPI, 'getSearchList')

export default actions
