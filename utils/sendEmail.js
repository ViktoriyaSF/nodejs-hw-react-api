const nodemailer = require("nodemailer");

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.meta.ua",
  port: 465, //25, 465, 2525
  secure: true,
  auth: {
    user: UKR_NET_EMAIL,
    pass: UKR_NET_PASSWORD,
  },
};
const transporter = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  try {
    const email = { ...data, from: UKR_NET_EMAIL };
    await transporter.sendMail(email);

    return true;
  } catch (error) {
    console.log("An error occurred while sending mail");
  }
};

module.exports = sendEmail;
