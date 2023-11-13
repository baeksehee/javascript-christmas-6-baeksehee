import { christmasInstance } from "./InputView.js";

const MENUS_PRICE = {
  양송이수프: 6000,
  타파스: 5500,
  시저샐러드: 8000,
  티본스테이크: 55000,
  바비큐립: 54000,
  해산물파스타: 35000,
  크리스마스파스타: 25000,
  초코케이크: 15000,
  아이스크림: 5000,
  제로콜라: 3000,
  레드와인: 60000,
  샴페인: 25000,
};

export function toTalPriceLogic(menus) {
  let totalPrice = 0;

  menus.forEach((menu) => {
    const [MENU_NAME, QUANTITY] = menu.split("-");
    const PARSEDQUANTITY = parseInt(QUANTITY, 10);

    if (MENUS_PRICE.hasOwnProperty(MENU_NAME) && PARSEDQUANTITY > 0) {
      totalPrice += MENUS_PRICE[MENU_NAME] * PARSEDQUANTITY;
    }
  });

  return totalPrice;
}

export function ChampagnePromotionAvailable() {
  const TOTAL_PRICE = toTalPriceLogic(christmasInstance.getMenus());
  if (TOTAL_PRICE >= 120000) {
    return true;
  } else return false;
}
