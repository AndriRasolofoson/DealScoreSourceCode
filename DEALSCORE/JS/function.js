document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.querySelector('.dropdown');
  var dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdown.addEventListener('click', function() {
      dropdownContent.classList.toggle('show');
  });

  dropdownContent.addEventListener('click', function(event) {
      event.stopPropagation();
  });

  document.addEventListener('click', function() {
      dropdownContent.classList.remove('show');
  });
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.addEventListener('click', function() {
        modal.style.display = "block";
    });

    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

