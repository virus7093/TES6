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
            <a href="../../world/worldmap/">
                <button class="retour">Retour</button>
            </a>
        </div>
        <div class="bord2">
            <div class="skills" id="skills">
            </div>
            <div class="activeskills">
                <div class="skill"> <!--Skill 1 -->
                    <h1>Compétence 1 :</h1>
                    <div class="skill" ondrop="drop(event)" ondragover="allowDrop(event)" id="0"></div>
                </div>
                <div class="skill"> <!--Skill 2 -->
                    <h1>Compétence 2 :</h1>
                    <div class="skill" ondrop="drop(event)" ondragover="allowDrop(event)" id="1"></div>
                </div>
                <div class="skill"> <!--Skill 3 -->
                    <h1>Compétence 3 :</h1>
                    <div class="skill" ondrop="drop(event)" ondragover="allowDrop(event)" id="2"></div>
                </div>
                <div class="skill"> <!--Skill 4 -->
                    <h1>Compétence 4 :</h1>
                    <div class="skill" ondrop="drop(event)" ondragover="allowDrop(event)" id="3"></div>
                </div>
            </div>
        </div>
          

    </body>

    <script type="text/javascript" src="../../../js/character/skills.js"></script>
    <script type="text/javascript" src="../../../js/allskills.js"></script>
</html>