import { connect } from 'react-redux';
import AboutMe from './AboutMe';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {

    }
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AboutMeContainer = componentCreator(AboutMe);
export default AboutMeContainer;
