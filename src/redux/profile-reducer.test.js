import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
    postsData: [
        { id: 1, message: 'Hello, how is your day? =)', likesCount: 15 },
        { id: 2, message: "It's my second post!", likesCount: 20 },
        { id: 2, message: "Additional test on update with map", likesCount: 1 }]
}

test('new post shoud be added', () => {
    let action = addPostActionCreator('test message from reducer')
    let newState = profileReducer(state,action)
    expect (newState.postsData.length).toBe(4)
  });

  test('reduced postData length by 1', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state,action)
    expect (newState.postsData.length).toBe(3)
  });
