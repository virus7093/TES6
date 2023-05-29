<?php 
    $jsonsave = $_COOKIE["data"];
    $save = json_decode($jsonsave, true);

    
    if($jsonsave === null) {
        header("Location: $oldlink/start_files/createperso/");
        die();
    }

    $level = $save[8][0];
    $pt = $save[8][3];

    $force= $save[6][0];
    $agilite= $save[6][1];
    $magie= $save[6][2];
    $constitution= $save[6][3];
    $precision= $save[6][4];
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
        <div class="bord1">
            <image <?php echo "src=\"$save[5]_cadre.png\""; ?> width="250" height="175"> </image>
            <?php echo "<h1> $save[1] - Level $level</h1>";?>
            <?php echo "<h2 id=\"pt\">$pt points de compétences</h2>";?>
            <a href="../../world/worldmap/">
                <button class="retour">Retour</button>
            </a>
        </div>
        <div class="bord2">
            <div>
                <h3 id="force">FOR : <?php echo "$force"; ?></h3>
                <button onclick="addpoint(0)" class="stats">+</button>
            </div>
            <div>
                <h3 id="agilite">AGI : <?php echo "$agilite"; ?></h3>
                <button onclick="addpoint(1)" class="stats">+</button>
            </div>
            <div>
                <h3 id="magie">MAG : <?php echo "$magie"; ?></h3>
                <button onclick="addpoint(2)" class="stats">+</button>
            </div>
            <div>
                <h3 id="constitution">CON : <?php echo "$constitution"; ?></h3>
                <button onclick="addpoint(3)" class="stats">+</button>
            </div>
            <div>
                <h3 id="precision">PRÉ : <?php echo "$precision"; ?></h3>
                <button onclick="addpoint(4)" class="stats">+</button>
            </div>
        </div>
        <div class="bord3">
            <h2><span>Force : </span> La force est l'une des statistiques des plus importantes pour les guerriers, les dégats à l'épée et de certains compétences dépend de celle-ci </br></br></br><span>Agilité : </span> L'agilité détermine ta capacité à esquiver une attaque. Elle peut s'avérer très utile lorsqu'on a pas énornément de PV </br></br></br><span>Magie : </span>La magie est l'une des statistiques des plus importantes pour un mage. la puissance des bâtons, la quantité de mana et la plupart des compétences dépendent d'elle</br></br></br> <span>Constitution : </span>La constitution est la statistique qui détermine tes points de vie en combat, elle peut donc s'avérer primordiale </br></br></br> <span>Précision : </span> La précision est l'une des statistiques des plus importantes pour un archer. Les dégats à l'arc et de certaines compétences dépendent d'elle</h2>
        </div>
          

    </body>

    <script type="text/javascript" src="../../../js/character/stats.js"></script>
</html>