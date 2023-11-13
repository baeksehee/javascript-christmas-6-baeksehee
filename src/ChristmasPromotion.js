class ChristmasPromotion {
  #date;
  #menus;

  constructor(date, menus) {
    this.#date = date;
    this.#menus = menus;
  }

  #dateValidate(date) {
    if (!(date >= 1 && date <= 31)) {
      throw new Error("[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.");
    }
  }

  startDateValidate(date) {
    this.#dateValidate(date);
    this.#date = date;
  }

  #menusValidate(menus) {
    const SEENMENUS = new Set();

    for (const menu of menus) {
      if (!/^(.+)-(.+)$/.test(menu)) {
        throw new Error(
          `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        );
      }

      const MENU_LIST = [
        "양송이수프",
        "타파스",
        "시저샐러드",
        "티본스테이크",
        "바비큐립",
        "해산물파스타",
        "크리스마스파스타",
        "초코케이크",
        "아이스크림",
        "제로콜라",
        "레드와인",
        "샴페인",
      ];

      const [MENU_PART, QUANTITY] = menu.split("-");
      const QUANTITY_PART = parseInt(QUANTITY, 10);

      if (!MENU_LIST.includes(MENU_PART)) {
        throw new Error(
          `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        );
      }

      if (QUANTITY_PART <= 0) {
        throw new Error(
          `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        );
      }

      // 중복 디테일하게 에러 처리 필요
      if (SEENMENUS.has(menu)) {
        throw new Error(
          `[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.`
        );
      }

      SEENMENUS.add(menu);
    }
  }

  startMenuValidate(menus) {
    this.#menusValidate(menus);
    this.#menus = menus;
  }

  getDate() {
    return this.#date;
  }

  getMenus() {
    return this.#menus;
  }
}

export default ChristmasPromotion;
