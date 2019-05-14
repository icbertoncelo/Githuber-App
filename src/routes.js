import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';

const Routes = (userlogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      Repositories,
    },
    {
      initialRouteName: userlogged ? 'Repositories' : 'Welcome',
    },
  ),
);

export default Routes;
