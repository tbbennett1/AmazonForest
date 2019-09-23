import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Horse from '../../assets/images/splash/horse-splash.jpg'
import User from '../../assets/images/default_user.jpg'
import { Link } from 'react-router-dom';
import Dog from '../../assets/images/dog.png'
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
                        <div><img src="https://bigbasketco.com/wp-content/uploads/wire-cart-transparent.png" alt=""/></div>
                        <div><p>Your Cart</p></div>
                    </Link>
                    <Link to="/cart" className="home-page-user-details-box">
                            <div><img src={Dog} alt="" /></div>
                            <div><p>Pets</p></div>
                    </Link>
                    <Link to="/cart" className="home-page-user-details-box">
                        <div><img src="https://bigbasketco.com/wp-content/uploads/wire-cart-transparent.png" alt="" /></div>
                        <div><p>Your Cart</p></div>
                    </Link>
                    <Link to="/cart" className="home-page-user-details-box">
                        <div><img src={Dog} alt="" /></div>
                        <div><p>Pets</p></div>
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

    renderRandomItem(){
        const { items } = this.props
        let randItem
        if (items && items[0]) {
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
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: { max: 4000, min: 3000 },
                    items: 1,
                },
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 8,
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

            return <div className="home-page-item-list">
                <Carousel
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                    responsive={responsive}
                    autoPlay={false}
                    autoPlaySpeed={5000}
                    infinite={false}
                    slidesToSlide={8}
                >
                    {filtered.map(item => <div key={item._id} className="home-page-item-list-item">
                        <div><Link to={`/items/${item._id}`}><img src={item.image_url} alt=""/></Link></div>
                        <div>${item.price}</div>
                        </div>)
                    }
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
                autoPlay={false}
                autoPlaySpeed={5000}
                infinite={true}
                customRightArrow={<CustomRightSplashArrow />}
                customLeftArrow={<CustomLeftSplashArrow />}
                >
                    <div className="home-splash-item"><img src={Horse} alt=""/></div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
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
                        {this.renderSpecificItem("_id", "5d85641aa7237be00113f767")}
                    </div>
                </div>
                <div className="home-page-card">
                    <div className="home-page-card-details">
                    <h2>Forest's fashion</h2>
                    {this.renderSpecificItem("_id", "5d856596a7237be00113f768")}
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