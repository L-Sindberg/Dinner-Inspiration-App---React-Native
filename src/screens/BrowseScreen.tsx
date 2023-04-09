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
function BrowseScreen(): JSX.Element {


    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text>Browse Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default BrowseScreen;