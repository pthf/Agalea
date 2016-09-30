<?php
  require_once('./connect.php');
  class Services extends Connect{
    function __construct($nameObject){
      $this->$nameObject();
    }
    private function getImagesSliderHome(){
      $query = "SELECT * FROM homebanner ORDER BY idHomeBanner DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listImages = array();
      while($line = mysql_fetch_array($result)){
        $listImages[] = array(
          'idHomeBanner' => $line['idHomeBanner'],
          'bannerName' => $line['bannerName'],
          'bannerUrl' => $line['bannerUrl'],
          'bannerImageName' => $line['bannerImageName']
        );
      }
      print_r(json_encode($listImages));
    }
    private function getProducts(){
      $query = "SELECT * FROM product
      INNER JOIN category ON product.idCategory = category.idCategory
      INNER JOIN subcategory ON product.idSubcategory = subcategory.idSubcategory
      ORDER BY idProduct DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listProduct = array();
      while($line = mysql_fetch_array($result)){
        $listProduct[] = array(
          'idProduct' => $line['idProduct'],
          'productName' => $line['productName'],
          'productImage' => $line['productImage'],
          'categoryName' => $line['categoryName'],
          'subcategoryName' => $line['subcategoryName'],
          'idCategory' => $line['idCategory'],
          'idSubcategory' => $line['idSubcategory'],
          'productUrl' => $line['productUrl'],
          'productDescription' => $line['productDescription']
        );
      }
      print_r(json_encode($listProduct));
    }
    private function getCategories(){
      $query = "SELECT * FROM category ORDER BY idCategory DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listCategory = array();
      while($line = mysql_fetch_array($result)){
        $listCategory[] = array(
          'idCategory' => $line['idCategory'],
          'categoryName' => $line['categoryName'],
          'categoryUrl' => $line['categoryUrl']
        );
      }
      print_r(json_encode($listCategory));
    }
    private function getSubCategories(){
      $query = "SELECT * FROM subcategory
      INNER JOIN category ON category.idCategory = subcategory.idCategory
      ORDER BY idSubcategory DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listSubCategory = array();
      while($line = mysql_fetch_array($result)){
        $listSubCategory[] = array(
          'idSubcategory' => $line['idSubcategory'],
          'idCategory' => $line['idCategory'],
          'subcategoryName' => $line['subcategoryName'],
          'subcategoryImage' => $line['subcategoryImage'],
          'subcategoryDescription' => $line['subcategoryDescription'],
          'categoryName' => $line['categoryName'],
          'subcategoryUrl' => $line['subcategoryUrl']
        );
      }
      print_r(json_encode($listSubCategory));
    }
    private function getBlogTips(){
      $query = "SELECT * FROM blogtip ORDER BY idBlogtip DESC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listBlog = array();
      while($line = mysql_fetch_array($result)){
        $listBlog[] = array(
          'idBlogtip' => $line['idBlogtip'],
          'blogtipName' => $line['blogtipName'],
          'blogtipDate' => $line['blogtipDate'],
          'blogtipImage' => $line['blogtipImage'],
          'blogtipNote' => $line['blogtipNote']
        );
      }
      print_r(json_encode($listBlog));
    }
    private function getImagesLibrary(){
      $query = "SELECT * FROM imageslibrary ORDER BY idImage ASC";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listImages = array();
      while($line = mysql_fetch_array($result)){
        $listImages[] = array(
          'idImage' => $line['idImage'],
          'nameImage' => $line['nameImage'],
        );
      }
      print_r(json_encode($listImages));
    }
  }
  $nameObject = $_GET['namefunction'];
  new Services($nameObject);
