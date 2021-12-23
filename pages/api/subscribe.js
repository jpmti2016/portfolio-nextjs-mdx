const mailChimpClient = require("@mailchimp/mailchimp_marketing");

mailChimpClient.setConfig({
  apiKey: process.env.MCHIMP_API_KEY,
  server: process.env.MCHIMP_SERVER,
});
const listId = process.env.MCHIMP_AUDIENCE;

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const email = JSON.parse(req.body)?.email;

      await mailChimpClient.lists.addListMember(listId, {
        email_address: email,
        status: "subscribed",
      });

      res.status(200).json({
        success: true,
        message: "Awesome, thanks for your subscription!",
      });
    } catch (error) {
      const mailChimpErrorType = error?.response?.body?.title;
      console.log("subscribe api error", error);

      let message;
      switch (mailChimpErrorType) {
        case "Member Exists": {
          message = "You are already subscribed, thanks.";
          break;
        }
        case "Invalid Resource": {
          message = "Please enter a valid email address.";
          break;
        }
        default: {
          message =
            "Something went wrong. Please send me an email to jpmti2016@gmail.com and I will add you personally.";
          break;
        }
      }

      res.status(200).json({
        success: false,
        message,
      });
    }
  }
}
