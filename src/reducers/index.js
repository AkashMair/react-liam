const initialState = {
    articles: ['testing', 'Hello'],
    stateOfModal: false
  };

  export const addArticle = (payload) => {
    return { type: "ADD_ARTICLE", payload }
  };

  export const ADD_ARTICLE = "ADD_ARTICLE";

  export const deleteArticle = () => {
    return { type: "DELETE_ARTICLE" }
};

   export const DELETE_ARTICLE = "DELETE_ARTICLE";

    export const openModal = () => {
        return { type: "OPEN_MODAL"}
    }

   export const OPEN_MODAL = "OPEN_MODAL";

   export const closeModal = () => {
        return {type: "CLOSE_MODAL"}
   }


  function rootReducer(state = initialState, action) {
    // if (action.type === ADD_ARTICLE) {
    //     return Object.assign({}, state, {
    //         articles: state.articles.concat(action.payload)
    //       });
    //   }

    // else if (action.type === DELETE_ARTICLE){
    //     return Object.assign({}, state, {
    //         articles: state.articles.slice(0, state.articles.length - 1)
    //     })
    // }

    switch (action.type){
        case 'ADD_ARTICLE':
            return { ...state, articles: state.articles.concat(action.payload)};
        case 'DELETE_ARTICLE':
        return { ...state, articles: 'lemons' };
        case 'OPEN_MODAL':
            return { ...state, stateOfModal: true };
        case 'CLOSE_MODAL':
            return { ...state, stateOfModal: false}
        default:
             return state;
    }

  };

  export default rootReducer;