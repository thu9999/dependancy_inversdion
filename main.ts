/**
 * Dependancy inversion principle
 * Class A need class B to run then it's said that B is dependancy of A or A depends on B
 * Decouple classes
 */

class Payment {
   public paymentMethod: PaypalPayment;
   constructor(payment: PaypalPayment) {
      this.paymentMethod = payment;
   }

   payByCash(amount: number) {
      this.paymentMethod.cash(amount);
   }
}

class StripePayment {
   vendor: string;
   currency: string;
   constructor(vendor: string, currency: string) {
      this.vendor = vendor;
      this.currency = currency;
   }

   cash(amount: number) {
      console.log(`${amount} ${this.currency} has been paid over ${this.vendor}`)
   }
};

class PaypalPayment {
   vendor: string ;
   currency: string;
   fee: number;

   constructor(
      vendor: string, 
      currency: string , 
      fee: number 
   ) {
      this.vendor = vendor;
      this.currency = currency;
      this.fee = fee;
   }

   cash(amount: number) {
      console.log(`${amount} ${this.currency} has been paid over ${this.vendor} and the fee is ${this.fee}`);
   }
}

const stripePayment = new StripePayment('Stripe', '$');
const paypalPayment = new PaypalPayment('Paypal', '$', 10);

const payment = new Payment(paypalPayment);
payment.payByCash(100);