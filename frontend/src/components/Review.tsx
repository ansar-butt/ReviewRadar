import { Card, CardContent, Typography } from '@mui/material';
import { Product } from '../utils/types';

const Review = (product: Product) => {
    return (
        <Card sx={{ marginBottom: '2rem' }}>
            <div className="flex flex-row items-center">
                <img
                    width="100px"
                    src={product.imagePath}
                    alt={product.title}
                />
                <div>
                    <CardContent>
                        {/* Review Title */}
                        <Typography variant="h5" gutterBottom align="center">
                            {product.title}
                        </Typography>
                        {/* Review Content */}
                        <Typography
                            variant="body1"
                            color="textSecondary"
                            align="center"
                        >
                            "{product.review}"
                        </Typography>
                    </CardContent>
                </div>
            </div>
        </Card>
    );
};

export default Review;
