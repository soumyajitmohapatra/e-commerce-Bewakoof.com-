export const initialState = {
  bag: [],
  user: null,
  wishlist: [],
};

export const getBagTotal = (bag) =>
  bag?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    // ADD TO WISHLIST

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case "REMOVE_FROM_WISHLIST":
      const indexWish = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );
      let newwishlist = [...state.wishlist];
      if (indexWish >= 0) {
        newwishlist.splice(indexWish, 1);
      } else {
        console.warn(
          `Something Wrong with product (id: ${action.id}) maybe its not added`
        );
      }
      return {
        ...state,
        wishlist: newwishlist,
      };

    // ADD TO BAG

    case "ADD_TO_BAG":
      return {
        ...state,
        bag: [...state.bag, action.item],
      };

    case "REMOVE_FROM_BAG":
      const index = state.bag.findIndex((bagItem) => bagItem.id === action.id);
      let newbag = [...state.bag];
      if (index >= 0) {
        newbag.splice(index, 1);
      } else {
        console.warn(
          `Something Wrong with product (id: ${action.id}) maybe its not added`
        );
      }
      return {
        ...state,
        bag: newbag,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
