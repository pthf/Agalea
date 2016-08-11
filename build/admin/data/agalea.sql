-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-08-2016 a las 12:51:26
-- Versión del servidor: 5.6.24
-- Versión de PHP: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `agalea`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `adminuser`
--

CREATE TABLE IF NOT EXISTS `adminuser` (
  `idAdmin` int(11) NOT NULL,
  `adminName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `adminPassword` char(64) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `adminLastConnection` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=ascii;

--
-- Volcado de datos para la tabla `adminuser`
--

INSERT INTO `adminuser` (`idAdmin`, `adminName`, `adminPassword`, `adminLastConnection`) VALUES
(0, 'admin', '$2y$10$yavwPc4idejZo0c2fV0gFOPX8QdGd1YogRnRWYYEPhBGyIbzvV6B2', '2016-08-04 11:55:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blogtip`
--

CREATE TABLE IF NOT EXISTS `blogtip` (
  `idBlogtip` int(11) NOT NULL,
  `blogtipName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `blogtipDate` date NOT NULL,
  `blogtipImage` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `blogtipNote` text CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `blogtip`
--

INSERT INTO `blogtip` (`idBlogtip`, `blogtipName`, `blogtipDate`, `blogtipImage`, `blogtipNote`) VALUES
(5, 'jemplo', '2016-08-11', 'http://localhost/www/Agalea/build/admin/src/images/document/20160810122301KCGVB4.jpg', '<p>Initial content</p>\r\n<p><a href="http://localhost/www/Agalea/build/admin/src/images/document/20160810122301FBXMJ0.jpg">http://localhost/www/Agalea/build/admin/src/images/document/20160810122301FBXMJ0.jpg</a></p>\r\n<p>&nbsp;<img src="http://localhost/www/Agalea/build/admin/src/images/document/20160810122301KCGVB4.jpg" alt="" width="274" height="395" /></p>\r\n<p>&nbsp;</p>\r\n<p>http://localhost/www/Agalea/build/admin/src/images/document/20160810122301FBXMJ0.jpg</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `idCategory` int(11) NOT NULL,
  `categoryName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`idCategory`, `categoryName`) VALUES
(1, 'Mem');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `homebanner`
--

CREATE TABLE IF NOT EXISTS `homebanner` (
  `idHomeBanner` int(11) NOT NULL,
  `bannerName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `bannerUrl` varchar(145) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `bannerImageName` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `homebanner`
--

INSERT INTO `homebanner` (`idHomeBanner`, `bannerName`, `bannerUrl`, `bannerImageName`) VALUES
(1, 'locasl', 'http://localhost/www/Agalea/build/admin/panel/index.php#/home-slider', '20160811125016SKAQJ1.jpg'),
(2, 'locasl', 'http://localhost/www/Agalea/build/admin/panel/index.php#/home-slider', '20160811125016F21CFY.jpg'),
(3, 'locasl', 'http://localhost/www/Agalea/build/admin/panel/index.php#/home-slider', '20160811125016GCC0KC.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imageslibrary`
--

CREATE TABLE IF NOT EXISTS `imageslibrary` (
  `idImage` int(11) NOT NULL,
  `nameImage` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=ascii;

--
-- Volcado de datos para la tabla `imageslibrary`
--

INSERT INTO `imageslibrary` (`idImage`, `nameImage`) VALUES
(10, '20160810122301KCGVB4.jpg'),
(11, '20160810122301FBXMJ0.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `idProduct` int(11) NOT NULL,
  `productName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productImage` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `idSubcategory` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`idProduct`, `productName`, `productImage`, `idSubcategory`, `idCategory`) VALUES
(1, 'http://localhost/www/Agalea/build/admin/panel', '20160811125048HEYH58.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategory`
--

CREATE TABLE IF NOT EXISTS `subcategory` (
  `idSubcategory` int(11) NOT NULL,
  `subcategoryName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryImage` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryDescription` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `subcategory`
--

INSERT INTO `subcategory` (`idSubcategory`, `subcategoryName`, `subcategoryImage`, `subcategoryDescription`, `idCategory`) VALUES
(1, 'mem', '201608111250393ZWKBG.jpg', 'http://localhost/www/Agalea/build/admin/panel/index.php#/home-slider', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blogtip`
--
ALTER TABLE `blogtip`
  ADD PRIMARY KEY (`idBlogtip`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indices de la tabla `homebanner`
--
ALTER TABLE `homebanner`
  ADD PRIMARY KEY (`idHomeBanner`);

--
-- Indices de la tabla `imageslibrary`
--
ALTER TABLE `imageslibrary`
  ADD PRIMARY KEY (`idImage`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`,`idSubcategory`,`idCategory`),
  ADD KEY `fk_product_subcategory1_idx` (`idSubcategory`,`idCategory`);

--
-- Indices de la tabla `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`idSubcategory`,`idCategory`),
  ADD KEY `fk_subcategory_category_idx` (`idCategory`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blogtip`
--
ALTER TABLE `blogtip`
  MODIFY `idBlogtip` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `homebanner`
--
ALTER TABLE `homebanner`
  MODIFY `idHomeBanner` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `imageslibrary`
--
ALTER TABLE `imageslibrary`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT de la tabla `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `idSubcategory` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `fk_product_subcategory1` FOREIGN KEY (`idSubcategory`, `idCategory`) REFERENCES `subcategory` (`idSubcategory`, `idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `fk_subcategory_category` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
