$(document).ready(function () {
    // Sélectionnez toutes les balises h1, h2 et h3 sauf celles avec la classe "title"
    var headings = $('h1, h2, h3').not('.title');

    // Sélectionnez la balise qui contiendra la table des matières
    var summaryContainer = $('#summary');

    // Parcourez chaque titre
    headings.each(function () {
        // Obtenez l'ID et le texte du titre
        var titleId = $(this).attr('id');
        var titleText = $(this).text();

        // Créez le lien de la table des matières avec la classe et le texte appropriés
        var tabulation = '';
        if ($(this).is('h2')) {
            tabulation = '\t';
        } else if ($(this).is('h3')) {
            tabulation = '\t\t';
        }

        // Créez la balise pre contenant le lien
        var preContainer = $('<pre>' + tabulation + '<a class="summary" href="#' + titleId + '">' + titleText + '</a></pre>');

        // Ajoutez la balise pre à la table des matières
        summaryContainer.append(preContainer);
    });
});