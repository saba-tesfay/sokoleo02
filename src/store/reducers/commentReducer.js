const initState={
    comments:[
        {
           id:1,
           author:'Jon Doe',
           msg:'Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.',
           img:'../img/bg_1.jpg'
        },
        {
          id:2,
          author:'jonman',
          msg:'here am i did you Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.' ,
          img:'../../img/bg_2.jpg'
        }
     ]
}
const commentReducer=(state=initState,action)=>{
  switch(action.type){
    case 'ADD-COMMENT':
      console.log('addede');

  }
    return state;

}
export default commentReducer