export const resetClientState = (client) => {
  window.localStorage.removeItem('sid');
  client.writeData({ data: { isLoggedIn: false } });
  return client.resetStore();
};
