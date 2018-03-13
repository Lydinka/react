import {setTaskAction, removeTasksAction, checkTasksAction} from "./task.actions";
import {SET_TASK, REMOVE_TASKS, CHECK_TASK} from '../reducers/tasks.reducer';
import sinon from 'sinon';
import {expect} from 'chai';
import {verifyDispatchAction} from "../utils/testUtils";

describe('setTaskAction()', () => {

    it('should work', () => {

        const title = 'title';

        const result = setTaskAction(title, 1);

        const expectedActions = {
            type: SET_TASK,
            payload: {
                id: 1,
                title,
                checked: false,
            }
        };

        expect(result).to.deep.equal(expectedActions);

    });


});



describe ('removeTasksAction()', () => {

    it('should work', () => {

            const id = ['id'];

            const result = removeTasksAction(id);

            const expectedActions = {
                type: REMOVE_TASKS,
                payload: id

            };

            expect(result).to.deep.equal(expectedActions);
        }
    )
});


describe ('checkTasksAction()', () => {

    it('should work', () => {

        const result = checkTasksAction('id');

        const expectedActions = {

            type: CHECK_TASK,
            payload:'id'
        };

        expect(result).to.deep.equal(expectedActions);

    })


});