export default function (array, bySomething) {
  return array.sort((a, b) => {
    if (bySomething === 'content') {
      return b[bySomething].split('|')[1] - a[bySomething].split('|')[1];
    }
    return b[bySomething] - a[bySomething];
  });
};
