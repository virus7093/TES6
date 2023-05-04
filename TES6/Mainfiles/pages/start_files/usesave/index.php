<?php
    $save = $_POST["savecook"];
    $path = substr(__DIR__, 0, (strlen(__DIR__)-26))."\saves\\$save";
    $actual_link = $_SERVER["REQUEST_URI"];
    $oldlink = substr($actual_link, 0, strlen($actual_link)-9);


    
    if (file_exists($path)) {
        $jsonString = file_get_contents($path);
        $save = json_decode($jsonString, true);
        setcookie("data", $jsonString, 0, "/");
    }
    else {
        header("Location: $oldlink/createperso/");
        die();
    }

    
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
                echo "<h2>".$save[1]." | ".$save[4]." ".$save[2]."</h2>";
                echo "<h3> Level ".$save[8][0]." - ".$save[7]." pièces d'or </h3>";
            ?>
            <button id="oui" type="button" onclick="oui()">Oui</button>
            <button id="non" type="button" onclick="non()">Non</button>
        </body>

        <script type="text/javascript" src="../../../js/usesave.js"></script>
    </html>

