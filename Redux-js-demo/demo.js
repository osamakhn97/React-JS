const redux = require('redux');
const storeReducer = (state = {counter:0},action)=>{
    if(action.type === 'inc'){
        return {
            counter:state.counter+1
        }
    }
    if(action.type === 'dec'){
        return {
            counter:state.counter+1
        }
    }
    return {
        counter:state.counter
    }
}
const store = redux.createStore(storeReducer);

const counterSubscriber = ()=>{
    const latestState = store.getState();
    console.log(latestState);
}
store.subscribe(counterSubscriber);
store.dispatch({type:'inc'});
store.dispatch({type: 'dec'});