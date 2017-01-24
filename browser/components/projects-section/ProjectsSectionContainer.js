import { connect } from 'react-redux';
import ProjectsSection from './ProjectsSection';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {

    }
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ProjectsSectionContainer = componentCreator(ProjectsSection);
export default ProjectsSectionContainer;
