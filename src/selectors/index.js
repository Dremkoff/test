export const langSelector = state => state.router.location.pathname.split('/')[1];

export const isAuthorisedSelector = state => state.auth.isAuthorised;
