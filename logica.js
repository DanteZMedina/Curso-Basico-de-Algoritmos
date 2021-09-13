function secondLargestNumber(numbers)
{
    let first = numbers[0];
    let second = 0;
    let i = 0;
    for (i = 0; i < numbers.length; i ++)
    {
        if (numbers[i] > first)
        {
            second = first;
            first = numbers[i];
        }
        if (numbers[i] > second && numbers[i] < first)
        {
            second = numbers[i];
        }
    }
    return second;
}

let nums = [8, 2, 4, 15, 44, 902, 24, 55, 102, 404];
console.log(secondLargestNumber(nums));