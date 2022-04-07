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

fetch("./comentarios.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("comentarios").innerHTML = data;
    });

fetch("./fotos.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("fotos").innerHTML = data;
    });

fetch("./footer.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });

fetch("./footeramarillo.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footeramarillo").innerHTML = data;
    });

fetch("./menu2.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("menu2").innerHTML = data;
    });
