fetch("./menu.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("menu").innerHTML = data;
  });

fetch("./muro.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("muro").innerHTML = data;
  });

fetch("./carpeta.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("carpeta").innerHTML = data;
    });

fetch("./menugris.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("menugris").innerHTML = data;
    });

fetch("./services.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("services").innerHTML = data;
    });
