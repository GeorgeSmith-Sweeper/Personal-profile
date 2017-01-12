// actions
export const GET_ALL_PROJECTS = 'GET_ALL_PROJECTS';


// sync action creators
export const receiveProjects = function (projects) {
  return {
    type: GET_ALL_PROJECTS,
    receivedProjects: projects
  }
}
