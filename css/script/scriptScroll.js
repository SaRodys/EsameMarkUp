function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      //Altezza della finestra visibile del browser.
      var windowHeight = window.innerHeight;
      //Distanza dalla parte superiore dell'elemento .reveal rispetto alla parte superiore della finestra del browser (misurata in pixel).
      //Riporta la misura di un elemento e la sua posizione relativa alla finestra
      var elementTop = reveals[i].getBoundingClientRect().top;
  

      //Se la parte superiore dell'elemento è entro i 150px dalla fine della finestra, la classe "active" viene aggiunta, innescando l'animazione.
      //Altrimenti, la classe "active" viene rimossa (così, se si scorre verso l’alto, l'elemento scompare di nuovo).
      if (elementTop < windowHeight - 150) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  //Chiama la funzione reveal() ogni volta che l’utente scorre la pagina.
  window.addEventListener("scroll", reveal);
  