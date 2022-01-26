import {
  getUserId,
  getUserDataById,
  getFinesByDNI,
} from "./dataUtilsPromises.js";
import speak from "./speak.js";

const display = document.querySelector(".display");

speak(display);

const searchButton = document.querySelector(".action button");
const userIdInfo = document.querySelector(".id .data");
const userDataInfo = document.querySelector(".dni .data");
const userFinesInfo = document.querySelector(".fines .data");

searchButton.addEventListener("click", () => {
  // Promises
  getUserId("Marta")
    .then((id) => {
      userIdInfo.textContent = id;
      return getUserDataById(id);
    })
    .then((userData) => {
      userDataInfo.textContent = userData.dni;
      return getFinesByDNI(userData.dni);
    })
    .then((fines) => {
      userFinesInfo.textContent = fines.map((fine) => JSON.stringify(fine));
    })
    .catch((error) => {
      console.log(error.message);
    });

  /*
  // Callbacks
  getUserId("Marta", (id) => {
    userIdInfo.textContent = id;
    getUserDataById(id, (userData) => {
      userDataInfo.textContent = userData.dni;
      getFinesByDNI(userData.dni, (fines) => {
        userFinesInfo.textContent = fines.map((fine) => JSON.stringify(fine));
      });
    });
  }); */
});
