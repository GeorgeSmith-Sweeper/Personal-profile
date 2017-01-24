import { connect } from 'react-redux';
import LandingHeader from './LandingHeader';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {

    }
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const LandingHeaderContainer = componentCreator(LandingHeader);
export default LandingHeaderContainer;
