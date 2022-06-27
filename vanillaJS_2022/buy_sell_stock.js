// during interation, check if current value is larger than the next value
// if current > next then sell
// if current < next then either buy or continue if already bought
// repeat until the end
const maxProfit = (prices) => {
  let profit = 0;
  let currVal = 0;
  let isBought = false;

  for(let curr=0, next=1; curr<=prices.length; curr++, next++) {  
    if ((prices[curr] > prices[next]) || next === prices.length) {
      if (isBought) {
	profit = prices[curr] - currVal + profit;
	currVal = 0;
	isBought = false;
      }
    } else if (prices[curr] < prices[next] && !isBought) {
      currVal = prices[curr];
      isBought = true;
    }
  };

  return profit;
}

// output 7
const prices1 = [7,1,5,3,6,4];
// output 4
const prices2 = [1,2,3,4,5];
// output 0
const prices3 = [7,6,4,3,1];

console.log(maxProfit(prices1));
console.log(maxProfit(prices2));
console.log(maxProfit(prices3));
