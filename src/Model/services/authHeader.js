const authHeader = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  if (userData && userData.access_token) {
    return { Authorization: `Bearer ${userData.access_token}` };
  } else {
    return {};
  }
};

export default authHeader;
