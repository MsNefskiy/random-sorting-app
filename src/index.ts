import { sendResults } from "./shared/api";
import { SORTING_ALGORITHMS, type SortingAlgorithm } from "./shared/sorting";

class RandomSortingApp {
    private readonly MIN_COUNT = 20;
    private readonly MAX_COUNT = 100;
    private readonly MIN_VALUE = -100;
    private readonly MAX_VALUE = 100;

    private generateRandomNumbers(): number[] {
        const count = Math.floor(
            Math.random() * (this.MAX_COUNT - this.MIN_COUNT + 1) + this.MIN_COUNT
        );

        const numbers = Array.from({ length: count }, () => Math.floor(
            Math.random() * (this.MAX_VALUE - this.MIN_VALUE + 1) + this.MIN_VALUE
        ));

        return numbers;
    }

    private getRandomAlgorithm() {
        const randomIndex = Math.floor(Math.random() * SORTING_ALGORITHMS.length);
        return SORTING_ALGORITHMS[randomIndex];
    }

    private sortNumbers(array: number[], algorithm: SortingAlgorithm): { numbers: number[], timeTaken: number } {
        const startTime = Date.now();
        const numbers = algorithm.sort(array);
        const endTime = Date.now();
        const timeTaken = endTime - startTime;

        return { numbers, timeTaken };
    }

    public async run(): Promise<void> {
        console.log('Запуск приложения для генерации и сортировки случайных чисел\n');

        const numbers = this.generateRandomNumbers();
        console.log(`Сгенерировано ${numbers.length} случайных чисел:`);
        console.log(numbers.join(' '));

        const algorithm = this.getRandomAlgorithm();
        console.log(`\nВыбран алгоритм: ${algorithm?.name}`);

        console.log('\nСортировка...');
        const sorted = this.sortNumbers(numbers, algorithm!);

        console.log('\nОтсортированная последовательность:');
        console.log(sorted.numbers.join(' '));
        console.log(`Отсортировано за ${sorted.timeTaken}мс`);

        console.log('\nОтправка результатов...');

        await sendResults({
            sorted: sorted.numbers,
        });

        console.log('\nГотово!');
    }

}

const app = new RandomSortingApp();
app.run().catch(console.error);
