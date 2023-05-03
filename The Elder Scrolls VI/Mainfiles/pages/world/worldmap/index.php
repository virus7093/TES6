<?php 
    $jsonsave = $_COOKIE["Data"];
    $save = json_decode($jsonsave)

    $id = $save[0]
    $fp = fopen("../../../saves/$id", 'w');
    fwrite($fp, $jsonsave);
    fclose($fp);

    

?>