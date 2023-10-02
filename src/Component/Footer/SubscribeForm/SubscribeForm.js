
function SubscribeForm() {

    function submitHandle(e) {
        e.preventDefault();
        console.log("submit");
    }

    return (
        <div className="bg-primary1 text-light text-center p-4">
            <h2 className="">Save time, save money</h2>
            <p>Sign up and we'll send best deals to you!</p>
            <form onSubmit={submitHandle}>
                <input type="email" placeholder="Your email" className="py-1"></input>
                <button type="submit" className="btn bg-btn text-light ms-2">Subscribe</button>
            </form>
        </div>
    )
}

export default SubscribeForm;