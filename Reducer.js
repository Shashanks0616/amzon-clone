export const initialState={
    basket:[{
        id:"12321341",
        title:"The lean Startup: How Constant Innovation",
        price:11.96,
        rating:5,
        image:"https://tse1.mm.bing.net/th?id=OIP.oVTInf6BxsjyDMK9pv6bPgHaE8&pid=Api&P=0&w=232&h=155",
    },],
    user:null,
}
const Reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket:[...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':
            return{state
                
            
            };
            default:
                return state;
    }
}

export default Reducer;