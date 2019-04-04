import React, { Component } from "react";
import { connect } from 'react-redux'
import { Entypo } from '@expo/vector-icons'
import { View,Text,StyleSheet,ScrollView } from "react-native";
import AddTodo from './AddTodo'
import RenderTodo from './RenderTodo'

const mapStateToProps = state => ({
    // state.todos coz the state handled by todos reducer is todo,
    // one reducer should only handle one state  
    todos: state.todos
})

class TodoApp extends Component {
    render() {
        return (
            <View style={styles.container}>
             {/* HEADER */}
              <View style={{backgroundColor:"#039be5",width:"100%",height:60,flexDirection:"row"}}>
              <Entypo name="menu" size={30}  color="white" style={{paddingTop:12,paddingLeft:"9%"}}  />
              <View style={{borderBottomWidth:0.8,height:33,width:"33%",borderTopWidth:0.8,padding:0,marginTop:12,marginLeft:"16%",borderColor:"white"}}>
              <Text style={{fontSize:20,color:"white",textAlign:"center",fontWeight:"bold"}}>Todo App</Text>
              </View>
              <Entypo name="open-book" size={30} color="white" size={30} style={{paddingTop:12,paddingLeft:"18%"}}  /> 
              </View>

{/* Add todo area */}
            <AddTodo />

{/* here all todos will come through mapping */}
                <ScrollView style={{backgroundColor:"#e6e6e6"}}>
                {this.props.todos.map(todo =>
                 <RenderTodo key={todo.id} text={todo.text} id={todo.id} />
                 )}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24
    }
});

export default connect(mapStateToProps)(TodoApp)