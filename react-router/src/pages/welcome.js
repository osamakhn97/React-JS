import {Route} from 'react-router-dom'
const Welcome = ()=>{
return(
    <div>
        
    <h1>Welcome Page</h1>
    <Route path="/welcome/new">
        <p>Welcome new User!!!</p>
    </Route>
    </div>
)
}

export default Welcome