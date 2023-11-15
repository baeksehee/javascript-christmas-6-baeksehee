import { toTalPriceLogic } from "../src/DomainLogic";
import menuAndQuantity from "../src/utils/menuAndQuantity";

jest.mock("../src/InputView", () => ({
  christmasInstance: {
    getMenus: jest.fn(() => ["양송이수프-2", "초코케이크-1", "티본스테이크-3"]),
  },
}));

jest.mock("../src/utils/menuAndQuantity");

describe("DomainLogic 기능 테스트", () => {
  test("할인 전 총주문 금액", () => {
    menuAndQuantity
      .mockReturnValueOnce({ MENU_NAME: "양송이수프", QUANTITY: 2 })
      .mockReturnValueOnce({ MENU_NAME: "초코케이크", QUANTITY: 1 })
      .mockReturnValueOnce({ MENU_NAME: "티본스테이크", QUANTITY: 3 });

    const MENUS_PRICE = {
      양송이수프: 6000,
      초코케이크: 15000,
      티본스테이크: 55000,
    };

    const result = toTalPriceLogic(MENUS_PRICE);
    const expectedTotalPrice = 2 * 6000 + 1 * 15000 + 3 * 55000;

    expect(result).toBe(expectedTotalPrice);
  });
});
