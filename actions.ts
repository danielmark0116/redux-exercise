import uuid from 'uuid';

import { NEW_COMMENT, EDIT_COMMENT, DELETE_COMMENT, RATE } from './actionTypes';

function newComment(input: string) {
  return {
    type: NEW_COMMENT,
    payload: input,
    rateValue: 0,
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

const boundNewComment = (text: string) => store.dispatch(newComment(text));
const boundEditComment = (text: string, id: string) =>
  store.dispatch(editComment(text, id));
const boundDelteComment = (id: string) => store.dispatch(deleteComment(id));
const boundRateComment = (id: string, rateValue: 0 | 1) =>
  store.dispatch(rate(id, rateValue));
