import { stat } from "fs";

const initstate={
    products:[
        {id:'1',sellername:'Mogose',productName:'carrots',productDescription:'this my product it is carrots'
        ,location:'aynalem',price:'10'},
        {id:'1',sellername:'Nigus',productName:'crafts',productDescription:'this my product it is crafts',
        location:'wokro',price:'120'},
        {id:'1',sellername:'Silase',productName:'furniture',productDescription:'this my product it is furniture',
        location:'quiha',price:'140'}
    ],

}

const productReducer = (state=initstate ,action) => {
    switch(action.type)
    {
      case 'DISPLAY_PRODUCTS':
      console.log('display products')
      return state
      default:
      return state;
    }
}


export default productReducer;