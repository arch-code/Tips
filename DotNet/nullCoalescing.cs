// C# - Null Coalescing Operator
string suppliedName = "Tyler Durden";
string? narratorName;

// Coalescing
string name = suppliedName ?? "Jack";
string name2 = narratorName ?? "Jack";

Console.WriteLine(name) // Output: "Tyler Durden"
Console.WriteLine(name2) // Output: "Jack"

/*
* Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101244494892252/?type=3&theater
* Instagram: https://www.instagram.com/p/B-xigZ4AuKE/
* Twitter: https://twitter.com/arch_code/status/1251549335394947073/photo/1
*/