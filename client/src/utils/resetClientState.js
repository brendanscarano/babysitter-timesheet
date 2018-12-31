export const resetClientState = (client) => {
  window.localStorage.removeItem('sid');
  console.log('updating cache...');
  client.writeData({ data: { isLoggedIn: false } });
  return client.resetStore();
};
