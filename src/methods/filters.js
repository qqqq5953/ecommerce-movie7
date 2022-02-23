export function currency(num) {
  const n = parseInt(num, 10);
  return `${n.toFixed(0).replace(/./g, (c, i, a) => (i && c !== '.' && ((a.length - i) % 3 === 0) ? `, ${c}`.replace(/\s/g, '') : c))}`;
}

// 用在 Coupon.vue 140
export function date(time) {
  const localDate = new Date(time * 1000);
  return localDate.toLocaleDateString();
}

// 用在 Coupon.vue 171
export function toUnixTimeStamp(date) {
  return Math.floor(new Date(date).getTime() / 1000);
}

// 用在 Coupon.vue 141
export function formatDate(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = '' + (d.getMonth() + 1);
  let day = '' + d.getDate();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}
