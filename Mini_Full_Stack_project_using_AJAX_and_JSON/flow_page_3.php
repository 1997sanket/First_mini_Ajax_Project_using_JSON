<?php
    $servername="localhost";
    $username="root";
    $password="";
    $dbname="my_website";

   $con= new mysqli($servername,$username,$password,$dbname);  //creating connection

   if($con->connect_error)
   {
       die("Connection error : " .$con->connect_error);
   }


   /*
   Just for reference my database looked something like this

   id   firstname   lastname    email                   password    reg_date
   1    Sanket      Kamble      1997sanket@gmail.com    ----        (something)
   2    Raj         Mathur      Raj......               ----        (something)
   .
   . 
   . 



   */


   $email=$_GET["key"];

  $sql="select firstname, lastname from new_reg where email='$email'";

   $result=$con->query($sql);  //creates an object mysqli_result and returns reference 

  if($result->num_rows>0)  //num_rows member present in class mysqli_result
  {
      while($row=$result->fetch_assoc())   //method present in class mysqli_result, fetches each row and puts it into $row
       
      echo json_encode($row);      //when ready state becomes if statement on JS page becomes true 
                                  //NOTHING IS PRINTED ON PHP PAGE, echo json_encode returns to xml.responseText 
                                  //We are printing the JSON data as it is.
  }

  
  ?>





