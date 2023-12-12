$(document).ready(function () {
    // Initialiser le nombre maximum de lignes à 0
    var maxLines = 0;
    var counter = 0;

    var classes = [$('.code'), $('.language-c'), $('.language-php'), $('.language-python'), $('.language-html'), $('.language-css'), $('.language-bash') , $('.conf')];

    $.each(classes, function (index, elementsOfClass) {

        if (elementsOfClass.length > 0) {

            // Parcourir chaque div de code
            elementsOfClass.each(function () {
                // Obtenir le contenu de la div
                var content = $(this).text();

                // Diviser le contenu en lignes
                var lines = content.split("\n");
                lines = lines.slice(2, -2);

                // Sauvegarder le nombre maximum de lignes
                if (lines.length > maxLines) {
                    maxLines = lines.length;
                }

                var new_lines = "";

                // Créer une balise <p> pour chaque ligne
                lines.forEach(function (line, index) {
                    // var lineWithTabs = line.replace(/ {4}/g, "\t");

                    // new_lines += "<pre class=\"code" + (index + 1) + "\" id=\"code-" + (counter + 1) + "-" + (index + 1) + "\">" + lineWithTabs + "</pre>\n";
                    new_lines += "<pre class=\"code" + (index + 1) + "\" id=\"code-" + (counter + 1) + "-" + (index + 1) + "\"></pre>\n";
                     
                });
                $(this).append(new_lines);
                lines.forEach(function (line, index) {
                    if (line.indexOf("<pre") == -1) {
                        var lineWithTabs = line.replace(/ {4}/g, "\t");

                        var elementName = "#code-" + (counter + 1) + "-" + (index + 1);
                        $(elementName).text(lineWithTabs);
                    }
                });

                // $(this).contents().filter(function () {
                //     return this.nodeType === 3 && $.trim(this.nodeValue) !== '';
                // }).remove();
                $(this).find('p').remove();     
            });

            counter += 1;
        }

    });

    // Créer une classe CSS pour chaque nombre de lignes trouvé
    for (var i = 1; i <= maxLines; i++) {
        // Créer une règle CSS dynamique pour la classe
        var cssRule = ".code" + i + "::before{\n\tcontent: \"" + i + " \";\n\tfont-weight: bold;\n\tcolor: #6E7681;\n\tmargin-top: 10px;\n\tmargin-bottom: 10px;\n}";

        // Ajouter la règle CSS au style de la page
        $("<style>").text(cssRule).appendTo("body");
    }
});