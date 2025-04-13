import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import PopularProducts from './components/PopularProducts';
import Review from './components/Review';
import {
    fetchPopularProducts,
    fetchSentimentAnalysis,
} from './services/apiServices';
import { Product } from './utils/types';

const App = () => {
    const [url, setUrl] = React.useState('');
    const [reviewData, setReviewData] = React.useState({} as Product);
    const [popularProducts, setPopularProducts] = React.useState(
        [] as Product[]
    );

    React.useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await fetchPopularProducts();
                setPopularProducts(products);
            } catch (error) {
                console.error('Error fetching popular products:', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        fetchSentimentAnalysis(url).then((data) => setReviewData(data));
    };

    return (
        <Container
            maxWidth="lg"
            sx={{ padding: '2rem', backgroundColor: '#f8f9fa' }}
        >
            {/* Header */}
            <Box
                sx={{
                    textAlign: 'center',
                    padding: '1rem',
                    borderBottom: '1px solid #e0e0e0',
                    marginBottom: '2rem',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: '0.5rem',
                    }}
                >
                    ReviewRadar
                </Typography>
                <Typography
                    variant="subtitle1"
                    sx={{ color: '#666', fontSize: '1rem' }}
                >
                    Enter a product URL to get reviews or browse popular
                    products below.
                </Typography>
            </Box>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                    border: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    backgroundColor: '#fff',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    marginBottom: '2rem',
                    gap: '1rem', // Adds spacing between the text field and button
                }}
            >
                <TextField
                    label="Enter Product URL"
                    variant="outlined"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    sx={{
                        flex: 1, // Makes the text field take up available space
                        maxWidth: '600px',
                    }}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '0.8rem 2rem',
                        fontSize: '1rem',
                        '&:hover': { backgroundColor: '#0056b3' },
                    }}
                >
                    Get Reviews
                </Button>
            </Box>

            {/* Reviews for Entered URL */}
            {reviewData?.imagePath && (
                <Box
                    sx={{
                        marginBottom: '2rem',
                        padding: '1rem',
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                        backgroundColor: '#fff',
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography
                        variant="h4"
                        align="left"
                        gutterBottom
                        sx={{
                            marginBottom: '2rem',
                            fontWeight: 'bold',
                            color: '#333',
                        }}
                    >
                        Product Review
                    </Typography>
                    <Review {...reviewData} />
                </Box>
            )}

            {/* Popular Products Section */}
            <PopularProducts products={popularProducts} />
        </Container>
    );
};

export default App;
