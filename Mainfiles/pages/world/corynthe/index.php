<?php 
    $jsonsave = $_COOKIE["data"];
    $save = json_decode($jsonsave, true);
    $actual_link = $_SERVER["REQUEST_URI"];
    $oldlink = substr($actual_link, 0, strlen($actual_link)-16);

    if($jsonsave === null) {
        header("Location: $oldlink/start_files/createperso/");
        die();
    }

    $id = $save[0];
    $fp = fopen("../../../saves/$id", 'w');
    fwrite($fp, $jsonsave);
    fclose($fp);
    $level = $save[8][0];
    $xp = $save[8][1];
    $xprequis = $save[8][2];
    $xpbar = ($save[8][1]/$save[8][2])*100;
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
        <div class="shadow"></div>
        <div class="bord1">
            <image <?php echo "src=\"$save[5]_cadre.png\""; ?> width="250" height="175"> </image>
            <?php echo "<h1>Level $level</h1>";?>
            <?php echo "<h2>$save[7] pièces d'or</h2>";?>
            <?php echo "<h3>$save[1]</h3>";?>


            <a href="../../character/stats">
                <button class="stats">Statistiques</button>
            </a>
            <a href="../../character/skills">
                <button class="skills">Compétences</button>
            </a>
        </div>
        <div class="bord2">
            <div class="audioname">Audio</div>
            <div class="audionav">
				<button class="precedent" onclick="precedent()"><span>⬅</span></button>
				<label class="pausebutton">
					<input type="checkbox" id="pbutton"  onclick="pauseresume()">
					<span class="button"><span>▶</span></span>
				</label>
				<button class="skip" onclick="skip()"><span>➡</span></button>
			</div>
            <div class="xpbar">
                <div class="progress" style="width: <?php echo "$xpbar";?>%"></div>
                <div class="xptext">
                        <?php echo "<h6> $xp xp / $xprequis xp </h6>"; ?>
                </div>
            </div>
        </div>
        <div class="map">
            <h1>Corynthe</h1>
            <a href="../worldmap/">
                <h2>Retour à la carte du Monde</h2>
            </a>

            <a href="./forgeron">
                <div class="forgeron">
                    <div>
                        <h3>Forgeron</h3>
                    </div>
                    <image src="../../../img/Personnage/PNJ/forgeron.png" height="306" width="169"></image>
                </div>
            </a>

            <a href="./maitre">
                <div class="maitre">
                    <div>
                        <h3>Sensei</h3>
                    </div>
                    <image src="../../../img/Personnage/PNJ/sensei.png" height="211,5" width="211,5"></image>
                </div>
            </a>

        </div>
	</body>
	
	<script type="text/javascript" src="../../../js/world/worldmap.js"> </script>


</html>