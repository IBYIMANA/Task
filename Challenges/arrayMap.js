function Sum(arr, target) {
    let start = 0;
    let Sum = 0;
    for (let end = 0; end < arr.length; end++) {
        Sum += arr[end];

        while (Sum > target && start <= end) {
            Sum -= arr[start];
            start++;
        }
        if (Sum === target) {
            return true;
        }
    }

    return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(Sum(arr, target));  
