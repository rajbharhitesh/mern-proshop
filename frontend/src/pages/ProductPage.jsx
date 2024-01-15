import { Link, useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { useGetProductDetailsQuery } from '../redux/api/productApi';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import Rating from '../components/Rating';

const ProductPage = () => {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    error,
    isError,
  } = useGetProductDetailsQuery(productId);

  useEffect(() => {
    if (isError) {
      toast.error(error?.data?.message || error.error);
    }
  }, [isError, error]);

  if (isLoading) {
    return <h1>Loader</h1>;
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row className="my-5">
        <Col md={5}>
          <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product?.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product?.rating}
                text={`${product?.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Price: ${product?.price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>{product?.description}</strong>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Price:</strong>
                  </Col>
                  <Col>
                    <strong>{product?.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Status:</strong>
                  </Col>
                  <Col>
                    <strong>
                      {product?.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn btn-block w-100"
                  type="button"
                  disabled={product?.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
