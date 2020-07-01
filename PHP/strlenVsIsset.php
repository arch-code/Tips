<?php
    // PHP - STRLEN vs. ISSET
    $string = 'string';

    // Using strlen
    if (strlen($string)>5) {
        echo 'It has more then five characters';
    }

    // Using isset - Has a better performance
    if (isset($string[6])) {
        echo 'It has at least six characters long';
    }

    /*
    * Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101235821559786/?type=3&theater
    * Instagram: https://www.instagram.com/p/B-rZ6VTAVP-/
    * Twitter: https://twitter.com/arch_code/status/1251547102301257728/photo/1
    */
?>