# twilio-swagger

This project renders Twilio Open API Specs in Swagger UI.

## Requirements

- Twilio Account
- `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` - for authentication
- Twilio Phone Number - for sending messages

## Swagger Docs

Click one of the links below to view the Swagger Doc.


* [Twilio accounts_v1](https://github.com/johnchaffee/twilio-swagger/api/accounts_v1/)
* [Twilio api_v2010](https://github.com/johnchaffee/twilio-swagger/api/api_v2010/)
* [Twilio autopilot_v1](https://github.com/johnchaffee/twilio-swagger/api/autopilot_v1/)
* [Twilio bulkexports_v1](https://github.com/johnchaffee/twilio-swagger/api/bulkexports_v1/)
* [Twilio chat_v1](https://github.com/johnchaffee/twilio-swagger/api/chat_v1/)
* [Twilio chat_v2](https://github.com/johnchaffee/twilio-swagger/api/chat_v2/)
* [Twilio chat_v3](https://github.com/johnchaffee/twilio-swagger/api/chat_v3/)
* [Twilio conversations_v1](https://github.com/johnchaffee/twilio-swagger/api/conversations_v1/)
* [Twilio events_v1](https://github.com/johnchaffee/twilio-swagger/api/events_v1/)
* [Twilio flex_v1](https://github.com/johnchaffee/twilio-swagger/api/flex_v1/)
* [Twilio frontline_v1](https://github.com/johnchaffee/twilio-swagger/api/frontline_v1/)
* [Twilio insights_v1](https://github.com/johnchaffee/twilio-swagger/api/insights_v1/)
* [Twilio ip_messaging_v1](https://github.com/johnchaffee/twilio-swagger/api/ip_messaging_v1/)
* [Twilio ip_messaging_v2](https://github.com/johnchaffee/twilio-swagger/api/ip_messaging_v2/)
* [Twilio lookups_v1](https://github.com/johnchaffee/twilio-swagger/api/lookups_v1/)
* [Twilio lookups_v2](https://github.com/johnchaffee/twilio-swagger/api/lookups_v2/)
* [Twilio media_v1](https://github.com/johnchaffee/twilio-swagger/api/media_v1/)
* [Twilio messaging_v1](https://github.com/johnchaffee/twilio-swagger/api/messaging_v1/)
* [Twilio microvisor_v1](https://github.com/johnchaffee/twilio-swagger/api/microvisor_v1/)
* [Twilio monitor_v1](https://github.com/johnchaffee/twilio-swagger/api/monitor_v1/)
* [Twilio notify_v1](https://github.com/johnchaffee/twilio-swagger/api/notify_v1/)
* [Twilio numbers_v2](https://github.com/johnchaffee/twilio-swagger/api/numbers_v2/)
* [Twilio preview](https://github.com/johnchaffee/twilio-swagger/api/preview/)
* [Twilio pricing_v1](https://github.com/johnchaffee/twilio-swagger/api/pricing_v1/)
* [Twilio pricing_v2](https://github.com/johnchaffee/twilio-swagger/api/pricing_v2/)
* [Twilio proxy_v1](https://github.com/johnchaffee/twilio-swagger/api/proxy_v1/)
* [Twilio routes_v2](https://github.com/johnchaffee/twilio-swagger/api/routes_v2/)
* [Twilio serverless_v1](https://github.com/johnchaffee/twilio-swagger/api/serverless_v1/)
* [Twilio studio_v1](https://github.com/johnchaffee/twilio-swagger/api/studio_v1/)
* [Twilio studio_v2](https://github.com/johnchaffee/twilio-swagger/api/studio_v2/)
* [Twilio supersim_v1](https://github.com/johnchaffee/twilio-swagger/api/supersim_v1/)
* [Twilio sync_v1](https://github.com/johnchaffee/twilio-swagger/api/sync_v1/)
* [Twilio taskrouter_v1](https://github.com/johnchaffee/twilio-swagger/api/taskrouter_v1/)
* [Twilio trunking_v1](https://github.com/johnchaffee/twilio-swagger/api/trunking_v1/)
* [Twilio trusthub_v1](https://github.com/johnchaffee/twilio-swagger/api/trusthub_v1/)
* [Twilio verify_v2](https://github.com/johnchaffee/twilio-swagger/api/verify_v2/)
* [Twilio video_v1](https://github.com/johnchaffee/twilio-swagger/api/video_v1/)
* [Twilio voice_v1](https://github.com/johnchaffee/twilio-swagger/api/voice_v1/)
* [Twilio wireless_v1](https://github.com/johnchaffee/twilio-swagger/api/wireless_v1/)

## Instructions

- [View the Quick Start Video](http://github.com/johnchaffee/twilio-swagger/swagger.mp4)
- Open one of the Swagger UI Docs above
- Click the Authorize button on the top right and enter your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` as the username and password.
- Click the method you want to run. For example, to send an SMS:
  - Click the [CreateMessage](https://github.com/johnchaffee/twilio-swagger/api/api_v2010/#/Messages/CreateMessage) path.
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

<!-- ## Test relative links

- [https://github.com/<username>](../../../)
- [https://github.com/<username>/twilio-swagger](../../)
 -->
