import React  from 'react';
import {Text , View , StyleSheet, Image , TouchableWithoutFeedback} from 'react-native';
import {getTheme} from  'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        color: 'white',
        paddingBottom: 5,
        paddingTop: 5
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 0,
        color: 'white',
        backgroundColor: 'rgba(255,255,255,0)'
    }
});

const CompanyItem = (props) => {
    
        return(
                 <View style={[theme.cardStyle, styles.card]}> 
                    <Image 
                        source={ require('../images/bacbGround.jpg')}
                        style={[theme.cardImageStyle, styles.image]}
                    />
                    <Icon
                        name={'bussiness'}
                        size ={100}
                        style={styles.icon}
                    />
                    <Text style={[theme.cardTitleStyle, styles.title]}>{props.companies.companyName}</Text>
                        {props.companies.names.map((name) =>{
                            return(
                                <Text style={[theme.cardActionStyle, styles.action]}>
                                    {name.firstName} {name.lastName}
                                </Text>
                            )
                        })}
                    
                 </View>
        )
} 



// const mapStateToProps = state => {
//     return {people: state.people};
// }

// map state to props is used to select data from the store   ==> bttnada kol mara lma el data tt8yr fel store  
// * retrun object contain the data  

export default CompanyItem;


// connect bdeha 2 parameters el component and mapstateToProps .