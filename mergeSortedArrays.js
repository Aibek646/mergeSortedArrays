var merge = function (nums1, m, nums2, n) {
  var first = m - 1;
  var second = n - 1;
  var i = m + n - 1;
  while (second >= 0) {
    fVal = nums1[first];
    sVal = nums2[second];
    if (fVal > sVal) {
      nums1[i] = fVal;
      first--;
    } else {
      nums1[i] = sVal;
      second--;
    }
    i--;
  }
};

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;
