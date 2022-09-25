import Edit from '../Components/Edit';
import Student from '../Components/Student';
import Add from '../Components/Add'
const Reducer = (state="",action) =>{
    switch(action){
     case Add : return <Add/>
     case Edit : return <Edit/>
     default : return <Student/>
    }
}

export default Reducer;