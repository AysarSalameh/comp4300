document.getElementById('all').addEventListener('change', function() {
    var checkboxes = document.querySelectorAll('.rights input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = this.checked;
    }.bind(this));
  });
  
  var evaluateBtn = document.getElementById('evaluate-btn');
  var centerDiv = document.querySelector('.center-container');
  evaluateBtn.addEventListener('click', function() {
    centerDiv.classList.toggle('hidden');
  });
