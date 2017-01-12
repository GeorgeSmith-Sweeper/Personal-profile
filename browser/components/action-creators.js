const GRAB_A_NAME = "GRAB_A_NAME";


/* sync action creators */
export const receiveAName = function (name) {
  return {
    type: GRAB_A_NAME,
    receivedName: name
  };
};
