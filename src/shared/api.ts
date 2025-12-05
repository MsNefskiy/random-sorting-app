import "dotenv/config";


function getApiUrl(): string {
    if (!process.env.API_URL) {
        throw new Error("API_URL не задан в переменных окружения");
    }
    return process.env.API_URL;
}


export async function sendResults(data: {
    sorted: number[],
}): Promise<void> {
    try {
        const apiUrl = getApiUrl();
        
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });
        
        console.log(`Успешно! Статус: ${response.status}`);
        
    } catch (error: any) {
        console.log(`Не удалось отправить: ${error.message}`);
        console.log('Продолжаем работу без отправки...');
    }
}