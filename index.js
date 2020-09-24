
{
    type:'ADD_TODO',
    
}
function createStore(){

    let state;
    
    let listeners;
    const getState=()=>{
        return state;

    }
    const subscribe =(listener)=>{
        listeners.push(listener);
        return ()=>{
            listeners = listeners.filter((l)=>l!==listener);
        };
    }
    return {
        getState,
        subscribe
    }
}

const store = createStore();
const unsubscribe = store.subscribe()
// store.subscribe(()=>{

// })