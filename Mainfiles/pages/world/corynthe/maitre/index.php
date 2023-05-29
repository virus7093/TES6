<?php 
    $jsonsave = $_COOKIE["data"];
    $save = json_decode($jsonsave, true);
    $avancement = $save[12];
    $surname = strtolower($save[4]);


    $dialog;

    $x = rand(1, 4);
    $dialog = "hihi , Que puis-je t'apprendre mon petit ?";

    if ($x === 2) {
        $dialog = "Tu as déjà visité Neverland ?</br>C'est la plus belle région que j'ai jamais visité !";
    }
    else if ($x === 3) {
        $dialog = "Vous êtes ma masseuse Thailandaise ?</br> Ah non tu es trop vieux pour que ça soit toi mon grand.";
    }
    else if ($x === 4 & $save[3] === "Femme") {
        $dialog = "Oh salut à toi petite,</br> je pourrais t'apprendre plein de choses tu sais...";
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
            <image class="sensei" src="../../../../img/Personnage/PNJ/sensei.png" height="644.5" width="644.5"></image>
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
            <div class="title">
                <h1>Maitre des competences</h1>
            </div>
            <div id="shop">
                <h1 hidden id="vide">Tu as tout acheté dans ma boutique !</h1>
            </div>

        </div>
        <div id="alert" hidden>
            <div id="box"></div>
        </div>
	</body>
	<script type="text/javascript" src="../../../../js/allskills.js"></script>
	<script type="text/javascript" src="../../../../js/world/boutiques/sensei.js"> </script>
	


</html>