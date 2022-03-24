const _isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) if (number % i === 0) return false;
  return number > 1;
};

const _divisors = (number) => {
  return Array.from(Array(number + 1), (_, i) => i).filter((i) => number % i === 0);
};

const divisorsAndPrime = (number) => {
  const divisors = _divisors(Number(number));
  if (!divisors.length) return;

  const primes = [];
  for (let i = 0; i < divisors.length; i++) {
    if (_isPrime(divisors[i])) primes.push(divisors[i]);
  }

  return {
    divisors,
    primes
  };
};

module.exports = {
  divisorsAndPrime
};
