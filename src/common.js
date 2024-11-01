const FindDuplicateNumber = (nums) => {
  const frequency = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});
  return Object.keys(frequency)
    .filter((item) => frequency[item] > 1)
    .map(Number);
};

console.log(FindDuplicateNumber([87, 98, 55, 89, 98, 77]));
