import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Horse from '../../assets/images/splash/horse-splash.jpg'
import User from '../../assets/images/default_user.jpg'
import { Link } from 'react-router-dom';
import FoodImg from '../../assets/images/food.png';
import Cart from '../../assets/images/cart2.png'
import Cat from '../../assets/images/cat.png'
import Gear from '../../assets/images/gear.png'
import Bear from '../../assets/images/splash/bear.gif'
import Giraffe from '../../assets/images/splash/giraffe.jpg'
import Harambe from '../../assets/images/splash/harambe.jpg'
import { CustomRightArrow, CustomLeftArrow, CustomLeftSplashArrow, CustomRightSplashArrow } from './custom_arrows/arrows.js'

class HomePage extends React.Component{
    constructor(props){
        super(props)
    }


    handleUser(){
        if (this.props.currentUser) {
        const { name } = this.props.currentUser
        if (name){
            return <div>
                <div className="home-page-user-details">
                    <a href=""><img src={User} alt=""/></a>
                    <h2>Hi, {name}</h2>
                </div>
                <p>Recommendations for you</p>
                <div className="home-page-user-details-4x4">
                    <Link to="/cart" className="home-page-user-details-box">
                        <div><img src={Cart} alt=""/></div>
                        <div><p>Your Cart</p></div>
                    </Link>
                    <Link to={ {pathname: "/items", pets: true} }className="home-page-user-details-box">
                            <div><img src={Cat} alt="" /></div>
                            <div><p>Pets</p></div>
                    </Link>
                    <Link to={{ pathname: "/items", food: true }} className="home-page-user-details-box">
                        <div><img src={FoodImg} alt="" /></div>
                        <div><p>Food</p></div>
                    </Link>
                    <Link to={{ pathname: "/items", accessories: true }} className="home-page-user-details-box">
                        <div><img src={Gear} alt="" /></div>
                        <div><p>Accessories</p></div>
                    </Link>
                </div>
            </div>
        } else {
            return <div>
                <h2>Deal of the Day</h2>
                {this.renderRandomItem()}
            </div>
        }
        }
    }

    renderRandomItem(value){
        const { items } = this.props
        let randItem
        let filtered
        if (items && items[0] && !value) {
            randItem = items[0][Math.floor(Math.random() * items.length)]
        
        return <div className="home-page-card-item">
            <div className="home-page-card-item-img-wrapper">
                <Link to={`/items/${randItem._id}`}><img src={randItem.image_url} alt="" /></Link>
            </div>
            <div className="home-page-card-price-name">
                <div>${randItem.price}</div>
                <p>{randItem.title}</p>
            </div>
            </div>
        } else if (items && items[0] && value) {
            filtered = items[0].filter(item => item.category === value)
            randItem = filtered[Math.floor(Math.random() * filtered.length)]
            return <div className="home-page-card-item">
                <div className="home-page-card-item-img-wrapper">
                    <Link to={`/items/${randItem._id}`}><img src={randItem.image_url} alt="" /></Link>
                </div>
                <div className="home-page-card-price-name">
                    <div>${randItem.price}</div>
                    <p>{randItem.title}</p>
                </div>
            </div>
        }

        return <div></div>
    }


    renderSpecificItem(key, value) {
        const { items } = this.props
        let specificItem
        if (items && items[0]) {
            specificItem = items[0].find(item => item[key] === value)
            return <div className="home-page-card-item">
                <div className="home-page-card-item-img-wrapper">
                    <Link to={`/items/${specificItem._id}`}><img src={specificItem.image_url} alt="" /></Link>
                </div>
                <div className="home-page-card-price-name">
                    <div>${specificItem.price}</div>
                    <p>{specificItem.title}</p>
                </div>
            </div>
        }

        return <div></div>
    }

    handleUser2(){
        if (this.props.currentUser) {
        const { name } = this.props.currentUser
        if (name) {
            return <div className="home-page-card-logged-in">
                <h2>Free Same-Month Delivery</h2>
                <p>Get delivery in the same month you placed your order in. It'll get there eventually.</p>
            </div>
        } else {
            return <div className="home-page-card-not-logged">
                <h2>Sign in for an ok experience</h2>
                <Link to="/login" className="form-orange-button">
                    Sign in securely
                </Link>
            </div>
        }
    }
    }

    renderList(){
        const { items } = this.props
        if (items && items[0]) {
            let filtered = items[0].filter(item => item.price <= 200)
            const responsive = {
                // superLargeDesktop: {
                //     // the naming can be any, depends on you.
                //     breakpoint: { max: 4000, min: 3000 },
                //     items: 1,
                // },
                highRes: {
                    breakpoint: { max: 4000, min: 1500 },
                    items: 8,
                },
                medRes: {
                    breakpoint: { max: 1500, min: 1280 },
                    items: 6,
                },
                lowRes: {
                    breakpoint: { max: 1280, min: 464 },
                    items: 4,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
            };

            let constructed = filtered.map(item => <div key={item._id} className="home-page-item-list-item">
                <div><Link to={`/items/${item._id}`}><img src={item.image_url} alt="" /></Link></div>
                <div>${item.price}</div>
            </div>)

            return <div className="home-page-item-list">
                <Carousel
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    responsive={responsive}
                    autoPlay={false}
                    autoPlaySpeed={5000}
                    infinite={false}
                    itemClass={"carousel-list-item"}
                    slidesToSlide={1}
                >
                    {constructed}
                </Carousel>
            </div>
        }
        return <div></div>
    }

    render(){
        const responsive = {
            superLargeDesktop: {
                // the naming can be any, depends on you.
                breakpoint: { max: 4000, min: 3000 },
                items: 1,
            },
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 1,
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 1,
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
            },
        };


        return <div className="home-page-wrapper">
            <div className="home-page">
            <div className="home-page-carousel">
                <Carousel 
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={7000}
                infinite={true}
                customRightArrow={<CustomRightSplashArrow />}
                customLeftArrow={<CustomLeftSplashArrow />}
                >
                    <div className="home-splash-item"><img className="bear" src={Giraffe} alt="" />
                    <Link to="/items/5d8aff1495ff4371437d10c2" className="floating-clickable"></Link></div>
                    <div className="home-splash-item"><img src={Horse} alt="" />
                    <Link to="/items/5d89b99fda97372c45c0792b" className="floating-clickable"></Link></div>
                    <div className="home-splash-item"><img className="bear" src={Bear} alt="" />
                    <Link to="/items/5d8b02bc95ff4371437d10c4" className="floating-clickable"></Link></div>
                    <div className="home-splash-item"><img className="bear" src={Harambe} alt="" />
                    <Link to="/items/5d8b00f795ff4371437d10c3" className="floating-clickable"></Link></div>

                </Carousel>
            </div>
            <div className="home-page-card-rows">
                <div className="home-page-card">
                    <div className="home-page-card-details">
                    {this.handleUser()}
                    </div>
                </div>
                <div className="home-page-card">
                    <div className="home-page-card-details">
                        <h2>Renewed pets</h2>
                        {this.renderRandomItem("category1")}
                    </div>
                </div>
                <div className="home-page-card">
                    <div className="home-page-card-details">
                    <h2>Forest's fashion</h2>
                    {this.renderRandomItem("accessories")}
                    </div>
                </div>
                <div className="home-page-card">
                    <div className="home-page-card-details-last">
                        {this.handleUser2()}
                    </div>
                </div>
            </div>
            <div className="home-page-entire-row">
               <div className="home-page-first-list-wrapper">
                    <div className="home-page-first-list">
                        <h2>Deals under $200</h2>
                        {this.renderList()}
                    </div>
               </div>
            </div>
        </div>
        </div>
    }
}

export default HomePage