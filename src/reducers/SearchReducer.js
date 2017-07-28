import {
    mergeImmutable,
    setImmutable
} from '../utils/ObjectUtils'
import actions from '../actions/SearchActionCreator'

const initialState = {
    tableComponentState: 'loading',
    searchComponentState: 'loading',
    validationErrors: {}
}

const handlers = {

    [actions.VALIDATE_AUDIENCE_DATA]: (state, action) =>
        setImmutable(state, 'validationErrors', action.errors),

    [actions.RESET]: () =>
        initialState,


    [actions.GET_SEARCH_LIST_REQUEST]: (state) =>
        mergeImmutable(state, {
            tableComponentState: 'loading',
            tableStats: null,
        }),

    [actions.GET_SEARCH_LIST_RECEIVE]: (state, action) =>
        mergeImmutable(state, {
            tableComponentState: 'done',
            tableStats: action.stats,
        }),

    [actions.GET_SEARCH_LIST_FAILED]: (state) =>
        mergeImmutable(state, {
            tableComponentState: 'failed',
            tableStats: null,
        }),

    [actions.GET_SEARCH_LIST_BY_ID_REQUEST]: (state) =>
        mergeImmutable(state, {
            searchComponentState: 'loading',
            searchStats: null,
        }),

    [actions.GET_SEARCH_LIST_BY_ID_RECEIVE]: (state, action) =>
        mergeImmutable(state, {
            searchComponentState: 'done',
            searchStats: action.stats[0],
        }),

    [actions.GET_SEARCH_LIST_BY_ID_FAILED]: (state) =>
        mergeImmutable(state, {
            searchComponentState: 'failed',
            searchStats: null,
        }),

    [actions.CREATE_ANSWER_REQUEST]: (state) =>
        mergeImmutable(state, {
            audienceComponentState: 'loading',
        }),

    [actions.CREATE_ANSWER_RECEIVE]: (state, action) =>
        mergeImmutable(state, {
            answerComponentState: 'done',
            changesApplied: true,
        }),

    [actions.CREATE_ANSWER_FAILED]: (state) =>
        mergeImmutable(state, {
            answerComponentState: 'failed',
            changesApplied: true,
        }),

    [actions.UPDATE_ANSWER_REQUEST]: (state) =>
        mergeImmutable(state, {
            answerComponentState: 'loading',
        }),

    [actions.UPDATE_ANSWER_RECEIVE]: (state, action) =>
        mergeImmutable(state, {
            answerComponentState: 'done',
            changesApplied: true,
        }),

    [actions.UPDATE_ANSWER_FAILED]: (state) =>
        mergeImmutable(state, {
            answerComponentState: 'failed',
            changesApplied: true,
        }),



}

export default (reducer) =>
(state = initialState, action) =>
reducer(handlers, state, action)