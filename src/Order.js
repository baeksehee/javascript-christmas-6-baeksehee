import menuAndQuantity from "./utils/menuAndQuantity.js";

class Order {
  #order;

  constructor(order) {
    this.#order = Array.isArray(order) ? order : [order];
    this.#orderQuantityValidate();
  }

  #orderQuantityValidate() {
    this.#order.forEach((menu) => {
      const { QUANTITY } = menuAndQuantity(menu);

      if (QUANTITY > 20) {
        throw new Error(
          `[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.`
        );
      }
    });
  }
}

export default Order;
