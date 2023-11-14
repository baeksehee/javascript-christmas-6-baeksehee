import { MissionUtils } from "@woowacourse/mission-utils";
import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class App {
  async run() {
    try {
      OutputView.printIntroduction();
      await InputView.readDate();
      await InputView.readOrderMenu();
      OutputView.printBenefitIntroduction();
      OutputView.printMenu();
      OutputView.printTotalPrice();
      OutputView.printChampagnePromotion();
      OutputView.printReceivedPromotion();
      OutputView.printReceivedTotalBenefitPrice();
      OutputView.printTotalPriceAfterDiscount();
      OutputView.printEventBadge();
    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
