import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView , Button ,TextInput } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        
    },
    addButton: {
        marginTop: 20,
    },
});



class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }
    onAddPress(){
        const {firstName , lastName , phone , email , company , project , notes } = this.props;
        this.props.createNewContact({firstName , lastName , phone , email , company , project , notes}),
        this.props.navigation.navigate('People');
    }
    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text> ADD New Contact</Text>
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={'FirstName ...'} 
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({prop: 'firstName' , value})}
                    />
                    <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={'LasttName ...'}
                        value={this.props.lastName}
                        onChangeText={value => this.props.formUpdate({prop: 'lastName' , value})}
                    />
                     <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Phone Number ...'}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({prop: 'phone' , value})}
                    />
                     <TextInput
                            textInputStyle={styles.fieldStyles}
                            placeholder={'Email ...'}
                            value={this.props.email}
                            onChangeText={value => this.props.formUpdate({prop: 'email' , value})}
                    />
                     <TextInput
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Company...'}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({prop: 'company' , value})}
                    />
                      <TextInput 
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Project...'}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({prop: 'project' , value})}
                       
                    />
                    <TextInput 
                        textInputStyle={styles.fieldStyles}
                        placeholder={'Notes...'}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({prop: 'notes' , value})}
                        
                    />
                    <View style={styles.addButton}>
                        <Button title="ADD" onPress={this.onAddPress.bind(this)}></Button>
                    </View> 
                </View>
            </ScrollView>
        )
    }
}

// onPress = this.onAddPress.bind(this)  => de bnst5dmha 3l4an nbaze el data nafsha
const mapStateToProps = state => {
    const { firstName ,  lastName , phone , email, company, project , notes } = state ;
    return { firstName ,  lastName , phone , email, company, project , notes };
}
export default connect(mapStateToProps, actions)(AddPerson);
