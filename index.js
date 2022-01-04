const main = () => {
  let logIn = document.createElement("h2");
  logIn.innerText = "JELENTKEZÉS";
  container.append(logIn);

  let placeholderDiv = document.createElement("input");
  placeholderDiv.placeholder = "Név";
  container.append(placeholderDiv);
  placeholderDiv.className = "ph";

  let placeholderDiv2 = document.createElement("input");
  placeholderDiv2.placeholder = "Email cím";
  container.append(placeholderDiv2);
  placeholderDiv2.className = "ph";

  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  container.append(checkBox);

  let agreeDiv = document.createElement("div");
  agreeDiv.innerText = "Elolvastam és elfogadom az adatkezelési tájékoztatót";
  container.append(agreeDiv);

  let btn = document.createElement("button");
  btn.innerText = "ELKÜLD";
  container.append(btn);
};

window.addEventListener("load", main);
