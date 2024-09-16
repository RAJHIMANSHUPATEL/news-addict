import {useEffect, createContext, useContext, useReducer } from "react";
import {reducer} from './reducer'

const AppContext = createContext();
let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
    isLoading: true,
    query : "HTML",
    nbPages: 0,
    page: 0,
    hits: []
}



const AppProvider = ({children})=> {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const fetchApiData = async(url)=> {

        dispatch({type: "SET_LOADING"})
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data)
            dispatch({type: "GET_STORIES",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages,
                }
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    // to remove the post
    
    const removePost = (postId)=> {
        dispatch({type: "REMOVE_POST", payload: postId})
    }

    // search post 
const searchPost = (searchQuery)=> {
    dispatch({type: "SEARCH_QUERY", payload: searchQuery})
}

    // pagination 
    const getNextPage = ()=> {
        dispatch({type: "NEXT_PAGE"})
    }
    const getPrevPage = ()=> {
        dispatch({type: "PREV_PAGE"})
    }
    
    // to call the api
    useEffect(()=> {
        fetchApiData(`${API}query=${state.query}&page=${state.page}`)
    }, [state.query, state.page])

    return (
        <AppContext.Provider value={{...state, removePost, searchPost, getNextPage, getPrevPage}}>
            {children}
        </AppContext.Provider>
    )
}


// custom hook
const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export {AppContext, AppProvider, useGlobalContext}