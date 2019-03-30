import { MaterialCommunityIcons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import React,{Component} from "react";
import {View,Text,TextInput} from "react-native";

class RenderTodo extends Component{
    
  editText=(id,editText)=>{
    if(editText!==""){
        this.props.dispatch({ type: 'EDIT_TEXT', id,editText })
        this.setState({editId:0})}
        else 
        // if in editing text is null then todo will be deleted
        this.props.deleteTodo(id)
     }

   editId=()=>{
     this.setState({
         editId:1,
         text:this.props.text
    })
   }

    state={
       editId:0,
       text:""
   }

    render(){
       return(
        <View>
          { this.state.editId=== 0 ?
// If editId is 0
           <View style={{flexDirection:"row",marginLeft:"5%",marginRight:"5%",marginTop:5,borderRadius:30,backgroundColor:"white",alignItems:"center"}}>  
             <Text style={{marginLeft:5,fontSize: 15,color:"black",width:"80%"}}>{this.props.text}</Text>
             <MaterialCommunityIcons name="delete-circle" size={30} color="#66bb6a"
               onPress={ () => this.props.deleteTodo(this.props.id)}  />
             <MaterialCommunityIcons name="pencil-circle" size={30} color="#66bb6a" 
               onPress={()=>this.editId()}/>
           </View>
:
// If editId is 1
           <View style={{flexDirection:"row",marginLeft:"5%",marginRight:"5%",marginTop:5,borderRadius:30,backgroundColor:"#dd2c00",alignItems:"center"}}>
             <TextInput style={{marginLeft:5,fontSize: 15,color:"black",width:"88%"}}
               value={this.state.text}  onChangeText={(text) => this.setState({ text })} />
             <MaterialCommunityIcons name="pencil-circle" size={30} style={{ color: 'white'}} 
               onPress={ ()=>this.editText(this.props.id,this.state.text) }/>
            </View>
        }
        </View>   
    )}       
 }
 export default connect()(RenderTodo)