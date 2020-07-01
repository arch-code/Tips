<?php
    // PHP - Null coalescing operator
    $array = ['one', 'two'];

    // Ternary
    $one = isset($array[0]) ? $array[0] : 'empty'; // value exist

    $three = isset($array[2]) ? $array[2] : 'empty'; // value doesn't exist
    

    // Coalescing operator
    $one = $array[0] ?? 'empty'; // value exist

    $three = $array[2] ?? 'empty'; // value doesn't exist

    /*
    * Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101239041559464/?type=3&theater
    * Instagram: https://www.instagram.com/p/B-uH3gWgLQb/
    * Twitter: https://twitter.com/arch_code/status/1251547603533266946/photo/1
    */
?>