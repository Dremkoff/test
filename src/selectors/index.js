export const langSelector = state => state.router.location.pathname.split('/')[1];

export const userNameSelector = state => state.user.userName;

export const isAuthorisedSelector = state => state.auth.isAuthorised;
export const isFetchingSelector = state => state.auth.fetching;
export const errorSelector = state => state.auth.error;
