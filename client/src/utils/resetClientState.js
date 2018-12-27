export const resetClientState = (client) => {
  console.log('resetting client state...');
  window.localStorage.removeItem('sid');
  client.writeData({ data: { isLoggedIn: false } });
  return client.resetStore();
};
