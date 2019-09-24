import uuid from 'uuid';

import { NEW_COMMENT, EDIT_COMMENT, DELETE_COMMENT, RATE } from './actionTypes';

function newComment(input: string) {
  return {
    type: NEW_COMMENT,
    payload: input,
    id: uuid.v4()
  };
}

function editComment(input: string, id: string) {
  return {
    type: EDIT_COMMENT,
    payload: input,
    id: id
  };
}

function deleteComment(id: string) {
  return {
    type: DELETE_COMMENT,
    id: id
  };
}

function rate(id: string, rateValue: 1 | 0) {
  return {
    type: RATE,
    rateValue: rateValue,
    id: id
  };
}