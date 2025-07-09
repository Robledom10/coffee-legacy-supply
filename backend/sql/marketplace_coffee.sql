-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-07-2025 a las 00:14:51
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `marketplace_coffee`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`) VALUES
(3, 'Accesorios para café'),
(1, 'Café en grano'),
(2, 'Café molido'),
(4, 'Cafeteras'),
(5, 'Regalos y combos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id` int(11) NOT NULL,
  `pedido_id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_unitario` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direcciones_envio`
--

CREATE TABLE `direcciones_envio` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) NOT NULL,
  `direccion` text NOT NULL,
  `ciudad` varchar(50) DEFAULT NULL,
  `region` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `codigo_postal` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `id` int(11) NOT NULL,
  `comprador_id` int(11) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp(),
  `estado` enum('pendiente','pagado','enviado','entregado','cancelado') DEFAULT 'pendiente',
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `vendedor_id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen_url` text DEFAULT NULL,
  `fecha_publicacion` timestamp NOT NULL DEFAULT current_timestamp(),
  `categoria_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `vendedor_id`, `nombre`, `descripcion`, `categoria`, `precio`, `imagen_url`, `fecha_publicacion`, `categoria_id`) VALUES
(77, 1, 'Café Supremo Antioqueño', 'Café de altura con sabor intenso y aroma floral.', 'Café en grano', 15000.00, 'https://images.unsplash.com/photo-1623164152984-653fed8bcc31?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2025-07-09 17:50:53', 1),
(78, 1, 'Café Sierra Nevada', 'Granos cultivados por comunidades indígenas.', 'Café en grano', 18000.00, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93', '2025-07-09 17:50:53', 1),
(79, 1, 'Café Orgánico Tolima', 'Sabor suave, perfil frutal y libre de químicos.', 'Café en grano', 16500.00, 'https://images.unsplash.com/photo-1528825871115-3581a5387919', '2025-07-09 17:50:53', 1),
(80, 2, 'Café Premium Huila', 'Tueste medio con notas de chocolate y nuez.', 'Café en grano', 20000.00, 'https://plus.unsplash.com/premium_photo-1673615348172-dff076fcdbc4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2025-07-09 17:50:53', 1),
(81, 2, 'Café Molido Tradicional', 'Ideal para preparar en greca o filtro.', 'Café molido', 12000.00, 'https://images.unsplash.com/photo-1619615174792-a5edcfeafdfe?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2025-07-09 17:50:53', 2),
(82, 2, 'Café Molido Oscuro', 'Sabor intenso para paladares exigentes.', 'Café molido', 13500.00, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93', '2025-07-09 17:50:53', 2),
(83, 1, 'Café Molido Suave', 'Mezcla balanceada con acidez baja.', 'Café molido', 12500.00, 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1028&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2025-07-09 17:50:53', 2),
(84, 1, 'Café Molido con Cardamomo', 'Infusión exótica y especiada.', 'Café molido', 14500.00, 'https://images.unsplash.com/photo-1511920170033-f8396924c348', '2025-07-09 17:50:53', 2),
(85, 1, 'Filtro de Tela Reutilizable', 'Ecológico y práctico para preparar café artesanal.', 'Accesorios para café', 7000.00, 'https://images.unsplash.com/photo-1522825397800-ddf6405fc258?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FmJUMzJUE5JTIwZmlsdHJvfGVufDB8fDB8fHww', '2025-07-09 17:50:53', 3),
(86, 1, 'Prensa Francesa 350ml', 'Café más limpio y aromático.', 'Accesorios para café', 28000.00, 'https://images.unsplash.com/photo-1639906512494-dd4a536abc4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2025-07-09 17:50:53', 3),
(87, 2, 'Vaso térmico 400ml', 'Ideal para llevar tu café.', 'Accesorios para café', 18000.00, 'https://juanvaldez.vtexassets.com/arquivos/ids/156994/AzulQ_STANLEY_1200x1200.jpg?v=638670455099470000', '2025-07-09 17:50:53', 3),
(88, 2, 'Espumador de leche manual', 'Crea espuma en segundos.', 'Accesorios para café', 15000.00, 'https://orbegozo.com/wp-content/uploads/2019/03/espumador-de-leche-orbegozo-MN-3800_1-300x300.jpg', '2025-07-09 17:50:53', 3),
(89, 1, 'Cafetera Italiana Moka 6 tazas', 'Aluminio resistente y diseño clásico.', 'Cafeteras', 32000.00, 'https://media.falabella.com/sodimacCO/212778/public', '2025-07-09 17:50:53', 4),
(90, 2, 'Cafetera Eléctrica 1.2L', 'Prepara café para toda la familia.', 'Cafeteras', 95000.00, 'https://electroluxco.vtexassets.com/arquivos/ids/161258/Coffee_Machine_ECM20_Perspective_Electrolux_2.jpg?v=638851662642430000', '2025-07-09 17:50:53', 4),
(91, 1, 'Cafetera de émbolo grande', 'Diseño elegante para café en casa.', 'Cafeteras', 42000.00, 'https://http2.mlstatic.com/D_NQ_NP_973323-MCO73045704069_112023-O.webp', '2025-07-09 17:50:53', 4),
(92, 1, 'Combo Café + Vaso térmico', 'Regalo ideal para los amantes del café.', 'Regalos y combos', 35000.00, 'https://evok.com.co/cdn/shop/files/Termonegro.png?v=1741213468&width=1920', '2025-07-09 17:50:53', 5),
(93, 2, 'Caja de regalo premium', 'Incluye café, tazas y accesorios.', 'Regalos y combos', 75000.00, 'https://gourmetfamily.co/wp-content/uploads/2019/08/Cafe_Premium.jpg', '2025-07-09 17:50:53', 5),
(94, 2, 'Set 3 variedades café especial', 'Descubre tres sabores únicos.', 'Regalos y combos', 39000.00, 'https://www.cafequindio.com.co/cdn/shop/files/TRIPACK_COSECHASESPECIALES_04.png?v=1735594523&width=1250', '2025-07-09 17:50:53', 5),
(95, 1, 'Kit barista en casa', 'Incluye molinillo, prensa y café.', 'Regalos y combos', 80000.00, 'https://bevgo.com.co/wp-content/uploads/2024/04/Kit-Barista-En-Casa.webp', '2025-07-09 17:50:53', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenas`
--

CREATE TABLE `resenas` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `comprador_id` int(11) NOT NULL,
  `calificacion` int(11) DEFAULT NULL CHECK (`calificacion` between 1 and 5),
  `comentario` text DEFAULT NULL,
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña_hash` text NOT NULL,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `contraseña_hash`, `fecha_registro`) VALUES
(1, 'María Fernández', 'maria@example.com', '$2b$10$qwer1234hasheado5678abcdabcdabcdabcdabcdabcdabcdabcd', '2025-07-09 17:42:16'),
(2, 'Pedro Gómez', 'pedro@example.com', '$2b$10$zxcv5678hasheado1234efghijklmnopqrstuvwxabcdabcdabcd', '2025-07-09 17:42:16'),
(3, 'Miguel', 'garciamiguelangel2007@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '2025-07-09 20:52:18'),
(4, 'hola', 'robledomarquezsandrapatricia3@gmail.com', '03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4', '2025-07-09 21:14:26');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pedido_id` (`pedido_id`),
  ADD KEY `producto_id` (`producto_id`);

--
-- Indices de la tabla `direcciones_envio`
--
ALTER TABLE `direcciones_envio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comprador_id` (`comprador_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `vendedor_id` (`vendedor_id`),
  ADD KEY `categoria_id` (`categoria_id`);

--
-- Indices de la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `comprador_id` (`comprador_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `direcciones_envio`
--
ALTER TABLE `direcciones_envio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de la tabla `resenas`
--
ALTER TABLE `resenas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD CONSTRAINT `detalle_pedido_ibfk_1` FOREIGN KEY (`pedido_id`) REFERENCES `pedidos` (`id`),
  ADD CONSTRAINT `detalle_pedido_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `direcciones_envio`
--
ALTER TABLE `direcciones_envio`
  ADD CONSTRAINT `direcciones_envio_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`comprador_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`vendedor_id`) REFERENCES `usuarios` (`id`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`);

--
-- Filtros para la tabla `resenas`
--
ALTER TABLE `resenas`
  ADD CONSTRAINT `resenas_ibfk_1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `resenas_ibfk_2` FOREIGN KEY (`comprador_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
