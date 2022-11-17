CREATE TABLE tutorial(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  published BOOLEAN NOT NULL
);

INSERT INTO `tutorial` VALUES (1, 'titulo prueba 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at turpis viverra, semper nisi at, egestas libero. In lectus ipsum, venenatis ac efficitur et, cursus ut nisi. Sed sodales ipsum sit amet est rutrum mattis.', 1);
INSERT INTO `tutorial` VALUES (2, 'titulo prueba 2', 'Nulla vel pulvinar tortor. Aenean sed tellus ultrices, placerat elit sed, condimentum dui. Nam vitae viverra velit.', 0);
INSERT INTO `tutorial` VALUES (3, 'titulo prueba 3', 'Nulla vel pulvinar tortor. Aenean sed tellus ultrices, placerat elit sed, condimentum dui. Nam vitae viverra velit.', 1);
