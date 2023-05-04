<?php 
    $jsonsave = $_COOKIE["Data"];
    $save = json_decode($jsonsave)
?>

<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" href="index2.css">
            <title>The Elder Scrolls VI</title>
            <link rel="shortcut icon" href="../../../img/logo.png"/>
            <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
        </head>
        <body>
			<link rel="Character" href="$save[5]"/>
            <div class="shadow"></div>
            <button id="oui" type="button" onclick="oui()">Retour au jeu</button>
            <button id="non" type="button" onclick="non()">Quitter la partie</button>
        </body>

        <script type="text/javascript" src="../../../js/usesave.js"></script>
    </html>