-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema vet
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema vet
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `vet` DEFAULT CHARACTER SET utf8 ;
USE `vet` ;

-- -----------------------------------------------------
-- Table `vet`.`Servicios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Servicios` (
  `idServicios` VARCHAR(15) NOT NULL,
  `Serv_Nom` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idServicios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vet`.`Productos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Productos` (
  `idProductos` VARCHAR(15) NOT NULL,
  `Product_Nom` VARCHAR(20) NOT NULL,
  `Product_Code` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idProductos`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vet`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Usuarios` (
  `idUsuarios` VARCHAR(15) NOT NULL,
  `User_Name` VARCHAR(50) NOT NULL,
  `User_Pass` VARCHAR(15) NOT NULL,
  `User_Date` DATE NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vet`.`Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Clientes` (
  `idClientes` VARCHAR(15) NOT NULL,
  `Client_Nom` VARCHAR(50) NOT NULL,
  `Client_a_Cargo` VARCHAR(100) NOT NULL,
  `Client_Direccion` VARCHAR(100) NOT NULL,
  `Client_Tel` VARCHAR(11) NOT NULL,
  `Client_Rut` VARCHAR(10) NOT NULL,
  `Client_Correo` VARCHAR(100) NOT NULL,
  `Client_Region` VARCHAR(50) NOT NULL,
  `Client_Comuna` VARCHAR(50) NOT NULL,
  `Client_Pass` VARCHAR(15) NOT NULL,
  `Client_Tipo` TINYINT NOT NULL,
  `Client_Date` DATE NOT NULL,
  `Client_Titulo` VARCHAR(30) NULL,
  `Client_exotic` TINYINT NULL,
  PRIMARY KEY (`idClientes`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vet`.`Comentarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Comentarios` (
  `idComentarios` VARCHAR(15) NOT NULL,
  `Comentario` VARCHAR(300) NOT NULL,
  `Coment_Date` DATETIME NOT NULL,
  `Usuarios_idUsuarios` VARCHAR(15) NOT NULL,
  `Clientes_idClientes` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`idComentarios`),
  INDEX `fk_Comentarios_Usuarios_idx` (`Usuarios_idUsuarios` ASC),
  INDEX `fk_Comentarios_Clientes1_idx` (`Clientes_idClientes` ASC),
  CONSTRAINT `fk_Comentarios_Usuarios`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `vet`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Comentarios_Clientes1`
    FOREIGN KEY (`Clientes_idClientes`)
    REFERENCES `vet`.`Clientes` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vet`.`Productos_Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Productos_Clientes` (
  `Productos_idProductos` VARCHAR(15) NOT NULL,
  `Clientes_idClientes` VARCHAR(15) NOT NULL,
  `Precios` VARCHAR(7) NOT NULL,
  `Descripcion` VARCHAR(300) NULL,
  PRIMARY KEY (`Productos_idProductos`, `Clientes_idClientes`),
  INDEX `fk_Productos_has_Clientes_Clientes1_idx` (`Clientes_idClientes` ASC),
  INDEX `fk_Productos_has_Clientes_Productos1_idx` (`Productos_idProductos` ASC),
  CONSTRAINT `fk_Productos_has_Clientes_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `vet`.`Productos` (`idProductos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Productos_has_Clientes_Clientes1`
    FOREIGN KEY (`Clientes_idClientes`)
    REFERENCES `vet`.`Clientes` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `vet`.`Servicios_Clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Servicios_Clientes` (
  `Servicios_idServicios` VARCHAR(15) NOT NULL,
  `Clientes_idClientes` VARCHAR(15) NOT NULL,
  `Precio` VARCHAR(7) NOT NULL,
  `Descripcion` VARCHAR(300) NULL,
  PRIMARY KEY (`Servicios_idServicios`, `Clientes_idClientes`),
  INDEX `fk_Servicios_has_Clientes_Clientes1_idx` (`Clientes_idClientes` ASC),
  INDEX `fk_Servicios_has_Clientes_Servicios1_idx` (`Servicios_idServicios` ASC),
  CONSTRAINT `fk_Servicios_has_Clientes_Servicios1`
    FOREIGN KEY (`Servicios_idServicios`)
    REFERENCES `vet`.`Servicios` (`idServicios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Servicios_has_Clientes_Clientes1`
    FOREIGN KEY (`Clientes_idClientes`)
    REFERENCES `vet`.`Clientes` (`idClientes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `vet`.`Soporte`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `vet`.`Soporte` (
  `idSoporte` VARCHAR(4) NOT NULL,
  `Correo` VARCHAR(40) NOT NULL,
  `Mensaje_Soporte` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`idSoporte`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
