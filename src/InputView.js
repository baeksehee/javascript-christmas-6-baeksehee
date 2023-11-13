import { MissionUtils } from "@woowacourse/mission-utils";
import ChristmasDomain from "./ChristmasPromotion.js";

export const christmasInstance = new ChristmasDomain();

const InputView = {
  async readDate() {
    const input = await MissionUtils.Console.readLineAsync(
      "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n"
    );
    const DATE = parseInt(input, 10);
    christmasInstance.startDateValidate(DATE);
  },

  async readOrderMenu() {
    const input = await MissionUtils.Console.readLineAsync(
      "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n"
    );
    const MENUES = input.split(",");
    christmasInstance.startMenuValidate(MENUES);
  },
  // ...
};

export default InputView;
