// A number n is called prime happy if there is at least one prime less than n and the sum of all primes less than n is evenly divisible by n.
// Write isPrimeHappy(n) which returns true if n is prime happy else false.

// My Solution:

function isPrimeHappy(n) {
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  let hasPrimeLessThanN = false;
  let primes = [];
  for (let i = 0; i < n; i++) {
    if (isPrime(i)) {
      hasPrimeLessThanN = true;
      primes.push(i);
    }
  }

  return primes.reduce((a, b) => a + b, 0) % n == 0 && hasPrimeLessThanN;
}
