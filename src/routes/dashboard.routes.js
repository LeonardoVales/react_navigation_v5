import React from 'react';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, TabActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function WildCard({ title }) {
    return <Text>WildCard {title}</Text>
 }

export default function DashboardRoutes() {

    return (
        
            <Tab.Navigator>
                <Tab.Screen  name="Home" component={ () => <WildCard title="Home" />} />
                <Tab.Screen  name="Settings" component={ () => <WildCard title="Settings" />} />
            </Tab.Navigator>
        
    );

}