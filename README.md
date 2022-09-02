# twilio-swagger

This project renders Twilio Open API Specs in Swagger UI.

## Requirements

- Twilio Account
- `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` - for authentication
- Twilio Phone Number - for sending messages

## Swagger Docs

Click one of the links below to view the Swagger Doc.

| Swagger Doc                                                                                  | Description                                         |
| -------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| [Twilio API](https://johnchaffee.wiki/twilio-swagger/apis/messaging/)                             | Send messages and manage accounts and phone numbers |
| [Twilio Lookups v2 API](https://johnchaffee.wiki/twilio-swagger/apis/lookups/)                    | Validate Phone Number formats and types             |
| [Twilio Verify API](https://johnchaffee.wiki/twilio-swagger/apis/verify/)                         | Send and validate one-time-passcodes                |
| [Twilio Messaging Services API](https://johnchaffee.wiki/twilio-swagger/apis/messaging-services/) | Manage Messaging Services and Number Pools          |
| [Twilio Conversations API](https://johnchaffee.wiki/twilio-swagger/apis/conversations/)           | Manage 2-way human-to-human conversations           |

## Instructions

- [View the Quick Start Video](http://johnchaffee.wiki/twilio-swagger/swagger.mp4)
- Open one of the Swagger UI Docs above
- Click the Authorize button on the top right and enter your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` as the username and password.
- Click the method you want to run to expand it.
  - For example, to send an SMS click the [CreateMessage](https://johnchaffee.wiki/twilio-swagger/apis/messaging/#/default/CreateMessage) path at `POST /2010-04-01/Accounts/{AccountSid}/Messages.json`
- Click the `Try it out` button
  - Fill in the required parametes (e.g. `AccountSid`, `Body`, `From`, `To`)
  - Uncheck all of the `Send empty value` checkboxes.
- Click `Execute` to invoke the API. With luck, your SMS message will be sent.

## Errors

**NOTE**: You MUST uncheck ALL of the `Send empty value` checkboxes. Otherwise the API request will fail with a 400 Bad Request status and an obscure error message. To fix it, uncheck all of the `Send empty value` checkboxes and try again.

```json
{
  "code": 20001,
  "message": "invalid literal for int() with base 10: ''",
  "more_info": "https://www.twilio.com/docs/errors/20001",
  "status": 400
}
```

## Resources

- [twilio-oai](https://github.com/twilio/twilio-oai) - Twilio OpenAPI Repo
- [swagger-ui](https://github.com/swagger-api/swagger-ui) - Swagger UI Repo
