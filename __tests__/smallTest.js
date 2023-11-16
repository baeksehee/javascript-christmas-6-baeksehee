import menuAndQuantity from "../src/utils/menuAndQuantity";

describe("UI 외의 작은 기능 테스트", () => {
  test.each([
    ["양송이수프-2", { MENU_NAME: "양송이수프", QUANTITY: 2 }],
    ["초코케이크-1", { MENU_NAME: "초코케이크", QUANTITY: 1 }],
    ["티본스테이크-10", { MENU_NAME: "티본스테이크", QUANTITY: 10 }],
  ])("메뉴 이름과 수량 구분하여 반환", (input, expected) => {
    // when
    const result = menuAndQuantity(input);

    // then
    expect(result).toEqual(expected);
  });
});
