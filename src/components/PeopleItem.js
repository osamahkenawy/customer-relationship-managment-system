import React  from 'react';
import {Text , View , StyleSheet, Image , TouchableWithoutFeedback} from 'react-native';
import {connect} from 'react-redux';
import {getTheme} from  'react-native-material-kit';
import Icon from 'react-native-vector-icons/EvilIcons';

import * as actions from '../actions';
const theme = getTheme();
const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24,
    },
    image: {
        height: 100,
    },
    action: {
        backgroundColor: '#ADD8E6',
        color: 'white'
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    }



});

const PeopleItem = (props) => {
    
        return(
            <TouchableWithoutFeedback onPress={() => props.selectPerson(props.people)}>
                 <View style={[theme.cardStyle, styles.card]}> 
                    <Image 
                        source={ require('../images/bacbGround.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                    <Icon
                        name={'user'}
                        size ={100}
                        style={styles.icon}
                    />
                    <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.firstName} {props.people.lastName}</Text>
                    <Text style={[theme.cardActionStyle, styles.action]}>{props.people.companyName}</Text>
                 </View>
            </TouchableWithoutFeedback>

           
        )
} 



// const mapStateToProps = state => {
//     return {people: state.people};
// }

// map state to props is used to select data from the store   ==> bttnada kol mara lma el data tt8yr fel store  
// * retrun object contain the data  

export default connect (null , actions)(PeopleItem)


// connect bdeha 2 parameters el component and mapstateToProps .