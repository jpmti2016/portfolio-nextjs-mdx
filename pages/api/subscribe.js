import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MCHIMP_API_KEY,
  server: process.env.MCHIMP_SERVER,
});

const run = async () => {
  const response = await mailchimp.ping.get();
  console.log("response ping", response);
};

run();

// console.log("mailchimp", mailchimp);

export default async function handler(req, res) {
  const { email } = req.body;
  console.log("email", email);

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MCHIMP_AUDIENCE,
      {
        email_address: email,
        status: "subscribed",
      }
    );

    if (!response.ok) {
      throw new Error("Network response failed");
    }

    console.log("response api", response);
    console.log("contact", response.id);
    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
