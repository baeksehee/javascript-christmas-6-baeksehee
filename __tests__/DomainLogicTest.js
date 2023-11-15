import {
  ChampagnePromotionAvailable,
  toTalPriceLogic,
} from "../src/DomainLogic";
import menuAndQuantity from "../src/utils/menuAndQuantity";

jest.mock("../src/InputView", () => ({
  christmasInstance: {
    getMenus: jest.fn(),
  },
}));

jest.mock("../src/utils/menuAndQuantity", () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock("../src/DomainLogic", () => ({
  ...jest.requireActual("../src/DomainLogic"),
  toTalPriceLogic: jest.fn(),
}));

describe("DomainLogic 기능 테스트", () => {
  test("할인 전 총주문 금액", () => {
    const mockedMenus = ["양송이수프-2", "양송이수프-1", "티본스테이크-3"];
    require("../src/InputView").christmasInstance.getMenus.mockReturnValue(
      mockedMenus
    );

    menuAndQuantity
      .mockReturnValueOnce({ MENU_NAME: "양송이수프", QUANTITY: 2 })
      .mockReturnValueOnce({ MENU_NAME: "초코케이크", QUANTITY: 1 })
      .mockReturnValueOnce({ MENU_NAME: "티본스테이크", QUANTITY: 3 });

    const MENUS_PRICE = {
      양송이수프: 6000,
      초코케이크: 15000,
      티본스테이크: 55000,
    };

    toTalPriceLogic.mockReturnValueOnce(192000);

    const result = toTalPriceLogic(MENUS_PRICE);
    const expectedTotalPrice = 2 * 6000 + 1 * 15000 + 3 * 55000;

    expect(result).toBe(expectedTotalPrice);
  });

  test("증정 메뉴", () => {
    const mockedMenus = ["아이스크림-2", "초코케이크-1"];
    require("../src/InputView").christmasInstance.getMenus.mockReturnValue(
      mockedMenus
    );

    toTalPriceLogic.mockReturnValueOnce(25000);

    const result = ChampagnePromotionAvailable();
    expect(result).toBe(false);
  });
});
