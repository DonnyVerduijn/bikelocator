import { compose, withHandlers } from 'recompose';
import { withRouter } from 'react-router-dom';
import BikeListNavigationBar from './../BikeListNavigationBar';

const attachHandlers = compose(
  withHandlers({
    openMenu: ({ onMenuIconClick }) => (e) => {
      e.stopPropagation();
      onMenuIconClick();
    },
    showSettings: ({ history }) => () => {
      history.push('/settings');
    },
  }),
);

export default withRouter(attachHandlers(BikeListNavigationBar));
