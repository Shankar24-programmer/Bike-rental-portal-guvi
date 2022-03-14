import React from 'react'
import NavbarHome from '../components/NavbarHome'
import { RiMotorbikeFill } from "react-icons/ri";
import { RiEBikeFill } from "react-icons/ri";
import '../components/Home.css';
import {Link} from "react-router-dom"

export default function Home() {
    return (

        <div>
            <NavbarHome />
            <div className="card">
                <div className="card-body">
                    <div className="flex-container">
                        <div>
                            <RiMotorbikeFill className="icon1" />
                        </div>
                        <div>
                            <RiEBikeFill className="icon1" />
                        </div>
                    </div>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1" style={{ "marginBottom": "10px", "marginTop": "10px" }}>City</label>
                            <select className="form-control">
                                <option>Bangalore</option>
                                <option>Chennai</option>
                                <option>Mumbai</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="date" style={{ "marginBottom": "10px", "marginTop": "10px" }}>Start date</label>
                            <input className="form-control" type="date" id="birthday" name="birthday" />
                        </div>
                        <div class="form-group">
                            <label for="date" style={{ "marginBottom": "10px", "marginTop": "10px" }}>End date</label>
                            <input className="form-control" type="date" id="birthday" name="birthday" />
                        </div>
                        <Link to="/home"><button type="button" className="btn btn-primary">Search</button></Link>

                    </form>
                    
                    
                    <div className="bike-blog">
                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/activa2.jpeg")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/avaitor.jpeg")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/cb.png")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bike-blog1">
                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/cb.png")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/avaitor.jpeg")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/shine.jpeg")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="bike-blog2">
                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/activa2.jpeg")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/avaitor.jpeg")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="card" style={{ "width": "20rem", "height": "28rem", "objectFit": "cover" }}>
                        <img className="card-img-top" src={require("../assets/city/cb.png")} alt="Card image cap" />
                        <div className="card-body">
                            <select className="form-control">
                                <option>Central</option>
                                <option>Koyambedu</option>
                                <option>Velacherry</option>
                            </select>
                            <div className="price-blog">
                                <p className="price">Rs.400</p>
                                <p className="km">100KMs</p>
                                <Link to="/cart">
                                <button type="button" className="book btn-primary">Book</button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>


                </div>
            </div>
        </div>
    )
}
