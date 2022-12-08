fetch("https://chat.openai.com/backend-api/conversation", {
  "headers": {
    "accept": "text/event-stream",
    "accept-language": "en-US,en;q=0.9",
    "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJhbGV4YW5kZXIua3VsYUBzdHVkZW50LnRkc2Iub24uY2EiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZ2VvaXBfY291bnRyeSI6IlVTIn0sImh0dHBzOi8vYXBpLm9wZW5haS5jb20vYXV0aCI6eyJ1c2VyX2lkIjoidXNlci1qYkVvT1dERHZDRnBFaUtnZEdzU2pLN2sifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTEwNDk4NjU2NDY5MzM5NzgwMTg3IiwiYXVkIjpbImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEiLCJodHRwczovL29wZW5haS5hdXRoMC5jb20vdXNlcmluZm8iXSwiaWF0IjoxNjcwNTQyMTg1LCJleHAiOjE2NzA2Mjg1ODUsImF6cCI6IlRkSkljYmUxNldvVEh0Tjk1bnl5d2g1RTR5T282SXRHIiwic2NvcGUiOiJvcGVuaWQgZW1haWwgcHJvZmlsZSBtb2RlbC5yZWFkIG1vZGVsLnJlcXVlc3Qgb3JnYW5pemF0aW9uLnJlYWQgb2ZmbGluZV9hY2Nlc3MifQ.DBZVbuEEAQooIdyZBwMcQdvjEGw5XR3kksD2YGPjDisusFQxAA-I3BBpx7Rf06W0EQlVrdA2GG_ZbrDpfvOFhO4tB40BxqlH20PEHATcvy63pv2uvzAM6YcwiI6HdWK_evzCRK6E2aTi4HRkBg-ruOEG6fyFTyxgaEnjToHKPcMIpUhSoa__qXBEjqPxj44YK4MVh0gkw6V95xxpPy_DJhWeSpoxzGINTrcKHt-TDPxez8zxdzcpmG15P_EW56jtsO9JxFemIWdE5VS4eqNl5a9vN6z7qAKV3u5mVh2y951iKj5EVBMuj4Z9BokTAYyR9NuMZXAr1iTyEByKrBsJ0Q",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"105\", \"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"105\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Chrome OS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-openai-assistant-app-id": ""
  },
  "referrer": "https://chat.openai.com/chat",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"action\":\"next\",\"messages\":[{\"id\":\"a0fd9dce-5ff7-4acd-a560-51dfade35c19\",\"role\":\"user\",\"content\":{\"content_type\":\"text\",\"parts\":[\"what is 2+2?\"]}}],\"conversation_id\":\"177e2350-7b55-404f-8ff3-1d693aa3db88\",\"parent_message_id\":\"24d8bd91-51f3-4eae-a3a3-edd2aea6d830\",\"model\":\"text-davinci-002-render\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});