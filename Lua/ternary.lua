-- Lua - Ternary
local three = 3;
local isThree;

-- Classical way
if three == 3 then
    isThree = "Oh right, it's three"
else
    isThree = "Nope, it's not three"
end

print(isThree); -- Output: "Oh right, it's three"

-- Cleaning variable
isThree = nil;

-- Modern way
isThree = (three == 3) and "Oh right, it's three" or "Nope, it's not three"

print(isThree); -- Output: "Oh right, it's three"


--[[
    Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101233978226637/?type=3&theater
    Instagram: https://www.instagram.com/p/B-kQL8YgnyJ/
    Twitter: https://twitter.com/arch_code/status/1251545506230218752/photo/1
]]--