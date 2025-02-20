'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  images: {
    id: string;
    url: string;
    width: number;
    height: number;
  }[];
  variants: {
    id: string;
    price?: {
      amount: number;
      currency: string;
    };
  }[];
}

const sectionVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  initial: { opacity: 0, y: -30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const gridVariants = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const StoreSection = styled.section`
  background-color: #000000;
  padding: 4rem 1rem 6rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    padding: 6rem 2rem 8rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 2rem 10rem;
  }
`;

const ContentContainer = styled.div`
  max-width: 1600px;
  width: 100%;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const ProductGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 350px));
  gap: 3rem;
  width: 100%;
  justify-content: center;
`;

const ProductCard = styled.div`
  position: relative;
  background-color: transparent;
  transition: transform 0.2s ease-in-out;
  width: 100%;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 1rem;
  max-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled(Image)`
  object-fit: contain;
  width: 100% !important;
  max-height: 500px !important;
  height: auto !important;
  position: relative !important;
  transition: all 0.3s ease-in-out;
`;

const PrimaryImage = styled(ProductImage)`
  opacity: 1;
  ${ProductCard}:hover & {
    opacity: 0;
  }
`;

const SecondaryImage = styled(ProductImage)`
  position: absolute !important;
  top: 0;
  left: 0;
  opacity: 0;
  ${ProductCard}:hover & {
    opacity: 1;
  }
`;

const SaleBadge = styled.div`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: #ff3b30;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 10;
`;

const ProductDetails = styled.div`
  padding: 0.5rem 0;
`;

const ProductName = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductType = styled.p`
  font-size: 0.875rem;
  color: #a0a0a0;
  margin-bottom: 0.75rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ShopNowButton = styled.span`
  display: inline-block;
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    background-color: #ffffff;
    transition: width 0.2s ease;
  }

  ${ProductCard}:hover &:after {
    width: 100%;
  }
`;

const LoadingContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
`;

const Spinner = styled.div`
  border: 3px solid rgba(255, 255, 255, 0.1);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border-top-color: #ffffff;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const ErrorContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  padding: 0 1.25rem;
  width: 100%;
`;

const ErrorText = styled.p`
  color: #ff3b30;
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const RetryButton = styled.button`
  background-color: transparent;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid #ffffff;
  cursor: pointer;
  transition: all 0.2s;
  letter-spacing: 0.05em;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const EmptyContainer = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  width: 100%;
`;

const EmptyText = styled.p`
  color: #a0a0a0;
  font-size: 1rem;
`;

export default function DilloDayStore(): React.ReactElement {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const STOREFRONT_TOKEN = process.env.NEXT_PUBLIC_STOREFRONT_TOKEN || '';
  const COLLECTION_ID = process.env.NEXT_PUBLIC_COLLECTION_ID || '';
  const fetchProducts = useCallback(async () => {
    try {
      if (!STOREFRONT_TOKEN) {
        throw new Error(
          'Missing storefront token. Please check environment variables.'
        );
      }

      const response = await fetch(
        `https://storefront-api.fourthwall.com/v1/collections/${COLLECTION_ID}/products?storefront_token=${STOREFRONT_TOKEN}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data.results || []);
      setError(null);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(
        error instanceof Error ? error.message : 'Failed to fetch products'
      );
    } finally {
      setLoading(false);
    }
  }, [COLLECTION_ID, STOREFRONT_TOKEN]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner />
      </LoadingContainer>
    );
  }

  if (error) {
    return (
      <ErrorContainer>
        <ErrorText>{error}</ErrorText>
        <RetryButton onClick={fetchProducts}>RETRY</RetryButton>
      </ErrorContainer>
    );
  }

  if (products.length === 0) {
    return (
      <EmptyContainer>
        <EmptyText>No products found</EmptyText>
      </EmptyContainer>
    );
  }

  return (
    <StoreSection>
      <ContentContainer>
        <motion.div
          variants={sectionVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
        >
          <Header>
            <motion.div variants={titleVariants}>
              <SectionTitle>Carnival Dillo Merch</SectionTitle>
            </motion.div>
          </Header>

          <ProductGrid
            variants={gridVariants}
            initial="initial"
            animate="animate"
          >
            {products.map((product) => {
              const hasDiscount =
                product.variants?.[0]?.price?.amount &&
                product.variants[0].price.amount < 10000;

              const productName = product.name.toUpperCase();
              const shortDescription = product.description.split('.')[0];

              const primaryImage = product.images?.[0];
              const secondaryImage = product.images?.[1] || primaryImage;

              return (
                <ProductCard key={product.id}>
                  <Link
                    href={`https://store.dilloday.com/collections/carnival-dillo`}
                    passHref
                    target="_blank"
                  >
                    <ProductLink>
                      <ImageContainer>
                        {primaryImage && (
                          <>
                            <PrimaryImage
                              src={primaryImage.url}
                              alt={product.name}
                              width={500}
                              height={500}
                              priority
                              fill={false}
                            />
                            <SecondaryImage
                              src={secondaryImage.url}
                              alt={`${product.name} - alternate view`}
                              width={500}
                              height={500}
                              priority={false}
                              fill={false}
                            />
                          </>
                        )}
                        {hasDiscount && <SaleBadge>SALE</SaleBadge>}
                      </ImageContainer>

                      <ProductDetails>
                        <ProductName>{productName}</ProductName>
                        <ProductType>{shortDescription}</ProductType>
                        {product.variants?.[0]?.price && (
                          <ShopNowButton>SHOP NOW</ShopNowButton>
                        )}
                      </ProductDetails>
                    </ProductLink>
                  </Link>
                </ProductCard>
              );
            })}
          </ProductGrid>
        </motion.div>
      </ContentContainer>
    </StoreSection>
  );
}
