<?php
  require_once('./../admin/php/connect.php');
  class Services extends Connect{
    function __construct($nameObject){
      $this->$nameObject();
    }
    private function getSubcategoriesHome(){
      $query = "SELECT * FROM subcategory
      INNER JOIN category ON category.idCategory = subcategory.idCategory
      ORDER BY RAND() DESC LIMIT 6";
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
          'categoryUrl' => $line['categoryUrl'],
          'subcategoryUrl' => $line['subcategoryUrl']
        );
      }
      print_r(json_encode($listSubCategory));
    }
    private function getAllCategories(){
      $query = "SELECT * FROM subcategory
      INNER JOIN category ON category.idCategory = subcategory.idCategory
      ORDER BY subcategory.idCategory DESC";
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
          'categoryUrl' => $line['categoryUrl'],
          'subcategoryUrl' => $line['subcategoryUrl']
        );
      }
      print_r(json_encode($listSubCategory));
    }
    private function getByCategory(){
      $category = $_GET['category'];
      $query = "SELECT * FROM subcategory
      INNER JOIN category ON category.idCategory = subcategory.idCategory
      WHERE category.categoryUrl = '$category'
      ORDER BY subcategory.idCategory DESC";
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
          'categoryUrl' => $line['categoryUrl'],
          'subcategoryUrl' => $line['subcategoryUrl']
        );
      }
      print_r(json_encode($listSubCategory));
    }
    private function getProductsByFilters(){
      $category = $_GET['category'];
      $subcategory = $_GET['subcategory'];
      $query = "SELECT * FROM product
      INNER JOIN category ON category.idCategory = product.idCategory
      INNER JOIN subcategory ON   subcategory.idSubcategory = product.idSubcategory
      WHERE category.categoryUrl = '$category' AND subcategory.subcategoryUrl = '$subcategory'";
      $result = mysql_query($query, $this->connection()) or die(mysql_error());
      $listProducts= array();
      while($line = mysql_fetch_array($result)){
        $listProducts[] = array(
          'idProduct' => $line['idProduct'],
          'productName' => $line['productName'],
          'productImage' => $line['productImage'],
          'subcategoryDescription' => $line['subcategoryDescription']
        );
      }
      print_r(json_encode($listProducts));
    }
  }
  $nameObject = $_GET['namefunction'];
  new Services($nameObject);
