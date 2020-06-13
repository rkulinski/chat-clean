import { SET_USERNAME } from "../consts";

export function setUsername(username) {
  return {
    type: SET_USERNAME,
    payload: username,
  };
}
