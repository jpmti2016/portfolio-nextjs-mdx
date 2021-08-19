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
  console.log("email in handler", email);

  if (!email) {
    return res.status(400).json({ error: "Email required" });
  }

  try {
    const listId = process.env.MCHIMP_AUDIENCE;
    const subscribingUser = {
      firstName: "Y",
      lastName: "M",
      email,
    };

    const response = await mailchimp.lists.addListMember(listId, {
      email_address: subscribingUser.email,
      status: "subscribed",
      merge_fields: {
        FNAME: subscribingUser.firstName,
        LNAME: subscribingUser.lastName,
      },
    });

    console.log(
      `Successfully added contact as an audience member. The contact's id is ${response.id}.`
    );

    return res.status(201).json({ error: "" });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
}
