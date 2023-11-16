export default function menuAndQuantity(menu) {
  const [MENU_NAME, NUMBER] = menu.split("-");
  const QUANTITY = parseInt(NUMBER, 10);
  return { MENU_NAME, QUANTITY };
}
