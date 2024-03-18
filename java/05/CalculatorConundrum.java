// https://exercism.org/tracks/java/exercises/calculator-conundrum

class CalculatorConundrum {
  public String calculate(int operand1, int operand2, String operation) {
    validateOperation(operation);

    try {
      switch (operation) {
        case "+":
          return operand1 + " " + operation + " " + operand2 + " = " + (operand1 + operand2);
        case "*":
          return operand1 + " " + operation + " " + operand2 + " = " + (operand1 * operand2);
        case "/":
          return divide(operand1, operand2);
        default:
          throw new IllegalOperationException("Operation '" + operation + "' does not exist");
      }
    } catch (ArithmeticException ae) {
      throw new IllegalOperationException("Division by zero is not allowed", ae);
    }
  }

  private void validateOperation(String operation) {
    if (operation == null) {
      throw new IllegalArgumentException("Operation cannot be null");
    }

    if (operation.isEmpty()) {
      throw new IllegalArgumentException("Operation cannot be empty");
    }
  }

  private String divide(int operand1, int operand2) {
    if (operand2 == 0) {
      throw new ArithmeticException("Division by zero");
    }
    return operand1 + " / " + operand2 + " = " + (operand1 / operand2);
  }
}
