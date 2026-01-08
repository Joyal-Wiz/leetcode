/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let i = 0;
    let j = 0;
    let result = [];

    while (i < nums1.length && j < nums2.length) {
        let id1 = nums1[i][0];
        let id2 = nums2[j][0];
        let val1 = nums1[i][1];
        let val2 = nums2[j][1];

        if (id1 === id2) {
            result.push([id1, val1 + val2]);
            i++;
            j++;
        }
        else if (id1 < id2) {
            result.push([id1, val1]);
            i++;
        }
        else {
            result.push([id2, val2]);
            j++;
        }
    }
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }

    while (j < nums2.length) {
        result.push(nums2[j]);
        j++;
    }

    return result;
};