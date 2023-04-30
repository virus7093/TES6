<?php
    $save = json_decode($_POST["savecook"]);
    setcookie("Sauvegarde", json_encode($save));
?>

<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="index.css">
        <title>The Elder Scrolls VI</title>
        <link rel="shortcut icon" href="../../../img/logo.png"/>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    </head>
    <body>
        <div class="shadow"></div>
        <h1>Est-tu sur de vouloir utiliser cette sauvegarde ?</h1>
        <?php 
            echo "<h2>".$save[0]." | ".$save[3]." ".$save[1]."</h2>";
            echo "<h3> Level ".$save[7][0]." - ".$save[6]." pièces d'or </h3>";
        ?>
        <button id="oui" type="button" onclick="oui()">Oui</button>
        <button id="non" type="button" onclick="non()">Non</button>
    </body>

    <script type="text/javascript" src="../../../js/usesave.js"></script>
</html>
