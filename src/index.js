/* eslint-disable consistent-return */
/* eslint-disable no-undef */

export default function totalLive(obj) {
  if (obj.health <= 15) {
    return 'critical';
  }
  if (obj.health >= 50) {
    return 'healthy';
  }
  return 'wounded';
}
