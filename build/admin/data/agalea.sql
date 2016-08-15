-- phpMyAdmin SQL Dump
-- version 4.4.11
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-08-2016 a las 14:16:46
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
(0, 'admin', '$2y$10$yavwPc4idejZo0c2fV0gFOPX8QdGd1YogRnRWYYEPhBGyIbzvV6B2', '2016-08-12 12:51:33');

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
(4, 'tip number three', '2016-08-15', 'http://localhost/www/Agalea/build/admin/src/images/document/20160815113549IEM4PY.jpg', '<p>&nbsp;</p>\r\n<div>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n<p>&nbsp;</p>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n<p style="text-align: center;"><img src="http://localhost/www/Agalea/build/admin/src/images/document/20160815113549IEM4PY.jpg" alt="" width="50%" height="NaN" />&nbsp;</p>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>\r\n<p>&nbsp;</p>\r\n<p>Lorem Ipsum&nbsp;es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno est&aacute;ndar de las industrias desde el a&ntilde;o 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido us&oacute; una galer&iacute;a de textos y los mezcl&oacute; de tal manera que logr&oacute; hacer un libro de textos especimen. No s&oacute;lo sobrevivi&oacute; 500 a&ntilde;os, sino que tambien ingres&oacute; como texto de relleno en documentos electr&oacute;nicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creaci&oacute;n de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y m&aacute;s recientemente con software de autoedici&oacute;n, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.&nbsp;</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>\r\n</div>'),
(5, 'tip # 4', '2016-08-15', 'http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg', '<p style="text-align: center;"><a href="http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg">http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg</a></p>\r\n<p style="text-align: center;"><img src="http://localhost/www/Agalea/build/admin/src/images/document/20160815113549KIFRKX.jpg" alt="" width="80%" height="NaN" /></p>\r\n<p style="text-align: center;">&nbsp;</p>');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE IF NOT EXISTS `category` (
  `idCategory` int(11) NOT NULL,
  `categoryName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `categoryUrl` varchar(450) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`idCategory`, `categoryName`, `categoryUrl`) VALUES
(34, 'Hombres', 'hombres'),
(35, 'Niños', 'ninos'),
(36, 'Mujeres', 'mujeres'),
(37, 'Fin de temporada', 'fin-de-temporada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `homebanner`
--

CREATE TABLE IF NOT EXISTS `homebanner` (
  `idHomeBanner` int(11) NOT NULL,
  `bannerName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `bannerUrl` varchar(145) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `bannerImageName` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `homebanner`
--

INSERT INTO `homebanner` (`idHomeBanner`, `bannerName`, `bannerUrl`, `bannerImageName`) VALUES
(8, 'http://localhost/www/Agalea/build/#/', 'http://localhost/www/Agalea/build/#/', '20160812182348JM8KPC.jpg'),
(9, 'http://localhost/www/Agalea/build/#/', 'http://localhost/www/Agalea/build/#/', '20160812182354DF5YDL.jpg'),
(10, 'http://localhost/www/Agalea/build/#/', 'http://localhost/www/Agalea/build/#/', '20160812182403F6KJN8.jpg'),
(11, 'http://localhost/www/Agalea/build/#/', 'http://localhost/www/Agalea/build/#/', '20160812182406U8FTI5.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `imageslibrary`
--

CREATE TABLE IF NOT EXISTS `imageslibrary` (
  `idImage` int(11) NOT NULL,
  `nameImage` varchar(245) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=ascii;

--
-- Volcado de datos para la tabla `imageslibrary`
--

INSERT INTO `imageslibrary` (`idImage`, `nameImage`) VALUES
(13, '20160815113548C2KIXP.jpg'),
(14, '20160815113549Z31541.jpg'),
(15, '20160815113549IEM4PY.jpg'),
(16, '20160815113549KIFRKX.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE IF NOT EXISTS `product` (
  `idProduct` int(11) NOT NULL,
  `productName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productDescription` varchar(1024) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productImage` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `productUrl` varchar(248) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `idSubcategory` int(11) NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`idProduct`, `productName`, `productDescription`, `productImage`, `productUrl`, `idSubcategory`, `idCategory`) VALUES
(1, 'product', 'productDescription	\r\n', '201608150947057PTS01.jpg', 'product', 39, 37),
(2, 'product 2', 'productDescription	\r\n', '20160815094711FE285H.jpg', 'product-2', 39, 37),
(3, 'product 3', 'productDescription	\r\n', '201608150947145TLBMD.jpg', 'product-3', 39, 37),
(4, 'product 4', 'productDescription	\r\n', '201608151103297VV027.jpg', 'product-4', 39, 37),
(5, 'product 5', 'productDescription	\r\n', '20160815094730HAEG1A.jpg', 'product-5', 35, 37),
(6, 'product 6', 'productDescription	\r\n', '20160815094736VPXYBD.jpg', 'product-6', 35, 37),
(7, 'product 7', 'productDescription	\r\n', '20160815094742YW963E.jpg', 'product-7', 35, 37),
(8, 'product 8', 'productDescription	\r\n', '20160815094748FUI1NH.jpg', 'product-8', 35, 37),
(13, 'productDescription	', 'productDescription	\r\n', '20160815103510TIRI3O.jpg', 'productdescription', 40, 37);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategory`
--

CREATE TABLE IF NOT EXISTS `subcategory` (
  `idSubcategory` int(11) NOT NULL,
  `subcategoryName` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryImage` varchar(45) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryDescription` varchar(1045) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `subcategoryUrl` varchar(248) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `subcategory`
--

INSERT INTO `subcategory` (`idSubcategory`, `subcategoryName`, `subcategoryImage`, `subcategoryDescription`, `subcategoryUrl`, `idCategory`) VALUES
(27, 'Relojes', '20160812181636THCIS4.jpg', 'Relojes', 'relojes', 37),
(28, 'Relojes', '20160812181640KLS57V.jpg', 'Relojes', 'relojes', 36),
(29, 'Relojes', '20160812181644KGIM8R.jpg', 'Relojes', 'relojes', 35),
(30, 'Relojes', '20160812181649OG1S29.jpg', 'Relojes', 'relojes', 34),
(31, 'Anillos', '20160812181702BSDTXV.jpg', 'Anillos', 'anillos', 37),
(32, 'Anillos', '20160812181706ZLPTL4.jpg', 'Anillos', 'anillos', 36),
(33, 'Anillos', '20160812181722BGEG51.jpg', 'Anillos', 'anillos', 35),
(34, 'Anillos', '20160812181726B7VVTH.jpg', 'Anillos', 'anillos', 34),
(35, 'Collares', '20160812181956V945SV.jpg', 'Anillos', 'collares', 37),
(36, 'Collares', '20160812182000FC6BFR.jpg', 'Anillos', 'collares', 36),
(37, 'Collares', '20160812182004OS05U4.jpg', 'Anillos', 'collares', 35),
(38, 'Collares', '20160812182008Q61SQ3.jpg', 'Anillos', 'collares', 34),
(39, 'Gold', '201608121820296GZG0K.jpg', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.', 'gold', 37),
(40, 'Muestra', '20160815101322BT257L.jpg', 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.	', 'muestra', 37);

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
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT de la tabla `homebanner`
--
ALTER TABLE `homebanner`
  MODIFY `idHomeBanner` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT de la tabla `imageslibrary`
--
ALTER TABLE `imageslibrary`
  MODIFY `idImage` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `idSubcategory` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=41;
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
