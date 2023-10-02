import Navbar from "./Navbar/Navbar";
import FormSearch from "./FormSearch/FormSearch";


function Header() {
//trang header
    return (
      <div className="bg-primary1 p-5 position-relative mb-5">
{/* //navbar */}
        <Navbar/>
        <div className="p-5 text-light">
            <h2>A lifetime of discounts? It's Genius.</h2>
            <p>Get rewarded for your travels - unlock instant saving of 10% or more with a free account</p>

            <button className="btn bg-btn text-light">Sign in/Register</button>
        </div>
        <FormSearch />
    </div>
    )
}

export default Header