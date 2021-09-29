const fibionacci = (n) => {
    return n < 1 ? 0 : n <= 2 ? 1 : fibionacci(n - 1) + fibionacci(n - 2);
}

module.exports = {
    fibionacci: (n) => {
        return fibionacci(Math.abs(n));
    },
};