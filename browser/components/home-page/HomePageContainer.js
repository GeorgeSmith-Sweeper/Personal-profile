import { connect } from 'react-redux';
import HomePage from './HomePage';

const mapStateToProps = function (state) {
  return {

  };
};

const mapDispatchToProps = function (dispatch) {
  return {

    }
};

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const HomePageContainer = componentCreator(HomePage);
export default HomePageContainer;
