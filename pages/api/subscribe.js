import axios from "axios";

function getRequestParams(email) {
  const API_KEY = process.env.MCHIMP_API_KEY;
  const LIST_ID = process.env.MCHIMP_AUDIENCE;
  const DATACENTER = process.env.MCHIMP_SERVER;

  const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req, res) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "Forgot to add the email" });
  }

  try {
    const { url, data, headers } = getRequestParams(email);
    console.log("url", url);
    console.log("data", data);
    console.log("headers", headers);
    console.log("email", email);

    const response = await axios.post(url, data, { headers });

    console.log("response", response);

    return res.status(201).json({ error: null });
  } catch (error) {
    return res.status(400).json({
      error:
        "Ooops, something went wrong... Send me an email at jpmti2016@hmail.com and I will add you to the list personally",
    });
  }
};
