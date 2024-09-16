export const reducer = (state, action)=> {
    switch(action.type){
        case "GET_STORIES":
            return {
                ...state, 
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }
            case "SET_LOADING": 
            return {
                ...state, isLoading: true
            }
            case "REMOVE_POST" : 
            return {
                ...state,
                hits: state.hits.filter((post)=> {
                    return (
                        post.objectID !== action.payload
                    )
                })
            }
            case "SEARCH_QUERY": 
            return{
                ...state, 
                query : action.payload
            }
            case "NEXT_PAGE":
                let pageNumInc = state.page + 1
                if(pageNumInc >50) {
                    pageNumInc = 50
                }
            return {
                ...state,
                page: state.page + 1
            }
            case "PREV_PAGE":
                let pageNum = state.page - 1
                if(pageNum< 0) {
                    pageNum = 0
                }
            return {
                ...state,
                page: pageNum
            }
        }


        return state;
} 

