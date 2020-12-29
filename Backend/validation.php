  <?php 

session_start();

$con = mysqli_connect("localhost","root","","pokemon"); 
$email = $_POST['email'];
$pass = $_POST['password'];

$s = "select * from usertable where email = '$email' && password = '$pass'";
$result = mysqli_query($con , $s);
 $num = mysqli_num_rows($result);

if($num==1){
	$_SESSION['email'] = $email;/// seccussfull
	//header('location:home.php');
	echo json_encode(["Status"=>200]);
	}
	else{

	echo json_encode(["Status"=>400]);
	header('location:login.php');
 
		} 
?>
