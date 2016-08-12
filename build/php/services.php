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
  }
  $nameObject = $_GET['namefunction'];
  new Services($nameObject);
