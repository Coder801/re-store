import updateBooklist from "./book-list";
import updateShopingCard from "./shoping-card";

const reducer = (state, action) => ({
  booklist: updateBooklist(state, action),
  shopingCard: updateShopingCard(state, action)
});

export default reducer;
