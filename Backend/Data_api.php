<?php

$con = mysqli_connect("localhost","root","","pokemon"); 


$sql = "select * FROM `pokemondata`";

$result = $con->query($sql);
$json = $result->fetch_all(MYSQLI_ASSOC);


if (empty($json)){
echo json_encode(["Status"=>500]);	
}

else
{
//echo json_encode(["Status"=>200]);
echo json_encode($json);
}

