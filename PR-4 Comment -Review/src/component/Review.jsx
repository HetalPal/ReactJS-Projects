import { useState } from "react";
import "./Review.css";

function Review() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("");
    const [error, setError] = useState("");
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "") {
            setError("User name is required!");
            return;
        }
        if (email === "") {
            setError("Email is required!");
            return;
        }
        if (reviewText === "") {
            setError("Review is required!");
            return;
        }
        if (rating === "") {
            setError("Rating is required!");
            return;
        }

        const newReview = {
            username,
            email,
            reviewText,
            rating,
        };

        setReviews([...reviews, newReview]);
        setUsername("");
        setEmail("");
        setReviewText("");
        setRating("");
        setError("");
    };

    return (
        <div className="r-continer">
            <h2>Comment / Review App</h2>
            <div className="r-layout">
                <div className="r-form-box">
                    <h3>Add Review</h3>
                    <form onSubmit={handleSubmit} className="r-form">
                        <input
                            type="text"
                            placeholder="Enter Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <textarea
                            placeholder="Write Your Review"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                        ></textarea>

                        <select value={rating} onChange={(e) => setRating(e.target.value)}>
                            <option value="">Select Rating</option>
                            <option value="⭐">⭐</option>
                            <option value="⭐⭐">⭐⭐</option>
                            <option value="⭐⭐⭐">⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                            <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                        </select>

                        <button type="submit">Submit Review</button>
                    </form>
                </div>

                {error && <p style={{ color: "red" }}>{error}</p>}
                <div className="r-output">
                    <h3>User Reviews</h3>
                    {reviews.map((item, index) => (
                        <div className="r-card" key={index}>
                            <h3>{item.username}</h3>
                            <h5>{item.email}</h5>
                            <p>{item.reviewText}</p>
                            <span>{item.rating}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Review;