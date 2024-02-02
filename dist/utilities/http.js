var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function fetchData(endpoint) {
    return __awaiter(this, void 0, void 0, function* () {
        const BASE_URL = 'http://localhost:3000';
        const url = `${BASE_URL}/${endpoint}`;
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch data. Status: ${response.status}`);
            }
            const responseData = yield response.json();
            console.log(responseData[5]);
            if (!Array.isArray(responseData)) {
                console.error('Invalid response format. Expected an array.');
                throw new Error('Invalid response format');
            }
            return responseData;
        }
        catch (error) {
            console.error('Error fetching data:', error);
            throw error; // Rethrow the error to propagate it up
        }
    });
}
