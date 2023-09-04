function expandSearch() {
    var searchForm = document.getElementById("searchForm");
    searchForm.classList.toggle("d-none");
  }
  $(document).ready(function() {
    var navbar = $(".navbar");
    var originalColor = "rgba(19, 50, 43, 0.9)"; // Cambia esto al color de fondo original del navbar

    $(window).scroll(function() {
        var scrollPos = window.scrollY;
        var opacity = 1 - (scrollPos / 300); // Ajusta este valor según tus preferencias

        if (opacity < 0.1) {
            opacity = 0.5; // Establece un valor mínimo de opacidad
        }

        navbar.css("background-color", `rgba(19, 50, 43, ${opacity})`);
    });

    // Asegúrate de establecer el fondo original al inicio
    navbar.css("background-color", originalColor);
});


