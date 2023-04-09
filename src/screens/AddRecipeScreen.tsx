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
} from 'react-native';
function AddRecipeScreen(): JSX.Element {


    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text>Add Recipe Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default AddRecipeScreen;