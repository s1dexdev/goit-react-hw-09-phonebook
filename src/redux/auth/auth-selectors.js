const isAuthenticated = state => state.auth.isLogined;
const getUserEmail = state => state.auth.user.email;

export default { isAuthenticated, getUserEmail };
