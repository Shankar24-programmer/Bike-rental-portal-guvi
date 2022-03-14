import React from 'react'
import '../components/Blog3.css'
export default function Blog3() {
    return (
        <div>
            {/* <div className="grid-image">
            <img src={("https://im.rediff.com/news/2014/aug/25chennai1.jpg")} alt="..." className="img-thumbnail"/>
            <div className="overlay">Chennai</div>
            <img src={("https://im.rediff.com/news/2014/aug/25chennai1.jpg")} alt="..." className="img-thumbnail"/>
            <div className="overlay1">Bangalore</div> */}
            <h2 className="text">Top cities we serve in India</h2>
            <div className="image-grid" style={{ "margin-top": "-150px", "margin-bottom": "150px" }}>
                
                <img src={require("/Users/muthusankar/Desktop/pizza app/client/src/assets/chennai.jpg")} style={{ "width": "300px", "height": "200px", "margin-top": "200px", "margin-left": "200px" }} className="rounded float-left" alt="..." />
                
                <img src={require("/Users/muthusankar/Desktop/pizza app/client/src/assets/bangalore.jpg")} style={{ "width": "300px", "height": "200px", "margin-top": "200px", "margin-left": "100px" }} className="rounded float-right" alt="..." />
               
                <img src={require("/Users/muthusankar/Desktop/pizza app/client/src/assets/mumbai.jpg")} style={{ "width": "300px", "height": "200px", "margin-top": "200px", "margin-left": "100px" }} className="rounded float-right" alt="..." />
            </div>


            

        </div>

    )
}
