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

const WEEKDAY = [
  3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 17, 18, 19, 20, 21, 24, 25, 26, 27, 28, 31,
];

const WEEKEND = [1, 2, 8, 9, 15, 16, 22, 23, 29, 30];

const STAR_DAY = [3, 10, 17, 24, 25, 31];

export function toTalPriceLogic() {
  const MENUS = christmasInstance.getMenus();
  let totalPrice = 0;

  MENUS.forEach((menu) => {
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
      const [MENU_NAME, QUANTITY] = menu.split("-");
      const PARSEDQUANTITY = parseInt(QUANTITY, 10);

      if (DESSERT.includes(MENU_NAME) && PARSEDQUANTITY > 0) {
        minusPrice += 2023 * PARSEDQUANTITY;
      }
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
      const [MENU_NAME, QUANTITY] = menu.split("-");
      const PARSEDQUANTITY = parseInt(QUANTITY, 10);

      if (MAIN.includes(MENU_NAME) && PARSEDQUANTITY > 0) {
        minusPrice += 2023 * PARSEDQUANTITY;
      }
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
  const dDayAvailable = receivedD_dayPromotion();
  const weekdayAvailable = receivedWeekDayPromotion();
  const weekendAvailable = receivedWeekendPromotion();
  const champagneAvailable = receivedChampagnePromotion();
  const specialAvailable = receivedSpecialPromotion();

  const totalBenefitPrice =
    dDayAvailable +
    weekdayAvailable +
    weekendAvailable +
    champagneAvailable +
    specialAvailable;

  return totalBenefitPrice;
}

export function totalPriceAfterDiscount() {
  const dDayAvailable = receivedD_dayPromotion();
  const weekdayAvailable = receivedWeekDayPromotion();
  const weekendAvailable = receivedWeekendPromotion();
  const specialAvailable = receivedSpecialPromotion();
  const totalPrice = toTalPriceLogic();

  const totalDiscountPrice =
    dDayAvailable + weekdayAvailable + weekendAvailable + specialAvailable;

  const TOTAL_AFTER = totalPrice - totalDiscountPrice;

  return TOTAL_AFTER;
}
