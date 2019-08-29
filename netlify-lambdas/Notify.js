const sgMail = require('@sendgrid/mail');

exports.handler = function(event, context, callback) {
	// your server-side functionality

	// EMAILS
	// kolhapur@kajavefurniture.com


  const API_KEY = process.env.MAIL_API_KEY;

	const headers = {
		"Access-Control-Allow-Origin": "*", // better change this for production
		"Access-Control-Allow-Methods": "POST",
		"Access-Control-Allow-Headers": "Content-Type"
	};

	if (event.httpMethod !== "POST") {
		return callback(null, {
			statusCode: 410,
			body: JSON.stringify({
				message: "Only POST requests allowed."
			})
		});
	}

	const payload = JSON.parse(event.body);

	// validate the form
	if (!payload.name || !payload.email || !payload.category || !payload.phone) {
		return callback(null, {
			statusCode: 422,
			headers,
			body: JSON.stringify({
				message: "Required information is missing."
			})
		});
	}

	//send the email
	sgMail.setApiKey(API_KEY);
	const msg = {
		to: ['business@dresslanduniforms.in'],
		from: "WebSubmission@formecmedia.com",
		subject: "Your Website Has New Form Submission!",
		text: `Submission Details: \n\nUser Name: ${payload.name}\n\nEmail: ${payload.email}\n\nPhone: ${payload.phone}\n\nCategory: ${payload.category}\n\nSub Category: ${payload.subCategories}`
	};

	sgMail.send(msg).then(()=>{
		return callback(null, {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				message: "Message Sent"
			})
		});
	}).catch((err)=>{
		return callback(null, {
			statusCode: 400,
			headers,
			body: JSON.stringify({
				message: "Error Sending Message"
			})
		});

	})

};