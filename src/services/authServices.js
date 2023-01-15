import mockAuthUsers from "../utils/mocks/mockAuthUsers";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginApiService = async (data) => {
  const { username, password } = data;
  await sleep(3000);

  const user = mockAuthUsers.find(
    (u) => u.userName === username && u.password === password
  );
  if (user) {
    return { data: user };
  }
  return { error: "Wrong username or password." };
};
