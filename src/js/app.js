class index extends React.Component {

    //constructor
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container py-5">
                <h1 className="text-center pb-5">Pizza</h1>
                    <p className="text-center pt-5">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Order</button>
                    </p>
                </div>
                );
            };
        }

class size extends React.Component {

    //constructor
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container py-5">
                <h1 className="text-center pb-5">Size</h1>
                    <p className="text-center py-5">
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Small</button>
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Medium</button>
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Large</button>
                    </p>
                </div>
                );
            };
        }

class topping extends React.Component {

    //constructor
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className="container py-5">
                <h1 className="text-center pb-5">Topping</h1>
                    <p className="text-center py-5">
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Cheese</button>
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Pepperoni</button>
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Beef</button>
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Supreme</button>
                        <button type="button" className="btn btn-primary btn-lg btn-block mb-3">Meat Lovers</button>
                    </p>
                </div>
                );
            };
        }

class review extends React.Component {

    //constructor
    constructor(props) {
        super(props);
    };
        
    render() {
        return (
            <div className="container py-5">
                <h1 className="text-center pb-5">Review Order</h1>
                    <p className="py-5">
                        Size        (Selected Size)<br />
                        Topping     (Selected Topping)<br />
                        Price       $0.00<br />
                        Location    (Cheapest Location)<br />
                    </p>
                        <p className="text-center pt-5">
                            <button type="button" className="btn btn-primary btn-lg btn-block">Pay</button>
                        </p>
                    </div>
                    );
                };
            }

class payment extends React.Component {

    //constructor
    constructor(props) {
        super(props);
    };
        
    render() {
        return (        
            <div className="container py-5">
                <h1 className="text-center pb-5">Payment</h1>
                    <form className="py-5">
                        <div class="form-group">
                            <input type="text" className="form-control" id="usr" placeholder="First Name">
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="usr" placeholder="Last Name">
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="usr" placeholder="Email">
                        </div>
                        <div className="form-group">
                            <input type="tel" className="form-control" id="usr" placeholder="Phone Number">
                        </div> 
                        <div className="form-group">
                            <input type="text" className="form-control" id="usr" placeholder="Credit Card Number">
                        </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <input type="text" className="form-control" id="usr" placeholder="CCV">
                                    </div>
                                    <div className="col">
                                        <input type="month" className="form-control" id="usr" placeholder="Exp Month">
                                    </div>
                                    <div className="col">
                                        <input type="year" className="form-control" id="usr" placeholder="Exp Year">
                                    </div>
                                </div>
                            </div>
                    </form>
            <p className="text-center pt-5">
                <button type="button" className="btn btn-primary btn-lg btn-block">Next</button>
            </p>
          </div>
            );
        };
    }

class createaccount extends React.Component {

//constructor
constructor(props) {
    super(props);
};
    
render() {
    return (  
        <div className="container py-5">
            <h1 className="text-center pb-5">Create Account</h1>
            
                <p className="py-5">
                    Do you want to create an account? If so create a password.
                </p>
                
                <div className="form-group">
                    <input type="password" className="form-control" id="usr" placeholder="Password">
                </div>

                <div className="form-group pb-5">
                    <input type="password" className="form-control" id="usr" placeholder="Confirm Password">
                </div>
                
                <p className="text-center pt-5">
                    <button type="button" className="btn btn-primary btn-lg btn-block">Next</button>
                </p>
            </div>  
            );
        };
    }    

class confirm extends React.Component {

//constructor
constructor(props) {
    super(props);
};
    
render() {
    return (  
        <div className="container py-5">
            <h1 className="text-center pb-5">Confirm</h1>
                <p className="py-5">
                    Pizza Description<br />
                    Total<br />
                </p>
                    <p className="text-center pt-5">
                        <button type="button" className="btn btn-primary btn-lg btn-block">Confirm Order</button>
                    </p>
            </div>
            );
        };
    }    

class thankyou extends React.Component {

//constructor
constructor(props) {
    super(props);
};
    
render() {
    return (  
        <div id="pizzaApp"></div>
            <div className="container py-5">
                <h1 className="text-center pb-5">Thank You</h1>
                    <p className="py-5">
                        Thank you! Your order is on its way.
                    </p>
                    <p className="text-center pt-5">
                        <button type="button" className="btn btn-primary btn-lg btn-block mt-5">Done</button>
                    </p>
            </div>
            );
        };
    }   

ReactDOM.render(
    <pizzaApp/>,
    document.getElementById('pizzaApp')
);    