export default function Character(characteristics) {
  if (characteristics.health < 15) {
    return 'critical';
  } if (characteristics.health > 15 && characteristics.health < 50) {
    return 'wounded';
  }
  return 'healthy';
}
