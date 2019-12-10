import { createBottomTabNavigator , createAppContainer} from 'react-navigation';

import PeopleList from './PeopleList';
import CompanyList from './CompanyList';
import AddPerson from './AddPerson';
import { create } from 'uuid-js';

const TabNavigator = createBottomTabNavigator(
    {
        People: PeopleList ,
        Add: AddPerson,
        Company: CompanyList
    },
    {
        initialRouteName: 'People',
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: '#E0FFFF',
            showLabel: false,
            showIcon: true ,
            style: {
                backgroundColor: '#87CEEB'
            }
        },

    }
);


export default createAppContainer (TabNavigator);


