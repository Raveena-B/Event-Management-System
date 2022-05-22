const router = require("express").Router();
const PaymentDetails = require("../models/paymentDetails"); //import model

router.route("/add").post((req, res) => {
  const accNo = Number(req.body.accNo);
  const cardType = req.body.cardType;
  const cardHolderName = req.body.cardHolderName;
  const cardNumber =Number (req.body.cardNumber);
  const expireDate = req.body.expireDate;
  const cvv = Number (req.body.cvv);

  const newPaymentDetailsData = {
    accNo,
    cardType,
    cardHolderName,
    cardNumber,
    expireDate,
    cvv,
  };

  const newPaymentDetails = new PaymentDetails(newPaymentDetailsData);

  newPaymentDetails
    .save()
    .then(() => res.json("New Payment Details Successfully Added"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
