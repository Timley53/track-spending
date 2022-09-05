"strict mode";
/////////////////doc selections

///////modal and sign in

const clickHere = document.querySelector(".click-here");
const overlay = document.querySelector(".overlay");
const signModal = document.querySelector(".sign-modal");
const closeModal = document.querySelector(".close-modal");
const signUsername = document.querySelector(".username");
const signPassword = document.querySelector(".password");
const Cpassword = document.querySelector(".C-password");
const submit = document.querySelector(".submit");
const inputValid = document.querySelector(".input-valid");
const modalInputBox = document.querySelector(".input-box");
const LoginUsername = document.querySelector(".login-username");
const rabaPassword = document.querySelector(".raba-Password");
const signIn = document.querySelector(".sign-in");
const noAcc = document.querySelector(".No-acc");
const welcomeText = document.querySelector(".welcome");
const FoodDiv = document.querySelector(".food");
const drinkDiv = document.querySelector(".drink");
const maintenanceDive = document.querySelector(".maintenance");
const clothinDiv = document.querySelector(".clothing");
const othersDiv = document.querySelector(".other");
const foodAdd = document.querySelector(".fa-bowl-food");
const drinkAdd = document.querySelector(".fa-glass-water");
const clothingAdd = document.querySelector(".fa-shirt");
const maintenanceAdd = document.querySelector(".fa-gears");
const otherAdd = document.querySelector(".fa-globe");
const addExp = document.querySelector(".exp-amount");
const Foodtotal = document.querySelector(".food-tot");
const drinktotal = document.querySelector(".drink-tot");
const clothingTotal = document.querySelector(".clothing-tot");
const maintenanceTotal = document.querySelector(".maintenance-tot");
const otherTotal = document.querySelector(".others-tot");
//////////////////show modal

clickHere.addEventListener("click", function () {
  console.log("ththth");
  overlay.classList.toggle("display");
  signModal.classList.toggle("display");
});

closeModal.addEventListener("click", function () {
  overlay.classList.toggle("display");
  signModal.classList.toggle("display");
});

const userObj = {
  food: [],
  drinks: [],
  clothing: [],
  maintenance: [],
  others: [],
};
/////////////functions

const addnew = function (arr, DomEL) {
  arr.forEach((el) => {
    const html = ` <div class="row food-row">${el}</div>`;

    DomEL.insertAdjacentHTML("beforeend", html);
  });
};
///////
const adding = function (arr) {
  const expensesNumber = Number(addExp.value);
  arr.push(expensesNumber);
  console.log(userObj);
};
////////////
const addonsite = function (arr, DomEL) {
  const html = ` <div class="row food-row">${arr[arr.length - 1]}</div>`;

  DomEL.insertAdjacentHTML("beforeend", html);
};
/////////////

const totalAll = function (
  totfood,
  totdrink,
  totclothing,
  totmaintenance,
  totothers
) {
  const foodtot = totfood.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  Foodtotal.textContent = `# ${foodtot}`;

  /////////
  const drinktot = totdrink.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  drinktotal.textContent = `# ${drinktot}`;
  /////////////////
  const clothingtot = totclothing.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  clothingTotal.textContent = `# ${clothingtot}`;
  //////////

  const maintenancetot = totmaintenance.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  maintenanceTotal.textContent = `# ${maintenancetot}`;
  ////////////////
  const othertot = totothers.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  otherTotal.textContent = `# ${othertot}`;
};

//////////////
submit.addEventListener("click", function () {
  console.log(signUsername.value, signPassword.value, Cpassword.value);
  const regPass = Number(signPassword.value);
  const Cregpass = Number(Cpassword.value);

  if (!signUsername.value || !signPassword.value || !Cpassword.value) {
    console.log("none");
    inputValid.textContent =
      "Create and account by filling each required fields";
  } else if (signUsername && signPassword && Cpassword) {
    if (regPass !== Cregpass) {
      inputValid.textContent = "Your passwords does not match";
    } else if (regPass === Cregpass) {
      inputValid.textContent = "";
      userObj.name = signUsername.value;
      userObj.password = regPass;
      console.log(userObj.name);
      console.log(userObj);

      modalInputBox.textContent = "Account  Successfully Created✅";
    }
  }

  localStorage.setItem("userobject", JSON.stringify(userObj));
});

signIn.addEventListener("click", function () {
  const user = localStorage.getItem("userobject");
  const userObj = JSON.parse(user);
  if (!LoginUsername.value || !rabaPassword.value) {
    LoginUsername.placeholder = "Please enter a valid details!!!";
  } else if (
    LoginUsername.value === userObj.name &&
    Number(rabaPassword.value) === userObj.password
  ) {
    console.log(userObj);
    noAcc.textContent = "";
    welcomeText.textContent = `Welcome ${userObj.name.toUpperCase()}`;

    addnew(userObj.food, FoodDiv);
    addnew(userObj.drinks, drinkDiv);
    addnew(userObj.clothing, clothinDiv);
    addnew(userObj.others, othersDiv);
    addnew(userObj.maintenance, maintenanceDive);

    totalAll(
      userObj.food,
      userObj.drinks,
      userObj.clothing,
      userObj.maintenance,
      userObj.others
    );
    document.querySelector("main").style.opacity = "1";
    // userObj.food.forEach((el) => {
    //   const html = ` <div class="row food-row">${el}</div>`;

    //   FoodDiv.insertAdjacentHTML("beforeend", html);
    // });

    ///////////fxn
  } else if (
    LoginUsername.value !== userObj.name ||
    Number(rabaPassword.value) !== userObj.password
  ) {
    LoginUsername.placeholder = `Wrong Input!`;
  }
  LoginUsername.value = "";
  rabaPassword.value = "";
});

/////////////////////

foodAdd.addEventListener("click", function () {
  const user = localStorage.getItem("userobject");
  const userObj = JSON.parse(user);

  adding(userObj.food);
  addonsite(userObj.food, FoodDiv);
  totalAll(
    userObj.food,
    userObj.drinks,
    userObj.clothing,
    userObj.maintenance,
    userObj.others
  );
  // const expensesNumber = Number(addExp.value);
  // userObj.food.push(expensesNumber);
  // console.log(userObj);

  localStorage.setItem("userobject", JSON.stringify(userObj));
  console.log(userObj);
});

//////////////

drinkAdd.addEventListener("click", function () {
  const user = localStorage.getItem("userobject");
  const userObj = JSON.parse(user);

  adding(userObj.drinks);
  addonsite(userObj.drinks, drinkDiv);
  totalAll(
    userObj.food,
    userObj.drinks,
    userObj.clothing,
    userObj.maintenance,
    userObj.others
  );
  // const expensesNumber = Number(addExp.value);
  // userObj.food.push(expensesNumber);
  // console.log(userObj);

  localStorage.setItem("userobject", JSON.stringify(userObj));
  console.log(userObj);
});

////////

clothingAdd.addEventListener("click", function () {
  const user = localStorage.getItem("userobject");
  const userObj = JSON.parse(user);

  adding(userObj.clothing);
  addonsite(userObj.clothing, clothinDiv);
  totalAll(
    userObj.food,
    userObj.drinks,
    userObj.clothing,
    userObj.maintenance,
    userObj.others
  );
  // const expensesNumber = Number(addExp.value);
  // userObj.food.push(expensesNumber);
  // console.log(userObj);

  localStorage.setItem("userobject", JSON.stringify(userObj));
  console.log(userObj);
});
/////////////

maintenanceAdd.addEventListener("click", function () {
  const user = localStorage.getItem("userobject");
  const userObj = JSON.parse(user);

  adding(userObj.maintenance);
  addonsite(userObj.maintenance, maintenanceDive);
  totalAll(
    userObj.food,
    userObj.drinks,
    userObj.clothing,
    userObj.maintenance,
    userObj.others
  );
  // const expensesNumber = Number(addExp.value);
  // userObj.food.push(expensesNumber);
  // console.log(userObj);

  localStorage.setItem("userobject", JSON.stringify(userObj));
  console.log(userObj);
});

////////////

otherAdd.addEventListener("click", function () {
  const user = localStorage.getItem("userobject");
  const userObj = JSON.parse(user);

  adding(userObj.others);
  addonsite(userObj.others, othersDiv);
  totalAll(
    userObj.food,
    userObj.drinks,
    userObj.clothing,
    userObj.maintenance,
    userObj.others
  );
  // const expensesNumber = Number(addExp.value);
  // userObj.food.push(expensesNumber);
  // console.log(userObj);

  localStorage.setItem("userobject", JSON.stringify(userObj));
  console.log(userObj);
});

// const objc = {
//   name: "timmy",
//   state: "oyo",
// };LoginUsername.value === userObj.name && Number(rabaPassword.value) === newobj.password

// localStorage.setItem("objs", JSON.stringify(objc));

// const newe = localStorage.getItem("objc");

// console.log(JSON.parse(newe));
