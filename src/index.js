let pages = getPages();
let activePage = "stuff";
setActivePage();
render();

function render() {
  const pathArray = window.location.pathname.split("/");
  if (pathArray[1].length) {
    setActivePage(pathArray[0]);
  }
}

function setActivePage(page = activePage) {
  activePage = page;
  console.log(activePage);
  for (const page of pages) {
    console.log(page.id);

    if (page.id === activePage) {
      page.element.classList.add("selected");
    } else {
      page.element.classList.remove("selected");
    }
  }
}

function getPages() {
  let pages = [];
  let elements = document.getElementsByClassName("page");

  for (const element of elements) {
    pages.push({
      id: element.getAttribute("id"),
      element,
    });
  }
  return pages;
}
