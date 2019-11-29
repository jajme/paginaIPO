const init = () => {
  let searchBar = document.getElementById("searchBar");
  searchBar.addEventListener("keypress", key => {
    if (key.keyCode === 13) {
      window.location.href = "./search.html";
    }
  });
};

window.onload = init;
