let store = {
_state : { 

  profilePage: {

  posts: [
      { id: 1, post: "Hi, how are you?", like: 5 },
      { id: 2, post: "Hi, it's my first post", like: 10 },
      { id: 3, post: "Yo", like: 111 },
      { id: 4, post: "I'll kill you!", like: 6 }
    ],
    newPostText: 'kimuandr@gmail.com',
    },

    dialogsPage: {

  messages: [

      { id: 1, message: "Hello" },
      { id: 2, message: "How are you?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "Yo" },
      { id: 6, message: "Yo" },
    ],

  
  dialogs: [

    { id: 1, name: "Kima" },
    { id: 2, name: "Dima" },
    { id: 3, name: "Andrew" },
    { id: 4, name: "Valery" },
    { id: 5, name: "Renata" },
    { id: 6, name: "Mark" },
  ],
  },

  sidebar: {

  },
  },

getState() {
  return this._state;
},

  _callSubscriber() {
    console.log('state was changed');
  },

  addPost() {
    let newPost = {
      id: 5,
      post: this._state.profilePage.newPostText,
      like: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

};

window.store = store;
export default store;
