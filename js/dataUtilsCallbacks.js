export const getUserId = (username, callback) => {
  setTimeout(() => {
    const userId = 18;
    callback(userId);
  }, 2000);
};

export const getUserDataById = (id, callback) => {
  setTimeout(() => {
    const userData = {
      dni: "99999999A",
      city: "Barcelona",
    };
    callback(userData);
  }, 2000);
};

export const getFinesByDNI = (dni, callback) => {
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
    callback(fines);
  }, 2000);
};
