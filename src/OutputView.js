import { MissionUtils } from "@woowacourse/mission-utils";
import { christmasInstance } from "./InputView.js";
import {
  ChampagnePromotionAvailable,
  receivedChampagnePromotion,
  receivedD_dayPromotion,
  receivedSpecialPromotion,
  receivedTotalBenefitPrice,
  receivedWeekDayPromotion,
  receivedWeekendPromotion,
  sendBadge,
  toTalPriceLogic,
  totalPriceAfterDiscount,
} from "./DomainLogic.js";
import menuAndQuantity from "./utils/menuAndQuantity.js";

const OutputView = {
  printIntroduction() {
    MissionUtils.Console.print(
      "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다."
    );
  },

  printBenefitIntroduction() {
    MissionUtils.Console.print(
      "12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n"
    );
  },

  printMenu() {
    MissionUtils.Console.print("<주문 메뉴>");
    const ORDERED_MENUS = christmasInstance.getMenus();
    ORDERED_MENUS.map(function (eachMenu) {
      const { MENU_NAME, QUANTITY } = menuAndQuantity(eachMenu);
      MissionUtils.Console.print(`${MENU_NAME} ${QUANTITY}개`);
    });
  },

  printTotalPrice() {
    MissionUtils.Console.print("\n<할인 전 총주문 금액>");
    const TOTAL_PRICE = toTalPriceLogic().toLocaleString();
    MissionUtils.Console.print(`${TOTAL_PRICE}원`);
  },

  printChampagnePromotion() {
    MissionUtils.Console.print("\n<증정 메뉴>");
    const CHAMPAGNEPROMOTION_AVAILABLE = ChampagnePromotionAvailable();
    if (CHAMPAGNEPROMOTION_AVAILABLE === true) {
      MissionUtils.Console.print("샴페인 1개");
    } else MissionUtils.Console.print("없음");
  },

  printReceivedPromotion() {
    MissionUtils.Console.print("\n<혜택 내역>");
    const DDAY_AVAILABLE = receivedD_dayPromotion().toLocaleString();
    const WEEKDAY_AVAILABLE = receivedWeekDayPromotion().toLocaleString();
    const WEEKEND_AVAILABLE = receivedWeekendPromotion().toLocaleString();
    const CHAMPAGNE_AVAILABLE = receivedChampagnePromotion().toLocaleString();
    const SPECIAL_AVAILABLE = receivedSpecialPromotion().toLocaleString();

    let anyPromotionApplied = false;

    if (DDAY_AVAILABLE !== "0") {
      MissionUtils.Console.print(
        `크리스마스 디데이 할인: -${DDAY_AVAILABLE}원`
      );
      anyPromotionApplied = true;
    }

    if (WEEKDAY_AVAILABLE !== "0") {
      MissionUtils.Console.print(`평일 할인: -${WEEKDAY_AVAILABLE}원`);
      anyPromotionApplied = true;
    }
    if (WEEKEND_AVAILABLE !== "0") {
      MissionUtils.Console.print(`주말 할인: -${WEEKEND_AVAILABLE}원`);
      anyPromotionApplied = true;
    }
    if (SPECIAL_AVAILABLE !== "0") {
      MissionUtils.Console.print(`특별 할인: -${SPECIAL_AVAILABLE}원`);
      anyPromotionApplied = true;
    }
    if (CHAMPAGNE_AVAILABLE !== "0") {
      MissionUtils.Console.print(`증정 이벤트: -${CHAMPAGNE_AVAILABLE}원`);
      anyPromotionApplied = true;
    }
    if (!anyPromotionApplied) {
      MissionUtils.Console.print("없음");
    }
  },

  printReceivedTotalBenefitPrice() {
    MissionUtils.Console.print("\n<총혜택 금액>");
    const TOTAL_BENEFITPRICE = receivedTotalBenefitPrice().toLocaleString();
    MissionUtils.Console.print(`${TOTAL_BENEFITPRICE}원`);
  },

  printTotalPriceAfterDiscount() {
    MissionUtils.Console.print("\n<할인 후 예상 결제 금액>");
    const TOTAL_AFTER = totalPriceAfterDiscount().toLocaleString();
    MissionUtils.Console.print(`${TOTAL_AFTER}원`);
  },

  printEventBadge() {
    MissionUtils.Console.print("\n<12월 이벤트 배지>");
    const GET_BADGE = sendBadge();
    MissionUtils.Console.print(`${GET_BADGE}`);
  },
};

export default OutputView;
