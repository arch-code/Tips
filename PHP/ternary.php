<?php
    // PHP - Ternary
    $ten = 10;
    $isTen;

    // Classical way
    if ($ten == 10) {
        $isTen = "YES! It's ten!";
    }
    else {
        $isTen = "NO! It's not ten";
    }

    echo $isTen; // Output: "YES! It's ten!"
    
    // Cleaning variable
    $isTen = null;

    // Modern way
    $isTen = $ten == 10 ? "YES! It's ten!": "NO! It's not ten";

    echo $isTen; // Output: "YES! It's ten!"

    /*
    * Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/102802894736412/?type=3&theater
    * Instagram: https://www.instagram.com/p/B-7QrSvAPtz/
    * Twitter: https://twitter.com/arch_code/status/1251550688104058880/photo/1
    */
?>