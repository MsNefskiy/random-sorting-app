export interface SortingAlgorithm {
    name: string;
    sort(array: number[]): number[]
}

export const SORTING_ALGORITHMS: SortingAlgorithm[] = [
    {
        name: 'Пузырьковая сортировка',
        sort: (arr: number[]) => {
            const array = [...arr];
            const n = array.length;

            for (let i = 0; i < n - 1; i++) {
                for (let j = 0; j < n - i - 1; j++) {
                    if (array[j]! > array[j + 1]!) {
                        [array[j], array[j + 1]] = [array[j + 1]!, array[j]!];
                    }
                }
            }

            return array;
        }
    },
    {
        name: 'Быстрая сортировка',
        sort: (arr: number[]) => {
            if (arr.length <= 1) {
                return arr;
            }

            const pivot = arr[Math.floor(arr.length / 2)];
            const left = [];
            const right = [];
            const equal = [];

            for (const element of arr) {
                if (element < pivot!) {
                    left.push(element);
                } else if (element > pivot!) {
                    right.push(element);
                } else {
                    equal.push(element);
                }
            }

            return [...quickSort(left), ...equal, ...quickSort(right)];

        }
    }

]



export function bubbleSort(arr: number[]): number[] {
    const array = [...arr];
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (array[j]! > array[j + 1]!) {
                [array[j], array[j + 1]] = [array[j + 1]!, array[j]!];
            }
        }
    }

    return array;
}

export function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (const element of arr) {
        if (element < pivot!) {
            left.push(element);
        } else if (element > pivot!) {
            right.push(element);
        } else {
            equal.push(element);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
}
