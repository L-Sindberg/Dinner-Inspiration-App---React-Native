import React, { ReactNode, useState } from 'react';
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
    Pressable,
    StyleProp,
    ViewStyle,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RecommendationScreen from '../screens/RecommendationScreen';
import BrowseScreen from '../screens/BrowseScreen';
import AddRecipeScreen from '../screens/AddRecipeScreen';
import FavoriteScreen from '../screens/FavoriteScreen';
import IngredientsScreen from '../screens/IngredientsScreen';
import CustomModal from '../screens/RecommendationModal';

const Tab = createBottomTabNavigator();


type testButtonProps = {
    onPress: undefined,
    children?: ReactNode,
    style?: StyleProp<ViewStyle>,
    setModalOpen: () => void,
    openModal: boolean;

}
const TestButton = (testButtonProps: testButtonProps) => {
    const { children, onPress } = testButtonProps;
    const [openModal, setModalOpen] = useState(false);
    const onClose = () => {
        setModalOpen(false);
    }
    return (
        <Pressable style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center'
        }} onPress={() => setModalOpen(true)}
            android_ripple={{ color: '#f8ff1f', borderless: true, radius: 40, foreground: true }}>
            <View
                style={{
                    width: 80,
                    height: 80,
                    borderRadius: 40,
                    backgroundColor: '#1170ba',
                    elevation: 5
                }}>
                {children}
                <CustomModal visible={openModal} onClose={onClose}></CustomModal>
            </View>
        </Pressable>
    )
}



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
            <Tab.Screen name="Browse" component={BrowseScreen} options={{
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
                                fontSize: 12,
                                textDecorationLine: focused ? 'underline' : 'none'
                            }}>
                            Browse</Text>

                    </View>
                )
            }} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} options={{
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
                                fontSize: 12,
                                textDecorationLine: focused ? 'underline' : 'none'
                            }}>
                            Favorite</Text>

                    </View>
                )
            }} />
            <Tab.Screen name="Recommendation" component={RecommendationScreen}
                options={{
                    tabBarIcon: ({ focused }) => (

                        <Image source={require('../assets/icons/Light_Bulb.png')}
                            resizeMode='contain'
                            style={{
                                width: 40,
                                height: 40,
                                tintColor: focused ? '#f8ff1f' : '#ffffff'
                            }} />
                    ),
                    tabBarButton: (props) => (
                        // @ts-expect-error
                        <TestButton {...props} />
                    )
                }} />
            <Tab.Screen name="Ingredient" component={IngredientsScreen} options={{
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
                                fontSize: 12,
                                textDecorationLine: focused ? 'underline' : 'none'
                            }}>
                            Ingredients</Text>

                    </View>
                )
            }} />
            <Tab.Screen name="AddRecipe" component={AddRecipeScreen} options={{
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
                                fontSize: 12,
                                textDecorationLine: focused ? 'underline' : 'none'
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