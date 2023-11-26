import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native';
// OnBoarding will be used to create the swiping effect between screens
import Onboarding from 'react-native-onboarding-swiper';
import React from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const {height,width} = Dimensions.get('window');
 export default function MultiStep() {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();

    let OnMultiStepFinished = ()=>{
        // navigate function will be used to navigate accross screens
        navigation.navigate('Home');
    }

    const doneButton = ({...props})=>{
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
        
    }
    return (
    <View style={styles.container}>
     <Onboarding
     onDone={OnMultiStepFinished}
     onSkip={OnMultiStepFinished}
     DoneButtonComponent={doneButton}
     
     containerStyles={{paddingHorizontal: 15}}
     pages={[
        {
            backgroundColor:"red",
            image : (
                <View style={styles.lottie}>
                    <Lottie  style={{flex: 1}} source={require('../assets/animations/astronaut-reading.json')} autoPlay loop />
                </View>
            ),
            title:"Welcome",
            subtitle:"TheraHealth is your place to track your mental health progress and take small and actionable steps towards better mental health"
        },
        {
            backgroundColor:"yellow",
            image : (
                <View style={styles.lottie}>
                    <Lottie  style={{flex: 1}} source={require('../assets/animations/astronaut-reading.json')} autoPlay loop />
                </View>
            ),
            title:"How does it work?",
            subtitle:`You will be asked for camera permissions.We are using a program which analyses your emotions,aswell
            as prompting you quizzes to understand more about your mental health.Your progress will be tracked daily`
        },
        {
            backgroundColor:"#48dbfb",
            image : (
                <View style={styles.lottie}>
                    <Lottie style={{flex: 1}} source={require('../assets/animations/penguin.json')} autoPlay loop />
                </View>
            ),
            title:"Third Page",
            subtitle:`You will receive prizes and badges based on your progress.
            Hope our app helps you towards a better tomorrow :) `
        }
     ]}/>
     
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie:{
        width: width*0.9,
        height: width
    },
    doneButton: {
        padding: 20,
    }
})