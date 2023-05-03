<?php
    $Name = $_POST["Name"];
    $Race = $_POST["Race"];
    $Sexe = $_POST["Sexe"];
    $Class = $_POST["Class"];

    $IMG = "feur";

    if($Sexe === "Homme") {
        if($Race === "Humain") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Homme/Humain/mage";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Homme/Humain/archer";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Homme/Humain/guerrier";
            }
        }
        else if($Race === "Elfe") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Homme/Elfe/mage";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Homme/Elfe/archer";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Homme/Elfe/guerrier";
            }
        }
    }
    else if ($Sexe === "Femme"){
        if($Race === "Humain") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Femme/Humain/mage";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Femme/Humain/archer";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Femme/Humain/guerrier";
            }
        }
        else if($Race === "Elfe") {
            if($Class === "Mage") {
                $IMG = "../../../img/Personnage/Femme/Elfe/mage";
            }
            else if($Class === "Archer"){
                $IMG = "../../../img/Personnage/Femme/Elfe/archer";
            }
            else if($Class === "Barbare"){
                $IMG = "../../../img/Personnage/Femme/Elfe/guerrier";
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
    }
    else if($Class === "Archer"){
        $Force -= 1;
        $Magie -= 1;
        $Precision += 2;
    }
    else if($Class === "Barbare"){
        $Force += 2;
        $Magie -= 1;
        $Precision -= 1;
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
    setcookie("Data", $jsonString)
?>


