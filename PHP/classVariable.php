<?php
    // PHP - Class in variable
    class phpClass {
        public function phpMethod () {
            echo "I'm a method";
        }
    }

    // Assigning class to variable
    $myClass = new phpClass();
    $method = 'phpMethod';

    // Calling class from variable
    $myClass->$method();

    /*
    * Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/103732794643422/?type=3&theater
    * Instagram: https://www.instagram.com/p/B-9yRYcA4DH/
    * Twitter: https://twitter.com/arch_code/status/1251551760482738176/photo/1
    */
?>