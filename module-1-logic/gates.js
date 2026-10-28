function nandGate(a, b) {
  // это единственный вентиль который дан свыше и 0 тут только когда оба входа 1, иначе результат 1
  if (a === 1 && b === 1) {
    return 0;
  }
  return 1;
}

function notGate(a) {
  // НЕ: NAND с одним и тем же сигналом на обоих входах
  return nandGate(a, a);
}

function andGate(a, b) {
  // И: NAND, перевёрнутый ещё раз. Два переворота отменяют друг друга.
  return notGate(nandGate(a, b));
}

function orGate(a, b) {
  // ИЛИ: перевернуть оба входа а потом NAND
  return nandGate(notGate(a), notGate(b));
}

function xorGate(a, b) {
  // Исключающее ИЛИ: 1 если входы разные
  // Собрано из того что уже есть: (a ИЛИ b) И НЕ (a И b)
  return andGate(orGate(a, b), notGate(andGate(a, b)));
}
