/**
 * Created by wangdi on 25/11/16.
 */
'use strict';

import * as types from './actionTypes';

function requestData() {
    return {
        type: types.REQUEST_DATA,
    };
}

function receiveData(responseData){
    return {
        type: types.RECEIVE_DATA,
        dataSource: responseData
    }
}

export function fetchData(dateUrl) {
    return function (dispatch) {
        //dispatch(requestData());

        return fetch(dateUrl)
            .then(response => response.json())
            .then(json => dispatch(receiveData(json)));
    }
}