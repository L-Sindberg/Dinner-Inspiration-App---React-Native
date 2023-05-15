import React from 'react';
import type { PropsWithChildren } from 'react';
import {
    ButtonProps,
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Modal,
    Button,
    Image,
} from 'react-native';
import { create } from 'react-test-renderer';


type RecommendationModalProps = {
    onClose: () => void;
    visible: boolean;
}

const RecommendationModal = (RecommendationModalProps: RecommendationModalProps) => {
    const { onClose, visible } = RecommendationModalProps;
    return (
        <SafeAreaView>
            <Modal visible={visible} animationType='slide'>

                <View style={{
                    flex: 8
                }}>
                    <Image source={require('../assets/images/Top_WelcomeImage.png')} style={{
                        width: '100%',
                        height: '100%',
                    }
                    } />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>Interested?</Text>

                </View>
                <View style={{ flex: 6, borderStyle: 'solid', ...styles.foodPicture }}>
                    <Text>Picture</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.nameText}>Name</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text>Info</Text>


                </View>
                <View style={{ flex: 3 }}>
                    <View style={styles.bottomScreen}>
                        <Pressable onPress={onClose} style={{
                            backgroundColor: '#ba0909', ...styles.bottomButtons
                        }} android_ripple={{ color: '#000', borderless: true, radius: 40, foreground: true }}>

                            <Text style={styles.buttonText}>Nah</Text>

                        </Pressable>

                        <Pressable onPress={onClose} style={{
                            backgroundColor: '#3fad10', ...styles.bottomButtons
                        }} android_ripple={{ color: '#000', borderless: false, radius: 100, foreground: true }}>
                            <Text style={styles.buttonText}>Yes!</Text>
                        </Pressable>
                    </View>
                </View>




            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    title: {
        color: '#1170ba',
        fontSize: 48,
        fontFamily: 'Satisfy-Regular',
        textAlign: 'center',
        marginTop: '-5%'
    },
    foodPicture: {
        borderColor: '#1170ba',
        borderWidth: 1
    },
    bottomButtons: {
        height: '80%',
        width: '35%',
        elevation: 4,
        borderRadius: 5,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'

    },
    buttonText: {
        color: 'white',
        fontSize: 24
    },
    bottomScreen: {
        justifyContent: 'space-around',
        alignItems: 'center',

        flexDirection: 'row',
        height: '100%'
    },
    nameText: {
        textAlign: 'center',
        color: '#1170ba',
        fontSize: 20
    }
})


export default RecommendationModal;