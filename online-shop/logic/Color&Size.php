<?php
require_once(BASE_PATH.'dal/dal.php');
function getColors()
{
    $query = "SELECT name FROM colors";
    return get_rows($query);
}
function getSizes()
{
    $query = "SELECT name FROM sizes";
    return get_rows($query);
}