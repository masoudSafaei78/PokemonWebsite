<?php 

session_start();

$con = mysqli_connect("localhost","root","","pokemon"); 

$email = $_POST['email'];
$name = $_POST['user'];
$pass = $_POST['password'];
$cpass= $_POST['passwordConf'];

$un = "select * from usertable where username = '$name'";
$result = mysqli_query($con , $un);
 $num = mysqli_num_rows($result);

$e = "select * from usertable where email = '$email'"; 
$result_e = mysqli_query($con , $e);
 $nume = mysqli_num_rows($result_e);

if($nume==1){
echo json_encode(["Status"=>300]);	///email already taken
header('location:regiser.php');
}
else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
 echo json_encode(["Status"=>400]); 	///Invalid email format
 header('location:regiser.php');

}
else if($num==1){
echo json_encode($arr=["Status"=>500]);	 ///username already taken
header('location:regiser.php');

}
else if($cpass!=$pass){
echo json_encode(["Status"=>600]);	///Passwords aren't match
header('location:regiser.php');

}

else{
	$reg = "insert into usertable(email, username, password) values('$email', '$name' , '$pass')";
	mysqli_query($con , $reg);
echo json_encode(["Status"=>200]);  ///registered seccussfully
} 
?>
