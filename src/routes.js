import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';


// import Home from './pages/Home';
import Users from './pages/Users';

import DashboardRoutes from './routes/dashboard.routes';

 const Stack = createStackNavigator();

 export default function Routes() {

    return (
        <Stack.Navigator //aqui é o header da navegação stack
            initialRouteName="Users"
            screenOptions={
                { headerStyle: { backgroundColor: '#7159c1' },
                headerTintColor: '#fff' }} 
            >
            <Stack.Screen name="Home" component={DashboardRoutes} options={{ title: 'Dashboard' }}  />
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    );

 }