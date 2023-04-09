import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendationScreen from '../screens/RecommendationScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import IngredientsScreen from '../screens/IngredientsScreen';

const Tab = createBottomTabNavigator();



function Tabs(): JSX.Element {


    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    backgroundColor: '#ffffff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow
                }
            }
            }>
            <Tab.Screen name="Recommendation" component={BrowseScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Image source={require('../assets/icons/browse.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1170ba' : '#748c94'
                            }} />
                        <Text
                            style={{
                                color: focused ? '#1170ba' : '#748c94',
                                fontSize: 12
                            }}>
                            Browse</Text>

                    </View>
                )
            }} />
            <Tab.Screen name="Browse" component={FavoriteScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Image source={require('../assets/icons/heart.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1170ba' : '#748c94'
                            }} />
                        <Text
                            style={{
                                color: focused ? '#1170ba' : '#748c94',
                                fontSize: 12
                            }}>
                            Favorite</Text>

                    </View>
                )
            }} />
            <Tab.Screen name="AddRecipe" component={RecommendationScreen} />
            <Tab.Screen name="Favorite" component={IngredientsScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Image source={require('../assets/icons/carrot.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1170ba' : '#748c94'
                            }} />
                        <Text
                            style={{
                                color: focused ? '#1170ba' : '#748c94',
                                fontSize: 12
                            }}>
                            Ingredients</Text>

                    </View>
                )
            }} />
            <Tab.Screen name="Ingredients" component={AddRecipeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}>
                        <Image source={require('../assets/icons/add.png')}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? '#1170ba' : '#748c94'
                            }} />
                        <Text
                            style={{
                                color: focused ? '#1170ba' : '#748c94',
                                fontSize: 12
                            }}>
                            Add</Text>

                    </View>
                )
            }} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#266387',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})



export default Tabs;