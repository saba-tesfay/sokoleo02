const initState={
    sender:[
        {id:1,name:'jone',msg:'hallo dear'},
        {id:1,name:'jone',msg:'hallo dear'},
        {id:1,name:'jone',msg:'hallo dear'}
    ],
    reciever:[
        {id:9,name:'chaltu',msg:'hallo'},
        {id:8,name:'chaltu',msg:'hallo'},
        {id:7,name:'chaltu',msg:'hallo'}
    ]
    
}
const chatReducer=(state=initState,action)=>{
return state
}
export default chatReducer;