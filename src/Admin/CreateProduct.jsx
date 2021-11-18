import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './CreateProduct.css'
import { storage, db } from "../firebase";
import firebase from "firebase";
import { useStateValue } from '../Context/StateProvider';
import LoginAdmin from './LoginAdmin'

function CreateProduct() {
    const [name, setName] = React.useState('');
    const [quantity, setQuantity] = React.useState(0);
    const [rating, setRating] = React.useState(0);
    const [price, setPrice] = React.useState(0)
    const [category, setCategory] = React.useState('');
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
    const [details, setDetails] = useState('');
    const [{ admin }] = useStateValue();
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');


    const handleUpload = (event) => {
        event.preventDefault();
        if (name === '' || quantity === 0 || price === 0 || category === '' || details === '') {
            setError('Please fill all the fields');
        } else if (image === null) {
            setError('Please upload an image');
        } else {

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function ....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    setProgress(progress);
                },
                (error) => {
                    // error function ....
                    console.log(error);
                },
                () => {
                    // complete function ....
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        db.collection('products').add({
                            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                            name: name,
                            quantity: parseInt(quantity),
                            rating: parseInt(rating),
                            price: parseInt(price),
                            category: category,
                            image: url,
                            discount: 0,
                            description: details,
                            username: admin.email
                        });
                        setCategory('');
                        setQuantity(0);
                        setName('');
                        setPrice(0);
                        setRating(0);
                        setImage(null);
                        setDetails('');
                        setProgress(0);
                        setError('');
                    });
                }

            )
        }
    }

    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    //categories
    useEffect(() => {
        db.collection('categories')
            .onSnapshot(snapshot => {
                setCategories(snapshot.docs.map(doc => ({
                    id: doc.id,
                    category: doc.data()
                })))
            })
    }, [])

    return (

        <>
            {admin ? (
                <>
                    <div className="breadcrumbs admin-breads">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-12">
                                    <div className="breadcrumbs-content">
                                        <h1 className="page-title">Create Product</h1>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-12">
                                    <ul className="breadcrumb-nav">
                                        <li><Link to="/admin"><i className="lni lni-home"></i> Home</Link></li>
                                        <li>Create Product</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="account-login section">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
                                    <div className="register-form create-prod">
                                        {
                                            error !== '' ? (
                                                <div className="alert alert-danger">
                                                    {error}
                                                </div>
                                            ) : ('')
                                        }
                                        <form className="row">
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-fn">Product Name</label>
                                                    <input value={name} onChange={event => setName(event.target.value)} className="form-control" type="text" id="reg-fn" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-ln">Picture</label>
                                                    <progress className="imageupload__progress" value={progress} max="100" />
                                                    <input className="form-control" type="file" id="reg-ln" onChange={handleChange} />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-phone">Category</label>
                                                    <select className="form-control" onChange={event => setCategory(event.target.value)} id="reg-phone">
                                                        <option value="">Select Category</option>
                                                        {categories.map(({ id, category }) => (
                                                            <option key={id} value={category.name} className="category-options">{category.name}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-email">Price</label>
                                                    <input value={price} onChange={event => setPrice(event.target.value)} className="form-control" type="email" id="reg-email" required />
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass">Quantity</label>
                                                    <input value={quantity} onChange={event => setQuantity(event.target.value)} className="form-control" type="text" id="reg-pass" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass-confirm">Rating</label>
                                                    <input value={rating} onChange={event => setRating(event.target.value)} className="form-control" type="text" id="reg-pass-confirm" required />
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <div className="form-group">
                                                    <label htmlFor="reg-pass-detail">Description</label>
                                                    <textarea value={details} onChange={event => setDetails(event.target.value)} className="form-control" type="text" id="reg-pass-detail" required>
                                                    </textarea>
                                                </div>
                                            </div>
                                            <div className="button">
                                                <button className="btn" type="submit" onClick={handleUpload} >Create Product</button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <LoginAdmin />
            )}
        </>
    )
}

export default CreateProduct
