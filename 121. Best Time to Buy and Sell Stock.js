/**
 * @param {number[]} prices
 * @return {number}
 */
//Brute force, Basic
var maxProfitBF = function (prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        let curBuyPrice = prices[i];
        for (let j = i + 1; j < prices.length; j++) {
            let curSellPrice = prices[j];
            if (curBuyPrice < curSellPrice) {
                maxProfit = Math.max(maxProfit, curSellPrice - curBuyPrice)
            }
        }
    }
    return maxProfit;
};

//One pass approach, keep track of the min and max profit so far
var maxProfit = function (prices) {
    let min = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        maxProfit = Math.max(prices[i] - min, maxProfit);
    }
    return maxProfit;
};

maxProfit([7,1,5,3,6,4])