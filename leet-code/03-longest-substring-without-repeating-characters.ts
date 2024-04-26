function lengthOfLongestSubstring(s: string): number {
  let longestNumber: number = 0;
  let subs: string = '';
  for(let i = 0; i < s.length; i++) {
      if (subs.includes(s[i])) {
          longestNumber = subs.length > longestNumber ? subs.length : longestNumber;
          subs = subs.slice(subs.indexOf(s[i]) + 1) + s[i];
      } else {
          subs += s[i];
      }
      if (subs.length > 120) {
          break;
      }
  }
  return Math.max(longestNumber, subs.length);
};