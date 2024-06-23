import React from "react";
import Header from "./Header";
import Footer from "./Footer";
function Menu() {
    return (
        <>
            < Header />
            <div className="w-full">
                <div className="row">
                    <h2 className="h2 text-blue-950 mt-5" style={{ textAlign: "center" }}>Menu List</h2>
                    <hr />
                    <div className="col-md-4 mt-4">
                        <ol className="p-10">
                            <li><a href="#">Milk Tea</a></li>
                            <hr />
                            <li><a href="#">Black Tea</a></li>
                            <hr />
                            <li><a href="#">Green Tea</a></li>
                            <hr />
                            <li><a href="#">Suger Free Tea</a></li>
                            <hr />
                            <li><a href="#">Coald Coffe</a></li>
                            <hr />
                            <li><a href="#">Hot Coffe</a></li>
                        </ol>
                    </div>
                    <div className="col-md-4 mt-4">
                        <ol className="p-10">
                            <li><a href="#">Milk Tea</a></li>
                            <hr />
                            <li><a href="#">Black Tea</a></li>
                            <hr />
                            <li><a href="#">Green Tea</a></li>
                            <hr />
                            <li><a href="#">Suger Free Tea</a></li>
                            <hr />
                            <li><a href="#">Coald Coffe</a></li>
                            <hr />
                            <li><a href="#">Hot Coffe</a></li>
                        </ol>
                    </div>
                    <div className="col-md-4 mt-4">
                        <ol className="p-10">
                            <li><a href="#">Milk Tea</a></li>
                            <hr />
                            <li><a href="#">Black Tea</a></li>
                            <hr />
                            <li><a href="#">Green Tea</a></li>
                            <hr />
                            <li><a href="#">Suger Free Tea</a></li>
                            <hr />
                            <li><a href="#">Coald Coffe</a></li>
                            <hr />
                            <li><a href="#">Hot Coffe</a></li>
                        </ol>
                    </div>
                </div>
            </div>
            < Footer />
        </>
    )
}
export default Menu