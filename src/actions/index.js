export function selectBook(book) {
  //selectBook is an action creator, it needs to return an action,
  //an object with a type prpoerty
  return {
    type: "BOOK_SELECTED", //type is always in uppercase
    payload: book
  };
}
