import React, { Component } from "react";
import {View,StyleSheet,TextInput} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'

class AddTodo extends Component {

    state = {
        text: ''
    }

    addTodo = (text) => {
        // empty todo will not be added
        if(text!==""){
        this.props.dispatch({ type: 'ADD_TODO', text })
        this.setState({ text: '' })
    }
}

    render() {
        return (
         <View style={{backgroundColor:"#e6e6e6"}}>
         {/* Input Area */}
          <View style={{flexDirection:"row",paddingBottom:10}}>
            <TextInput placeholder="Add Todo" style={styles.Input}  
                 onChangeText={(text) => this.setState({ text })}
                 value={this.state.text}/>
            <MaterialIcons name="add-circle" size={30} color="#546e7a" style={{paddingTop:15}}  
                  onPress={() => this.addTodo(this.state.text)}/> 
           </View>
           {/* HR */}
           <View style={{borderBottomColor: 'black',borderBottomWidth: 1,marginLeft:"5%",marginRight:"5%"}}></View>
          </View>
        );
    }
}
export default connect()(AddTodo);

const styles = StyleSheet.create({
    Input:{
        marginTop:10,
        paddingLeft:"10%",
        width:"85%",
        fontSize:15
       }
});