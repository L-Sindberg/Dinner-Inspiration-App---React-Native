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
function FavoriteScreen(): JSX.Element {


    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text>favorite Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default FavoriteScreen;