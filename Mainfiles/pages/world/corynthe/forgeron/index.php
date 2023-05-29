<?php 
    $jsonsave = $_COOKIE["data"];
    $save = json_decode($jsonsave, true);
    $avancement = $save[12];
    $surname = strtolower($save[4]);

    if ($save[3] === "Femme" && $save[4] === "Archer") {
        $surname = "archère";
    }

    $dialog = "Tu m'as l'air bien frêle jeune $surname. </br> Tu as bien besoin d'équipement !";

    
    if($avancement[0]) {
        $dialog = "Salut à toi $surname, ah oui c'est toi qui a battu le gobelin, laisse-moi donc t'équiper !";
    }
    if ($avancement[1]) {
        $dialog = "Salutations à toi $surname ! Félicitations pour avoir battu l'orc ! Comment t'appelles-tu ?";
    }
    if ($avancement[2]) {
        $dialog = "Salutations à toi $surname !</br> Tu as battu Udyr le Démon mais le Roi-Démon Cheli sévit encore, sauves-nous... $save[1] ?";
    }
    if ($avancement[3]) {
        $dialog = "MERCI $save[1] ! Tu as vaincu le Roi-Démon Cheli, comment puis-je te remercier ?";
    }

?>

<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="./index.css">
        <title>The Elder Scrolls VI</title>
        <link rel="shortcut icon" href="../../../../img/logo.png"/>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
	</head>
	</body>
        <div class="shadow"></div>
        <div class="border1">
            <image class="forgeron" src="../../../../img/Personnage/PNJ/forgeron.png" height="918" width="507"></image>
            <div id="dialog">
                <?php echo "$dialog";?>
            </div>
            <div class="solde">
                <h1>Bourse</h1>
                <h2 id="or_amount"><?php echo "$save[7] or";?></h2>
            </div>
            <a href="../">
                <button class="retour">Partir</button>
            </a>
        </div>
        <div class="border2">
            <div class="actual">
                <h1>Tier actuel des equipements</h1>
                <div class="tiers">
                    <div class="armename">Arme</div>
                    <div id="arme"></div>

                    <div class="mgauchename">Main Gauche</div>
                    <div id="mgauche"></div>

                    <div class="armurename">Armure</div>
                    <div id="armure"></div>
                </div>
            </div>
            <div id="shop">
                <h1 hidden id="vide">Tu as tout acheté dans ma boutique !</h1>
            </div>

        </div>
        <div id="alert" hidden>
            <div id="box"></div>
        </div>
	</body>
	
	<script type="text/javascript" src="../../../../js/world/boutiques/forgeron.js"> </script>


</html>