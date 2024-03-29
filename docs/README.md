# 미션 - 크리스마스 프로모션

## 기능 구현 목록

### MAIN 기능 구현

- [ ] 증정 메뉴

  > 할인 전 **총주문 금액이 12만원 이상**일 때, 샴페인 1개(25,000원) 증정

  > 아닐 시 , 없음

- [ ] 혜택 내역

  - 고객에게 적용된 이벤트 내역만 보여 주세요.

  - 적용된 이벤트가 하나도 없다면 혜택 내역 "없음"으로 보여 주세요.

  - 혜택 내역에 여러 개의 이벤트가 적용된 경우, 출력 순서는 자유롭게 출력해주세요.

- [ ] 총혜택 금액

  > 총혜택 금액 = 할인 금액의 합계 + 증정 메뉴의 가격

- [ ] 할인 후 예상 결제 금액

  > 할인 후 예상 결제 금액 = 할인 전 총주문 금액 - 할인 금액

- [ ] 12월 이벤트 배지

  > **총혜택 금액**에 따라 다른 이벤트 배지를 부여

  > ⭐5천 원 이상: 별

  > 🌲1만 원 이상: 트리

  > 🧑🏻‍🎄2만 원 이상: 산타

### Input Output 정리

- 소개 Output

```

안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.

```

- 예상 방문 날짜 Input

```

12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)

```

> 1 이상 31 이하의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.

- 주문할 메뉴 Input

```

주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)

```

> 메뉴 형식이 예시와 다른 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.

> 고객이 메뉴판에 없는 메뉴를 입력하는 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.

> 메뉴의 개수가 1이상의 숫자가 아닌 경우, "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.

> 중복 메뉴를 입력한 경우(e.g. 시저샐러드-1,시저샐러드-1), "[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요."라는 에러 메시지를 보여 주세요.

- 주문한 메뉴 Output

```

<주문 메뉴>
타파스 1개
제로콜라 1개

```

- 총 주문 금액 Output

```

<할인 전 총주문 금액>
8,500원

```

- 증정 메뉴 Output

```
 <증정 메뉴>
```

- 혜택 내역 Output

```
  <혜택 내역>
```

- 총혜택 금액 Outupt

```
  <총혜택 금액>
```

- 할일 후 예상 결제 금액

```
  <할인 후 예상 결제 금액>
```

- 12월 이벤트 배지 Output

```
  <12월 이벤트 배지>
```

## 기능 요구 사항

### 12월 이벤트 계획

- 크리스마스 디데이 할인 (1 ~ 25일)
- 총주문 금액에서 ~ 1일 : 1000 원 할인, 2일 1100 원 할인 ...
- 평일 할인(**일요일 ~ 목요일**): 디저트 메뉴 1 개당, 2023원 할인

```

<디저트>
초코케이크(15,000), 아이스크림(5,000)
<평일 날짜>
03, 04, 05, 06, 07
10, 11, 12, 13, 14
17, 18, 19, 20, 21
24, 25, 26, 27, 28
31

```

- 주말 할인(**금요일, 토요일**): 메인 메뉴를 메뉴 1개당 2,023원 할인

```

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)
<주말 날짜>
01, 02
08, 09
15, 16
22, 23
29, 30

```

- 🌟특별 할인(**일요일 + 크리스마스 당일(25)**): 총주문 금액에서 1,000원 할인

- 증정 이벤트: 할인 전 **총주문 금액이 12만원 이상**일 때, 샴페인 1개 증정

- 이벤트 기간: 평일 할인, 주말 할인, 증정 이벤트는 31일까지 적용 (크리스마스 디데이 할인은 크리스마스 당일(25)까지)

## 혜택 금액에 따른 12월 이벤트 배지 부여

**총혜택 금액**에 따라 다른 이벤트 배지를 부여

```

- ⭐5천 원 이상: 별
- 🌲1만 원 이상: 트리
- 🧑🏻‍🎄2만 원 이상: 산타

```

## 고객에게 안내할 이벤트 주의 사항

1\) 이벤트 적용이 안 되는 경우

- 총주문 금액 10,000원 미만
- 음료만 주문
  2\) 최대 주문 수량 제한
  메뉴는 한 번에 최대 20개까지만 (_메뉴 카테고리 경계 없이_)

### 메뉴

```

<애피타이저>
양송이수프(6,000), 타파스(5,500), 시저샐러드(8,000)

<메인>
티본스테이크(55,000), 바비큐립(54,000), 해산물파스타(35,000), 크리스마스파스타(25,000)

<디저트>
초코케이크(15,000), 아이스크림(5,000)

<음료>
제로콜라(3,000), 레드와인(60,000), 샴페인(25,000)

```

### 기대하는 '12월 이벤트 플래너'의 예시 모습

```

안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.
12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)
3
주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)
티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1
12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!

<주문 메뉴>
티본스테이크 1개
바비큐립 1개
초코케이크 2개
제로콜라 1개

<할인 전 총주문 금액>
142,000원

<증정 메뉴>
샴페인 1개

<혜택 내역>
크리스마스 디데이 할인: -1,200원
평일 할인: -4,046원
특별 할인: -1,000원
증정 이벤트: -25,000원

<총혜택 금액>
-31,246원

<할인 후 예상 결제 금액>
135,754원

<12월 이벤트 배지>
산타

```
