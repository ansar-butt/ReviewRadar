import axios from 'axios';

const fetchPopularProducts = async () => {
    try {
        const response = await axios.get('/api/popular');
        return response.data;
    } catch (error) {
        console.error('Error fetching popular products:', error);
        throw error;
    }
};

const fetchSentimentAnalysis = async (productURL: string) => {
    try {
        const response = await axios.post('/api/sentiment', { productURL });
        return response.data;
    } catch (error) {
        console.error('Error fetching sentiment analysis:', error);
        throw error;
    }
};

export { fetchPopularProducts, fetchSentimentAnalysis };
