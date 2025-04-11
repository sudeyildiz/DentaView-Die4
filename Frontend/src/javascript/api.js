const API_URL = process.env.REACT_APP_API_URL;

export const fetchHello = async () => {
    const response = await fetch('${API_URL}/hello');
    return response.text();
};