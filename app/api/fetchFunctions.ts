export const basicfetch = async <returnType>(endpoint: string): Promise<returnType> => {
    const response = await fetch('http://localhost:3000'+endpoint);

    const data = await response.json();

    return data;
}