<?php
    // PHP - Destructuring
    $people = [
        ['Alex', 25],
        ['Andre', 35],
    ];

    [$firstPerson, $secondPerson] = $people;
    [$name1, $age1] = $firstPerson;
    [$name2, $age2] = $secondPerson;

    echo $name1; // Output: 'Alex'
    echo $name2; // Output: 'Andre'

    /*
    * Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101242591559109/?type=3&theater
    * Instagram: https://www.instagram.com/p/B-vQIdnAIWv/
    * Twitter: https://twitter.com/arch_code/status/1251547927148888064/photo/1
    */
?>