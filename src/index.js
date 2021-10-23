/* eslint-disable consistent-return */
/* eslint-disable no-undef */

export default function totalLive(obj) {
  for (const iterator of obj) {
    if (iterator.health <= 15) {
      return critical;
    }
    if (iterator.health >= 50) {
      return healthy;
    }
    return wounded;
  }
}
