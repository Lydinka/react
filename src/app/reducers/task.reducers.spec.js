import {SET_TASK, REMOVE_TASKS, CHECK_TASK, taskReducer} from './tasks.reducer';
import {expect} from 'chai';
import {verifyDefaultReducerBehaviour} from "../utils/testUtils";


describe ('default',() => {
    it ('should do nothing with unhandled action', () => {
        const expectedInitialState = { byId:{}};

        verifyDefaultReducerBehaviour(taskReducer, expectedInitialState);
    });
});


describe ('SET_TASK', () => {
    it('should store task by id', () => {

        const initialState = {byId: {}};

        const payload = {
            id: 1,
            title: 'string',
            checked: false
        };

        const result = taskReducer(initialState, {type: SET_TASK, payload});

        expect(result.byId).not.to.deep.equal(initialState.byId);
    });

});



describe ('REMOVE_TASKS', () => {
    it('should remove tasks', () => {

        const initialState = {
            byId: {
                2: {
                    id: 2,
                    title: 'string',
                    checked: false
                }
            }
        };

        const result = taskReducer(initialState,{type: REMOVE_TASKS, payload:[2]
        });


        expect(result.byId).not.to.deep.equal(initialState.byId);

        expect(Object.keys(result.byId).length).to.equal(0);

    })

});


describe ('CHECK_TASK', () => {
    it ('should check tasks', ()=> {

        const initialState = {
            byId:{
                3: {
                    id: 3,
                    title: 'string',
                    checked: false,
                }
            }
        };

        const taskId = 3;

        const result = taskReducer(initialState, {type: CHECK_TASK, payload:3});

        expect(result.byId).not.to.deep.equal(initialState.byId);

        expect(result.byId[taskId].checked).to.equal(true);
    });

});
