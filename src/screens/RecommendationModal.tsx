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
                <View style={{ flex: 1 }}>

                    <Image source={require('../assets/images/Top_WelcomeImage.png')} style={{
                        width: '100%',
                        resizeMode: 'contain',
                        marginTop: -45,




                    }
                    } />
                    <Text style={styles.title}>Interested?</Text>
                    <Button title='close' onPress={onClose} />
                    <View style={{ flex: 2 }}>
                        <Pressable onPress={onClose} style={{
                            justifyContent: 'flex-end'
                        }}>
                            <Text>close</Text>
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
        fontSize: 42,
        fontFamily: 'Satisfy-Regular',
        textAlign: 'center',
        marginTop: -60
    }
})


export default RecommendationModal;