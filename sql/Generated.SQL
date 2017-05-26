/*
Created: 26/05/2017
Modified: 26/05/2017
Model: MySQL 5.7
Database: MySQL 5.7
*/


-- Create tables section -------------------------------------------------

-- Table evaluador

CREATE TABLE `evaluador`
(
  `idTipo` Int NOT NULL AUTO_INCREMENT,
  `tipoEvaluador` Char(20),
  PRIMARY KEY (`idTipo`)
)
;

-- Table usuario

CREATE TABLE `usuario`
(
  `IdUsuario` Int NOT NULL AUTO_INCREMENT,
  `Nombre` Char(50) NOT NULL,
  `correo` Char(59) NOT NULL,
  `contrasena` Char(16) NOT NULL,
  `sexo` Char(1) NOT NULL,
  `edad` Int NOT NULL,
  `gustos` Char(150) NOT NULL,
  `urlImg` Char(256),
  `idTipo` Int,
  PRIMARY KEY (`IdUsuario`)
)
;

CREATE INDEX `IX_Relationship1` ON `usuario` (`idTipo`)
;

-- Table aplicacion

CREATE TABLE `aplicacion`
(
  `idAplicacion` Int NOT NULL AUTO_INCREMENT,
  `nombre` Varchar(20) NOT NULL,
  `url` Varbinary(255) NOT NULL,
  `Descripcion` Varchar(255) NOT NULL,
  `fechaRegistro` Date NOT NULL,
  `IdUsuario` Int,
  PRIMARY KEY (`idAplicacion`)
)
;

CREATE INDEX `IX_Relationship2` ON `aplicacion` (`IdUsuario`)
;

ALTER TABLE `aplicacion` ADD UNIQUE `url` (`url`)
;

-- Table evaluacion

CREATE TABLE `evaluacion`
(
  `idEvaluacion` Int NOT NULL AUTO_INCREMENT,
  `titulo` Varchar(30) NOT NULL,
  `Descripcion` Char(150) NOT NULL,
  `edadMin` Int NOT NULL,
  `edadMax` Int NOT NULL,
  `idTipo` Int,
  `idAplicacion` Int,
  PRIMARY KEY (`idEvaluacion`)
)
;

CREATE INDEX `IX_Relationship3` ON `evaluacion` (`idTipo`)
;

CREATE INDEX `IX_Relationship4` ON `evaluacion` (`idAplicacion`)
;

-- Table Pregunta

CREATE TABLE `Pregunta`
(
  `idPregunta` Int NOT NULL AUTO_INCREMENT,
  `Pregunta` Varchar(150) NOT NULL,
  `idEvaluacion` Int,
  PRIMARY KEY (`idPregunta`)
)
;

CREATE INDEX `IX_Relationship6` ON `Pregunta` (`idEvaluacion`)
;

-- Table Actividad

CREATE TABLE `Actividad`
(
  `idActividad` Int NOT NULL AUTO_INCREMENT,
  `Nombre` Varchar(20) NOT NULL,
  `Descripcion` Varchar(150),
  `idEvaluacion` Int,
  PRIMARY KEY (`idActividad`)
)
;

CREATE INDEX `IX_Relationship5` ON `Actividad` (`idEvaluacion`)
;

-- Create relationships section ------------------------------------------------- 

ALTER TABLE `usuario` ADD CONSTRAINT `Relationship1` FOREIGN KEY (`idTipo`) REFERENCES `evaluador` (`idTipo`) ON DELETE SET NULL ON UPDATE CASCADE
;

ALTER TABLE `aplicacion` ADD CONSTRAINT `Relationship2` FOREIGN KEY (`IdUsuario`) REFERENCES `usuario` (`IdUsuario`) ON DELETE CASCADE ON UPDATE CASCADE
;

ALTER TABLE `evaluacion` ADD CONSTRAINT `Relationship3` FOREIGN KEY (`idTipo`) REFERENCES `evaluador` (`idTipo`) ON DELETE RESTRICT ON UPDATE CASCADE
;

ALTER TABLE `evaluacion` ADD CONSTRAINT `Relationship4` FOREIGN KEY (`idAplicacion`) REFERENCES `aplicacion` (`idAplicacion`) ON DELETE RESTRICT ON UPDATE CASCADE
;

ALTER TABLE `Actividad` ADD CONSTRAINT `Relationship5` FOREIGN KEY (`idEvaluacion`) REFERENCES `evaluacion` (`idEvaluacion`) ON DELETE CASCADE ON UPDATE CASCADE
;

ALTER TABLE `Pregunta` ADD CONSTRAINT `Relationship6` FOREIGN KEY (`idEvaluacion`) REFERENCES `evaluacion` (`idEvaluacion`) ON DELETE CASCADE ON UPDATE CASCADE
;

