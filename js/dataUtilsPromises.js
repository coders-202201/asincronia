export const getUserId = (username) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "Luis") {
        reject(new Error("I'm sick of you"));
      }
      const userId = 18;
      resolve(userId);
    }, 2000);
  });
  return promise;
};

export const getUserDataById = (id) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 100) {
        reject(new Error("Luis, don't cheat on me!"));
      }
      const userData = {
        dni: "99999999A",
        city: "Barcelona",
      };
      resolve(userData);
    }, 2000);
  });

  return promise;
};

export const getFinesByDNI = (dni) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      const fines = [
        {
          id: 1,
          import: 1000,
        },
        {
          id: 2,
          import: 2000,
        },
      ];
      resolve(fines);
    }, 2000);
  });

  return promise;
};
