<?php
/**
 * Created by PhpStorm.
 * User: Ali-Raza
 * Date: 4/8/2018
 * Time: 3:23 AM
 */



class db
{

    private $dbhost = 'localhost';
    private $dbuser = 'root';
    private $dbpass = '';
    private $dbname = 'case-wizard';


    public function connect()
    {
        $mysql_connect_str = "mysql:host=$this->dbhost;dbname=$this->dbname";
        $dbconnection = new PDO($mysql_connect_str, $this->dbuser, $this->dbpass);
        $dbconnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        return $dbconnection;
    }
}