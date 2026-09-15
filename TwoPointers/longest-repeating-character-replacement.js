//https://leetcode.com/problems/longest-repeating-character-replacement/description/

// Input: s = "AABABBA", k = 1
// Output: 4

// Time complexity: O(N)
// Space complexity: O(1)

var characterReplacement = function (s, k) {
    let i = j = 0;
    let map = {};
    map[s[0]] = 1;
    let maxCount = 0;
    while (j < s.length) {
        if (isMapValid(map, k)) {
            maxCount = Math.max(maxCount, (j - i + 1));
            j++;
            map[s[j]] = map[s[j]] ? map[s[j]] + 1 : 1;
        }
        else {
            map[s[i]]--;
            i++;
        }
    }
    return maxCount;
};

function isMapValid(map, k) {
    let totalCount = maxCount = 0;
    for (let i = 0; i < 26; i++) {
        let char = String.fromCharCode(i + 65);
        if (map[char]) {
            totalCount += map[char];
            maxCount = Math.max(maxCount, map[char])
        }
    }
    return (totalCount - maxCount <= k);
}