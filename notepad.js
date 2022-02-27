function number_cardinality(number) {
  if (Number.isInteger(number)) {
    if (number%10 == 0) {
      return 'zero'
    } else if (number%5 == 0) {
      return 'five'
    } else if (number%2 == 0 && number%10 != 0) {
      return 'even'
    } else if (number%2 != 0 && number%5 != 0) {
      return 'odd'
    }
  } else {
    return 'Integer validation error. Passed value is not an integer.'
  }
}

module.exports = number_cardinality;