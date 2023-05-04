<?php 
    $jsonsave = $_COOKIE["data"];
    $save = json_decode($jsonsave, true);

    $id = $save[0];
    $fp = fopen("../../../saves/$id", 'w');
    fwrite($fp, $jsonsave);
    fclose($fp);

    

?>