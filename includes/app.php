<?php 

require 'funciones.php';
require 'database.php';
require __DIR__ . '/../vendor/autoload.php';

// Conectarnos a la base de datos
use Model\ActiveRecord; //Esto hereda todas las fuunciones del sistema.
ActiveRecord::setDB($db);