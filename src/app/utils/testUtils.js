import React from 'react';
import {expect} from 'chai';

/**
  * Verifies that the provided mocked dispatch returns the expected Action and Payload.
  * @param mockDispatch The mock dispatch function
  * @param expectedActions Expected actions with payloads
  */
const verifyDispatchAction = (mockDispatch, expectedActions) => {
    // wrap object in an array
    if (!Array.isArray(expectedActions)) {
        expectedActions = [expectedActions];
    }

    // test the outcome
    expect(mockDispatch.callCount).to.equal(expectedActions.length);
    for (let i = 0; i < expectedActions.length; i++) {
        const args = mockDispatch.args[i][0];
        verifyResult(args, expectedActions[i].type, expectedActions[i].payload);
    }
};

/**
  * Verifies that the result of provided synchronous function has the expected Action and Payload.
  * @param result The result of the tested function
  * @param expectedAction Expected action name/key
  * @param expectedPayload Expected contents of the payload
  */
const verifyResult = (result, expectedAction, expectedPayload) => {
    // test the outcome
    expect(result.type).to.equal(expectedAction);
    expect(result.payload).to.deep.equal(expectedPayload);
};

/**
  * Verify Stub function called with arguments
  * @param stub {object} Stub object e.g. sinon.stub($http, 'get')
  * @param args {Array} array of arguments in spread syntax
  */
const verifyArguments = (stub, ...args) => {
    args.map((arg, index) => expect(arg).to.deep.equal(stub.args[0][index]));
};



/**
  * Verifies that when an unhandled action is processed by reducer, the expected initial state is returned (test for
  * default branch and for automatic initialization of the reducer))
  * @param reducer
  * @param expectedInitialState
  */
const verifyDefaultReducerBehaviour = (reducer, expectedInitialState) => {
    const result = reducer(undefined, {
        type: 'NONSENSE',
        payload: {}
    });

    expect(result).to.deep.equal(expectedInitialState);
};

export {
    verifyDispatchAction,
    verifyResult,
    verifyArguments,
    verifyDefaultReducerBehaviour
};






