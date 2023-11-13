import { MissionUtils } from "@woowacourse/mission-utils";
import { christmasInstance } from "./InputView.js";
import { ChampagnePromotionAvailable, toTalPriceLogic } from "./DomainLogic.js";

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
      MissionUtils.Console.print(`${eachMenu}`);
    });
  },

  printTotalPrice() {
    MissionUtils.Console.print("\n<할인 전 총주문 금액>");
    const TOTAL_PRICE = toTalPriceLogic(
      christmasInstance.getMenus()
    ).toLocaleString();
    MissionUtils.Console.print(`${TOTAL_PRICE}원`);
  },

  printChampagnePromotion() {
    MissionUtils.Console.print("\n<증정 메뉴>");
    const CHAMPAGNEPROMOTION_AVAILABLE = ChampagnePromotionAvailable();
    if (CHAMPAGNEPROMOTION_AVAILABLE === true) {
      MissionUtils.Console.print("샴페인 1개");
    } else MissionUtils.Console.print("없음");
  },
};

export default OutputView;
