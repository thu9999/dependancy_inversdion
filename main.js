/**
 * Dependancy inversion principle
 * Class A need class B to run then it's said that B is dependancy of A or A depends on B
 * Decouple classes
 */
var Payment = /** @class */ (function () {
    function Payment(payment) {
        this.paymentMethod = payment;
    }
    Payment.prototype.payByCash = function (amount) {
        this.paymentMethod.cash(amount);
    };
    return Payment;
}());
var StripePayment = /** @class */ (function () {
    function StripePayment(vendor, currency) {
        this.vendor = vendor;
        this.currency = currency;
    }
    StripePayment.prototype.cash = function (amount) {
        console.log(amount + " " + this.currency + " has been paid over " + this.vendor);
    };
    return StripePayment;
}());
;
var PaypalPayment = /** @class */ (function () {
    function PaypalPayment(vendor, currency, fee) {
        this.vendor = vendor;
        this.currency = currency;
        this.fee = fee;
    }
    PaypalPayment.prototype.cash = function (amount) {
        console.log(amount + " " + this.currency + " has been paid over " + this.vendor + " and the fee is " + this.fee);
    };
    return PaypalPayment;
}());
var stripePayment = new StripePayment('Stripe', '$');
var paypalPayment = new PaypalPayment('Paypal', '$', 10);
var payment = new Payment(paypalPayment);
payment.payByCash(100);
