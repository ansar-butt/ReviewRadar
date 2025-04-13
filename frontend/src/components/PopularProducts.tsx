import { Typography, Box } from '@mui/material';
import { Product } from '../utils/types';
import Review from './Review';

type PopularProductsProps = {
    products: Product[];
};

const PopularProducts = ({ products }: PopularProductsProps) => {
    return (
        <Box
            sx={{
                padding: '2rem',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#fff',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                marginBottom: '2rem',
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
                Popular Product Reviews
            </Typography>
            <div className="flex flex-wrap justify-center flex-col">
                {products.map((product, index) => (
                    <Review {...product} key={index} />
                ))}
            </div>
        </Box>
    );
};

export default PopularProducts;
