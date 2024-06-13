export function getUser() {
  console.log(JSON.parse(localStorage.getItem("user")));
  return JSON.parse(localStorage.getItem("user"));
}

export function getAuth() {
  return localStorage.getItem("auth");
}

export function isLoggedIn() {
  const user = getUser();
  return !!user;
}

export const setUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const setAuth = (auth) => {
  localStorage.setItem("auth", JSON.stringify(auth));
};
