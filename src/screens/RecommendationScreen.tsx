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
function RecommendationScreen(): JSX.Element {


    return (
        <SafeAreaView>

            <ScrollView>
                <View>
                    <Text>Recommendation Screen</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}



export default RecommendationScreen;