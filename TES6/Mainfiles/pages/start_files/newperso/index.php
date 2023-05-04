<?php
    $Name = $_POST["Name"];
    $Race = $_POST["Race"];
    $Sexe = $_POST["Sexe"];
    $Class = $_POST["Class"];
	$surname = strtolower($Class);

    $IMG = "feur";

    if($Sexe === "Homme") {
        if($Race === "Humain") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Homme/Humain/mage.png";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Homme/Humain/archer.png";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Homme/Humain/guerrier.png";
            }
        }
        else if($Race === "Elfe") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Homme/Elfe/mage.png";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Homme/Elfe/archer.png";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Homme/Elfe/guerrier.png";
            }
        }
    }
    else if ($Sexe === "Femme"){
        if($Race === "Humain") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Femme/Humain/mage.png";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Femme/Humain/archer.png";
				$surname = "archère";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Femme/Humain/guerrier.png";
            }
        }
        else if($Race === "Elfe") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Femme/Elfe/mage.png";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Femme/Elfe/archer.png";
				$surname = "archère";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Femme/Elfe/guerrier.png";
            }
        }
    }

    $Force = 4;
    $Agilite = 6;
    $Magie = 4;
    $Precision = 4;
    $Constitution = 7;

    $Competences = array(False, False, False, False);

    $Usedcomp = array(-1, -1, -1, -1);

    $Arme = null;
    $Mgauche = null;
    $Armure = null;


    if($Race === "Humain") {
        $Agilite -= 1;
        $Constitution += 1;
    }
    else if($Race === "Elfe"){
        $Agilite += 1;
        $Constitution -= 1;
    }

    if($Class === "Mage") {
        $Force -= 1;
        $Magie += 2;
        $Precision -= 1;
		$Arme = array(0,0);
		$Mgauche = 1;
		$Armure = 0;
    }
    else if($Class === "Archer"){
        $Force -= 1;
        $Magie -= 1;
        $Precision += 2;
		$Arme = array(1,1);
		$Mgauche = 0;
		$Armure = 0;
    }
    else if($Class === "Barbare"){
        $Force += 2;
        $Magie -= 1;
        $Precision -= 1;
		$Arme = array(2,0);
		$Mgauche = 0;
		$Armure = 1;
    }

    $Argent = 10;

    $Level = 0;
    $Xp = 0;
    $Xprequis = 50;

    
    $Avancement = array(False, False, False, False);



    $id = uniqid();
    $jsonData = array(
        $id,
        $Name, 
        $Race, 
        $Sexe, 
        $Class, 
        $IMG, 
        array(
            $Force,
            $Agilite,
            $Magie,
            $Constitution,
            $Precision
        ),//Stats
        $Argent,
        array(
            $Level,
            $Xp,
            $Xprequis
        ),//all XP
        $Competences,
        $Usedcomp,
        array(
            $Arme,
            $Mgauche,
            $Armure
        ),//Stuff
        $Avancement
    );
    $jsonString = json_encode($jsonData, JSON_PRETTY_PRINT);
    $fp = fopen("../../../saves/$id", 'w');
    fwrite($fp, $jsonString);
    fclose($fp);
    setcookie("data", $jsonString, 0, "/")
?>


<!DOCTYPE html>
<html>
	<head>
		<link rel="stylesheet" href="./index.css">
        <title>The Elder Scrolls VI</title>
        <link rel="shortcut icon" href="../../../img/logo.png"/>
        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
	</head>
	</body>
		<video type="video/mp4" src="../../../video/background/smoke.mp4" autoplay loop preload="auto" muted></video>
		<div>
			<image <?php echo "src=\"$IMG\""; ?>> </image>
            <div class="text">
			    <h1 id="h1">Salut à toi <?php echo "$surname";?> ! Bienvenue en Elweyr ! Célèbre région de Tamriel.</br></br>Une grande menace est présente dans la région, trois terribles Mal sévit dans les Bois de la Pénombre... </br></br> Aide-nous <?php echo "$surname";?>, gloire et argent seront à toi si tu réussis dans ta quête...</h1>
			    <h2 id="h2">Si tu veux t'arrêter pour reprendre ton aventure, garde ce code précisieument, il te permettra de reprendre ton aventure plus tard : <span><?php echo "$id"?></span> </br></br>Les sauvegardes sont automatiques donc pas de panique jeune <?php echo "$surname";?></h2>
            </div>
			
		</div>
        <h3 id="h3"hidden>Appuie sur Entrée pour rentrer en Elweyr</h3>
	</body>
	
	<script type="text/javascript" src="../../../js/newperso.js"> </script>


</html>


