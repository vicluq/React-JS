import { atom, selector } from "recoil";

export const posts = atom({
  key: "postsState",
  default: [
    { body: "i am awesome", postId: 10 },
    { body: "i am awesome too", postId: 11 },
    { body: "i am awesome three", postId: 12 },
  ],
});

/* posts id state: when the id changes (when postsIds is set), the selector changes 
it's filter to get the posts with the specific id from postsState */

export const postsIds = atom({
  key: "postsIdState",
  default: "all",
});

export const filteredPosts = selector({
  key: "filteredPosts",
  get: ({ get }) => {
    const idToFilter = get(postsIds);
    if (idToFilter !== "all" && idToFilter > 0) {
      return get(posts).filter((post) => post.postId === idToFilter);
    } else {
      return get(posts);
    }
  },
});
