//https://leetcode.com/problems/permutation-in-string/description/

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true

// Time complexity: O(N)
// Space complexity: O(1)

var checkInclusion = function (s1, s2) {
    let hashs1 = Array(26).fill(0);
    let hashs2 = Array(26).fill(0);
    let len = s1.length;

    for (let i = 0; i < len; i++) {
        hashs1[s1.charCodeAt(i) - 97]++;
        hashs2[s2.charCodeAt(i) - 97]++;
    }

    let i = 0;
    let j = len - 1;
    while (j < s2.length) {
        if (isEqual(hashs1, hashs2)) {
            return true;
        }
        else {
            hashs2[s2.charCodeAt(i) - 97]--;;
            i++;
            j++;
            hashs2[s2.charCodeAt(j) - 97]++;
        }
    }
    return false;
};

function isEqual(hashs1, hashs2) {
    for (let i = 0; i < 26; i++) {
        if (hashs1[i] !== hashs2[i]) {
            return false;
        }
    }
    return true;
}