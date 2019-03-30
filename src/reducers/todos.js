let nextId = 0
const todos = (state = [], action) => {
    switch (action.type) {

        case 'ADD_TODO':
  
                state.push({
                    id:nextId++,
                    text: action.text
                })
                return [...state]

        case 'DELETE_TODO':
       
                for(var i=0;i<state.length;i++){
                    if(state[i].id===action.id){
                        state.splice(i,1)
                        break;
                    }
                }
                 return [...state]

                case 'EDIT_TEXT':
  
                for(var i=0;i<state.length;i++){
                   if(state[i].id===action.id){
                       state[i].text=action.editText
                       break;
                   }
               }
                return [...state]

        default:
            return state
    }
}

export default todos