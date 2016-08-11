<?php
  require_once('./connect.php');
  class Functions extends Connect{
    function __construct($nameObject){
      $this->$nameObject();
    }
    private function sessionDestroy(){
      session_start();
      session_destroy();
    }
    private function getNameImage($dataFiles, $key){
      $characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < 6; $i++)
          $randomString .= $characters[rand(0, $charactersLength - 1)];
      $ext = end((explode(".", $dataFiles["setImage"]["name"][$key])));
      $fileName = date("YmdHis").$randomString.".".$ext;
      return $fileName;
    }
    private function setBannerImage(){
      parse_str($_POST['data'], $data);
      $urlBanner =  $data['imageURL'];
      $bannerName =  $data['bannerName'];
      foreach ($_FILES['setImage']["name"] as $key => $value) {
        $fileName = $this->getNameImage($_FILES, $key);
        $fileType = $_FILES["setImage"]["type"][$key];
        $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
        move_uploaded_file($fileTemp, "../src/images/homeSlider/".$fileName);
  			$query = "INSERT INTO  homebanner (idHomeBanner, bannerName, bannerUrl, bannerImageName) VALUES (NULL,'".$bannerName."','".$urlBanner."','".$fileName."')";
  			$result = mysql_query($query, $this->connection()) or die(mysql_error());
  		}
    }
    private function removeImageSlideHome(){
      $idHomeBanner = $_POST['idHomeBanner'];
      $query = "SELECT bannerImageName FROM homebanner WHERE idHomeBanner =".$idHomeBanner;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $bannerImageName = $line['bannerImageName'];
      unlink("../src/images/homeSlider/".$bannerImageName);
      $query = "DELETE FROM homebanner WHERE idHomeBanner = ".$idHomeBanner;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function addNewProduct(){
      parse_str($_POST['data'], $data);
      foreach ($_FILES['setImage']["name"] as $key => $value) {
          $fileName = $this->getNameImage($_FILES, $key);
          $fileType = $_FILES["setImage"]["type"][$key];
          $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
          move_uploaded_file($fileTemp, "../src/images/products/".$fileName);
          $query = "INSERT INTO  product (productName, productImage, idSubcategory, idCategory) VALUES ('".$data['productName']."','".$fileName."', ".$data['productSubCategory'].", ".$data['productCategory'].")";
          $result = mysql_query($query, $this->connection()) or die(mysql_error());
        }
    }
    private function removeProduct(){
      $idProduct = $_POST['idProduct'];
      $query = "SELECT productImage FROM product WHERE idProduct =".$idProduct;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $productImage = $line['productImage'];
      unlink("../src/images/products/".$productImage);
      $query = "DELETE FROM product WHERE idProduct = ".$idProduct;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function modifyProduct(){
      parse_str($_POST['data'], $data);
      $query = "UPDATE product SET productName = '".$data['productName']."', idSubcategory = ".$data['productSubCategory'].", idCategory = ".$data['productCategory']." WHERE idProduct =  ".$data['productId'];
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function modifyProductImage(){
      $productId = $_POST['productId'];
      $query = "SELECT productImage FROM product WHERE idProduct = ".$productId;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $productImage = $line['productImage'];
      unlink("../src/images/products/".$productImage);
      foreach ($_FILES['setImage']["name"] as $key => $value) {
          $fileName = $this->getNameImage($_FILES, $key);
          $fileType = $_FILES["setImage"]["type"][$key];
          $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
          move_uploaded_file($fileTemp, "../src/images/products/".$fileName);
          $query = "UPDATE product SET productImage = '".$fileName."' WHERE idProduct = ".$productId;
          $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }
    }
    private function addCategory(){
      parse_str($_POST['data'], $data);
      $categoryName = $data['categoryName'];
      $query = "INSERT INTO category (categoryName) VALUES ('".$categoryName."')";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function removeCategory(){
      $idCategory = $_POST['idCategory'];
      $query = "DELETE FROM category WHERE idCategory = ".$idCategory;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function addSubcategory(){
      parse_str($_POST['data'], $data);
      foreach ($_FILES['setImage']["name"] as $key => $value) {
          $fileName = $this->getNameImage($_FILES, $key);
          $fileType = $_FILES["setImage"]["type"][$key];
          $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
          move_uploaded_file($fileTemp, "../src/images/products/subcategory/".$fileName);
          $query = "INSERT INTO subcategory (subcategoryName, subcategoryImage, subcategoryDescription, idCategory) VALUES ('".$data['subcategoryName']."','".$fileName."', '".$data['subcategoryDescription']."', ".$data['subCategoryCategory'].")";
          $result = mysql_query($query, $this->connection()) or die(mysql_error());
        }
    }
    private function removeSubcategory(){
      $idSubcategory = $_POST['idSubcategory'];
      $query = "SELECT subcategoryImage FROM subcategory WHERE idSubcategory =".$idSubcategory;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $subcategoryImage = $line['subcategoryImage'];
      unlink("../src/images/products/subcategory/".$subcategoryImage);
      $query = "DELETE FROM subcategory WHERE idSubcategory = ".$idSubcategory;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function modifySubcategory(){
      parse_str($_POST['data'], $data);
      $query = "UPDATE subcategory SET subcategoryName = '".$data['subcategoryName']."', subcategoryDescription = '".$data['subcategoryDescription']."', idCategory = ".$data['subCategoryCategory']." WHERE idSubcategory =  ".$data['subcategoryId'];
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
    private function modifySubcategoryImage(){
      $subcategoryId = $_POST['subcategoryId'];
      $query = "SELECT subcategoryImage FROM subcategory WHERE idSubcategory = ".$subcategoryId;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $subcategoryImage = $line['subcategoryImage'];
      unlink("../src/images/products/subcategory/".$subcategoryImage);
      foreach ($_FILES['setImage']["name"] as $key => $value) {
          $fileName = $this->getNameImage($_FILES, $key);
          $fileType = $_FILES["setImage"]["type"][$key];
          $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
          move_uploaded_file($fileTemp, "../src/images/products/subcategory/".$fileName);
          $query = "UPDATE subcategory SET subcategoryImage = '".$fileName."' WHERE idSubcategory = ".$subcategoryId;
          $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }
    }
    private function addNewBlogTip(){
      parse_str($_POST['data'], $data);
      $date = date("Y-m-d");
      $query = "INSERT INTO blogtip (blogtipName, blogtipDate, blogtipImage, blogtipNote) VALUES ('".$data['name']."', '".$date."', '".$data['cover']."', '".$data['post']."')";
      $result = mysql_query($query, $this->connection());
    }
    private function removeBlogTip(){
      $idBlogtip = $_POST['idBlogtip'];
      $query = "DELETE FROM blogtip WHERE idBlogtip = ".$idBlogtip;
      $result = mysql_query($query, $this->connection());
    }
    private function modifyBlogTip(){
      parse_str($_POST['data'], $data);
      $query = "UPDATE blogtip SET blogtipName = '".$data['name']."',  blogtipImage = '".$data['cover']."', blogtipNote = '".$data['post']."' WHERE idBlogtip = ".$data['id'];
      $result = mysql_query($query, $this->connection());
    }
    private function setImagesLibrary(){
      foreach ($_FILES['setImage']["name"] as $key => $value) {
        $fileName = $this->getNameImage($_FILES, $key);
        $fileType = $_FILES["setImage"]["type"][$key];
        $fileTemp = $_FILES["setImage"]["tmp_name"][$key];
        move_uploaded_file($fileTemp, "../src/images/document/".$fileName);
        $query = "INSERT INTO  imageslibrary (idImage, nameImage) VALUES (NULL,'".$fileName."')";
        $result = mysql_query($query, $this->connection()) or die(mysql_error());
      }
    }
    private function deleteImageLibrary(){
      $idImage = $_POST['idImage'];
      $query = "SELECT nameImage FROM imageslibrary WHERE idImage =".$idImage;
      $result = mysql_query($query, $this->connection());
      $line = mysql_fetch_array($result);
      $nameImage = $line['nameImage'];
      unlink("../src/images/document/".$nameImage);
      $query = "DELETE FROM imageslibrary WHERE idImage = ".$idImage;
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
    }
  }
  $nameObject = $_POST['namefunction'];
  new Functions($nameObject);
