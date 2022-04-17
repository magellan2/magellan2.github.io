<?php

error_reporting(E_ALL);

function errHandle($errNo, $errStr, $errFile, $errLine) {
    $msg = "$errStr in $errFile on line $errLine\n";
    echo $msg;
    exit(1);
}

set_error_handler('errHandle');

$VERSIONS_FILE='index.json';
// v1.2.3-456.abc0
$vnum_preg='/^v?([0-9]+)[.]([0-9]+)[.]([0-9]+)(-(([1-9][0-9]*)([.]([a-z][a-z]*)([0-9]*))?))?$/';

function write_versions($versions, $filename) {
  $content=json_encode($versions, JSON_PRETTY_PRINT);

  if (is_writable($filename)) {

    if (!$handle = fopen($filename, 'w')) {
         echo "Cannot open file ($filename)";
         exit (4);
    }

    if (fwrite($handle, $content) === FALSE) {
        echo "Cannot write to file ($filename)";
        exit (4);
    }

    fclose($handle);

  } else {
     echo "Cannot write to file ($filename)";
    exit (4);
  }
}


if (sizeof($argv) != 3) {
   echo "usage: $argv[0] <type> <version>\n";
   exit(2);
}
if (!preg_match('/^[a-z]+$/', $argv[1], $matches0) || !preg_match($vnum_preg, $argv[2], $matches)) {
   if (empty($matches0))
      echo "invalid label $argv[1]\n";
   if (empty($matches))
      echo "invalid version $argv[2]\n";
   exit(2);
}

$label = $argv[1];

$versions = json_decode(file_get_contents($VERSIONS_FILE), true);

$version = array();
$version['raw'] = $matches[0];
$version['major'] = $matches[1];
$version['minor'] = $matches[2];
$version['revision'] = $matches[3];
  $version['pre'] = "";
$version['build'] = "";
$version['type'] = "";
if (!empty($matches[5])) {
  $version['pre'] = $matches[5];
  $version['build'] = $matches[6];
  if (!empty($matches[8]))
    $version['type'] = $matches[8];
}

$versions['versions'][$label] = $version;

if ($label != $version['type'] && !($label == 'stable' || !empty($version['type']))) {
  echo "Warning: label '$label' does not match type {$version['type']} of version {$version['raw']}\n";
  exit (3);
}

write_versions($versions, $VERSIONS_FILE);

?>
