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
function IngredientsScreen(): JSX.Element {


    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text>Ingredients Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default IngredientsScreen;