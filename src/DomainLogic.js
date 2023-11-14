import { christmasInstance } from "./InputView.js";
import menuAndQuantity from "./utils/menuAndQuantity.js";

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
const WEEKDAY = [
  3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31,
];
const WEEKEND = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];
const STAR_DAY = [3, 10, 17, 24, 25, 31];

export function toTalPriceLogic() {
  const MENUS = christmasInstance.getMenus();
  let totalPrice = 0;

  MENUS.forEach((menu) => {
    const { MENU_NAME, QUANTITY } = menuAndQuantity(menu);
    if (MENUS_PRICE.hasOwnProperty(MENU_NAME))
      totalPrice += MENUS_PRICE[MENU_NAME] * QUANTITY;
  });

  return totalPrice;
}

export function ChampagnePromotionAvailable() {
  const TOTAL_PRICE = toTalPriceLogic(christmasInstance.getMenus());
  if (TOTAL_PRICE >= 120000) {
    return true;
  } else return false;
}

// d-day 할인
export function receivedD_dayPromotion() {
  const DATE = christmasInstance.getDate();
  let minusPrice = 1000;
  let available = true;

  if (DATE >= 26) {
    available = false;
  }

  if (available) {
    for (let i = 1; i < DATE; i++) {
      minusPrice += 100;
    }
  } else {
    minusPrice = 0;
  }

  return minusPrice;
}

// WEEKDAY 할인
export function receivedWeekDayPromotion() {
  const MENUS = christmasInstance.getMenus();
  const DATE = christmasInstance.getDate();
  const DESSERT = [`초코케이크`, `아이스크림`];
  let minusPrice = 0;

  if (WEEKDAY.includes(DATE)) {
    MENUS.forEach((menu) => {
      const { MENU_NAME, QUANTITY } = menuAndQuantity(menu);
      if (DESSERT.includes(MENU_NAME)) minusPrice += 2023 * QUANTITY;
    });
  }

  return minusPrice;
}

// WEEKEND 할인
export function receivedWeekendPromotion() {
  const MENUS = christmasInstance.getMenus();
  const DATE = christmasInstance.getDate();
  const MAIN = ["티본스테이크", "바비큐립", "해산물파스타", "크리스마스파스타"];
  let minusPrice = 0;

  if (WEEKEND.includes(DATE)) {
    MENUS.forEach((menu) => {
      const { MENU_NAME, QUANTITY } = menuAndQuantity(menu);
      if (MAIN.includes(MENU_NAME)) minusPrice += 2023 * QUANTITY;
    });
  }

  return minusPrice;
}

export function receivedSpecialPromotion() {
  const DATE = christmasInstance.getDate();
  const MINUS_PRICE = 1000;
  if (STAR_DAY.includes(DATE)) {
    return MINUS_PRICE;
  } else return 0;
}

// 샴페인 증정 이벤트
export function receivedChampagnePromotion() {
  const CHAMPAGNE_AVAILABLE = ChampagnePromotionAvailable();
  const CHAMPAGNE_PRICE = 25000;

  if (CHAMPAGNE_AVAILABLE) {
    return CHAMPAGNE_PRICE;
  } else return 0;
}

export function receivedTotalBenefitPrice() {
  const DDAY_AVAILABLE = receivedD_dayPromotion();
  const WEEKDAY_AVAILABLE = receivedWeekDayPromotion();
  const WEEKEND_AVAILABLE = receivedWeekendPromotion();
  const CHAMPAGNE_AVAILABLE = receivedChampagnePromotion();
  const SPECIAL_AVAILABLE = receivedSpecialPromotion();
  let resultTotalBenefitPrice;

  const totalBenefitPrice =
    DDAY_AVAILABLE +
    WEEKDAY_AVAILABLE +
    WEEKEND_AVAILABLE +
    CHAMPAGNE_AVAILABLE +
    SPECIAL_AVAILABLE;

  if (totalBenefitPrice === 0) return 0;
  if (totalBenefitPrice > 0) return -totalBenefitPrice;
}

export function receivedTotalDsicountPrice() {
  const DDAY_AVAILABLE = receivedD_dayPromotion();
  const WEEKDAY_AVAILABLE = receivedWeekDayPromotion();
  const WEEKEND_AVAILABLE = receivedWeekendPromotion();
  const SPECIAL_AVAILABLE = receivedSpecialPromotion();

  const TOTAL_DISCOUNTPRICE =
    DDAY_AVAILABLE + WEEKDAY_AVAILABLE + WEEKEND_AVAILABLE + SPECIAL_AVAILABLE;

  return TOTAL_DISCOUNTPRICE;
}

export function totalPriceAfterDiscount() {
  const TOTAL_DISCOUNTPRICE = receivedTotalDsicountPrice();
  const TOTAL_PRICE = toTalPriceLogic();

  const TOTAL_AFTER = TOTAL_PRICE - TOTAL_DISCOUNTPRICE;

  return TOTAL_AFTER;
}

export function sendBadge() {
  const TOTAL_AFTER = -receivedTotalBenefitPrice();
  if (TOTAL_AFTER >= 20000) {
    return "산타";
  } else if (TOTAL_AFTER >= 10000) {
    return "트리";
  } else if (TOTAL_AFTER >= 5000) {
    return "별";
  } else {
    return "없음";
  }
}
