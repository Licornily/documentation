$(document).ready(function () {
    new ClipboardJS('.lButton, .wButton, .codeButton');

    $('.lButton, .wButton, .codeButton').on('success', function(e) {
      alert('Copié avec succès !');
      e.clearSelection();
    });
});