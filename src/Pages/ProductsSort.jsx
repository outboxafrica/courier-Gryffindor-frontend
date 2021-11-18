import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase'
import './Products.css'
import { useLocation, useParams } from "react-router-dom";

function ProductsSort() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const location = useLocation();
    const categoryValue = location.state;
    const { category } = useParams();

    console.log(categoryValue);
    console.log(category);

    //get categories from firebase
    useEffect(() => {
        db.collection('categories')
            .onSnapshot(snapshot => {
                setCategories(snapshot.docs.map(doc => ({
                    id: doc.id,
                    category: doc.data()
                })))
            })
    }, [])


    //get products from firebase
    useEffect(() => {
        db.collection('products')
            .onSnapshot(snapshot => {
                setProducts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    product: doc.data()
                })))
            })
    }, [])

    return (
        <>
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Products - {category}</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><Link to="/"><i className="lni lni-home"></i> Home</Link></li>
                                <li><Link to="/">Shop</Link></li>
                                <li>Products</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <section className="product-grids section product-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-12">

                            <div className="product-sidebar">

                                <div className="single-widget search">
                                    <h3>Search Product</h3>
                                    <form action="#">
                                        <input type="text" placeholder="Search Here..." />
                                        <button type="submit"><i className="lni lni-search-alt"></i></button>
                                    </form>
                                </div>


                                <div className="single-widget">
                                    <h3>All Categories</h3>
                                    <ul className="list">
                                        {categories.map(({ id, category }) => (
                                            <li key={id}>
                                                <Link key={id}
                                                    to={{
                                                        pathname: `/products/${category.name}`,
                                                        state: category,
                                                    }}
                                                >
                                                    {category.name}</Link></li>
                                        ))}
                                        <li>
                                            <Link to="/products">Clear Filter </Link>
                                        </li>
                                    </ul>
                                </div>


                                <div className="single-widget range">
                                    <h3>Price Range</h3>
                                    <input type="range" className="form-range" name="range" step="1" min="100" max="10000" onchange="rangePrimary.value=value" />
                                    <div className="range-inner">
                                        <label>$</label>
                                        <input type="text" id="rangePrimary" placeholder="100" />
                                    </div>
                                </div>


                                <div className="single-widget condition">
                                    <h3>Filter by Price</h3>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                        <label className="form-check-label" for="flexCheckDefault1">
                                            $50 - $100L (208)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                        <label className="form-check-label" for="flexCheckDefault2">
                                            $100L - $500 (311)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                        <label className="form-check-label" for="flexCheckDefault3">
                                            $500 - $1,000 (485)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                        <label className="form-check-label" for="flexCheckDefault4">
                                            $1,000 - $5,000 (213)
                                        </label>
                                    </div>
                                </div>


                                <div className="single-widget condition">
                                    <h3>Filter by Brand</h3>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                                        <label className="form-check-label" for="flexCheckDefault11">
                                            Apple (254)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                                        <label className="form-check-label" for="flexCheckDefault22">
                                            Bosh (39)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault33" />
                                        <label className="form-check-label" for="flexCheckDefault33">
                                            Canon Inc.(128)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault44" />
                                        <label className="form-check-label" for="flexCheckDefault44">
                                            Dell (310)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault55" />
                                        <label className="form-check-label" for="flexCheckDefault55">
                                            Hewlett-Packard (42)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault66" />
                                        <label className="form-check-label" for="flexCheckDefault66">
                                            Hitachi (217)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault77" />
                                        <label className="form-check-label" for="flexCheckDefault77">
                                            LG Electronics (310)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault88" />
                                        <label className="form-check-label" for="flexCheckDefault88">
                                            Panasonic (74)
                                        </label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-lg-9 col-12">
                            <div className="product-grids-head">
                                <div className="product-grid-topbar">
                                    <div className="row align-items-center">
                                        <div className="col-lg-7 col-md-8 col-12">
                                            <div className="product-sorting">
                                                <label for="sorting">Sort by:</label>
                                                <select className="form-control" id="sorting">
                                                    <option>Popularity</option>
                                                    <option>Low - High Price</option>
                                                    <option>High - Low Price</option>
                                                    <option>Average Rating</option>
                                                    <option>A - Z Order</option>
                                                    <option>Z - A Order</option>
                                                </select>
                                                <h3 className="total-show-product">Showing: <span>1 - 12 items</span></h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-4 col-12">
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <button className="nav-link active" id="nav-grid-tab" data-bs-toggle="tab" data-bs-target="#nav-grid" type="button" role="tab" aria-controls="nav-grid" aria-selected="true"><i className="lni lni-grid-alt"></i></button>
                                                    <button className="nav-link" id="nav-list-tab" data-bs-toggle="tab" data-bs-target="#nav-list" type="button" role="tab" aria-controls="nav-list" aria-selected="false"><i className="lni lni-list"></i></button>
                                                </div>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show" id="nav-grid" role="tabpanel" aria-labelledby="nav-grid-tab">
                                        <div className="row">
                                            {
                                                products.filter(({ id, product }) => product.category === category).map(({ id, product }) => (
                                                    product ? (
                                                        <div className="col-lg-4 col-md-6 col-12" key={id}>
                                                            {/* <!-- Start Single Product --> */}
                                                            <div className="single-product">
                                                                <div className="product-image">
                                                                    <img src={product.image} alt="#" />
                                                                    {
                                                                        product.discount === 0 ? ('') : (
                                                                            <span className="sale-tag">-{product.discount}%</span>
                                                                        )
                                                                    }
                                                                    <Link key={product.id}
                                                                        to={{
                                                                            pathname: `/product/${id}`,
                                                                            state: product,
                                                                        }}
                                                                    >
                                                                        <div className="button">
                                                                            <button className="btn"><i className="lni lni-cart"></i> Add to Cart</button>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="product-info">
                                                                    <span className="category">{product.category}</span>
                                                                    <h4 className="title">
                                                                        <Link key={product.id}
                                                                            to={{
                                                                                pathname: `/product/${id}`,
                                                                                state: product,
                                                                            }}
                                                                        >
                                                                            {product.name}
                                                                        </Link>
                                                                    </h4>
                                                                    <ul className="review">
                                                                        {
                                                                            Array(product.rating).fill().map((_, index) => (
                                                                                <li key={index}><i className="lni lni-star-filled"></i></li>
                                                                            ))
                                                                        }
                                                                        <li><span>{product.rating} Review(s)</span></li>
                                                                    </ul>
                                                                    <div className="price">
                                                                        {
                                                                            product.discount === 0 ? (
                                                                                <span>
                                                                                    {
                                                                                        product.price.toLocaleString('en-US', {
                                                                                            style: 'currency',
                                                                                            currency: 'USD',
                                                                                            maximumFractionDigits: 2,
                                                                                        })
                                                                                    }
                                                                                </span>
                                                                            ) : (
                                                                                <span>
                                                                                    {
                                                                                        (product.price - (product.price * product.discount / 100)).toLocaleString('en-US', {
                                                                                            style: 'currency',
                                                                                            currency: 'USD',
                                                                                            maximumFractionDigits: 2,
                                                                                        })
                                                                                    }
                                                                                </span>
                                                                            )

                                                                        }
                                                                        {
                                                                            product.discount === 0 ? ('') : (
                                                                                <span className="discount-price">
                                                                                    {
                                                                                        product.price.toLocaleString('en-US', {
                                                                                            style: 'currency',
                                                                                            currency: 'USD',
                                                                                            maximumFractionDigits: 2,
                                                                                        })
                                                                                    }
                                                                                </span>
                                                                            )
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <!-- End Single Product --> */}
                                                        </div>
                                                    ) : (
                                                        <div className="col-lg-4 col-md-6 col-12">
                                                            <div className="single-product">
                                                                <div className="product-image">
                                                                    <p>Empty List</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                ))
                                            }
                                        </div>
                                        <div className="row">
                                            <div className="col-12">

                                                <div className="pagination left">
                                                    <ul className="pagination-list">
                                                        <li><Link to="/">1</Link></li>
                                                        <li className="active"><Link to="/">2</Link></li>
                                                        <li><Link to="/">3</Link></li>
                                                        <li><Link to="/">4</Link></li>
                                                        <li><Link to="/"><i className="lni lni-chevron-right"></i></Link></li>
                                                    </ul>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductsSort
