import React from 'react';
import ReactDOM from 'react-dom';
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');
import * as actions from 'actions';
import { Todo } from 'Todo';


describe('Todo', () => {
  it('should exist', () => {
    expect(Todo).toExist();
  });

  it('should dispatch UPDATE_TODO action on click', () => {
    var todoData = {
      id: 199,
      text: 'Write todo.test.jsx test',
      completed: true
    };
    const action = actions.startToggleTodo(todoData.id, !todoData.completed);
    const spy = expect.createSpy();
    const todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy}/>);
    const $el = $(ReactDOM.findDOMNode(todo));

    TestUtils.Simulate.click($el[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });
});
