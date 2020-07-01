-- Lua - Pcall
function sum (a, b)
    return a + b
end

--[[
    status:
        true: if the function was a success
        false: if the function returned an error
    value:
        has the returned value of the function if it was a success
        has the error information it the function failed

]]--

local status, value = pcall(sum, 2, 3)
-- status output: true
-- value output: 5

--[[
    Facebook: https://www.facebook.com/archcode01/photos/a.101228608227174/101245898225445/?type=3&theater
    Instagram: https://www.instagram.com/p/B-zbvXxAt2O/
    Twitter: https://twitter.com/arch_code/status/1251550012061945856/photo/1
]]--