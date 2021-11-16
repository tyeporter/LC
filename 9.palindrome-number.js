/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Convert number to string
    x = String(x);
    // Create pointers
    let p1 = 0, p2 = x.length - 1;

    // While pointers don't cross
    while (p1 < p2) {
        // If pointers are not equal...
        if (x[p1] !== x[p2]) return false;

        // Shift pointers
        p1++;
        p2--;
    }

    return true
};
// @lc code=end

