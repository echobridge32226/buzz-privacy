# Privacy Policy

**Last updated: May 14, 2026**

This Privacy Policy describes how Buzz ("we", "us", or "our") collects, uses, and shares information when you use the Buzz app ("App"). By using the App, you agree to the practices described in this policy.

---

## 1. Information We Collect

### Account Information
When you create an account, we collect:
- Your **email address**
- Your **display name** (if provided via Google Sign-In; optional otherwise)

We do not collect your phone number, postal address, or any other personal identifiers at signup.

### Audio
When you use live captioning, your device microphone audio is streamed in real time to our servers. **Audio is never recorded, written to disk, or stored.** It is held briefly in memory during transcription and discarded immediately afterwards. When the session ends, all in-memory audio buffers are cleared.

When you import an audio file for transcription, that file is transmitted to our server, transcribed in memory, and discarded. Files are not retained after transcription is complete.

### Transcripts
The text output of your captioning sessions is stored in our database so you can access your session history. Transcripts are stored in encrypted form. Sessions are automatically deleted based on your subscription plan (see Data Retention). You can also delete any session at any time from within the App.

If translation is enabled, the translated text is stored alongside the original transcript under the same retention rules.

### Speaker Labels
If you use speaker diarization, speaker identifiers and any custom names you assign to speakers are stored as part of your session data and deleted with it.

### Usage Data
We track how much transcription time you use within each day and month to enforce your plan limits. This data is associated with your account and deleted when your account is deleted.

### Subscription & Billing
We store your subscription plan status, plan expiry date, and remaining usage credits. We retain billing transaction records (product ID, platform, and receipt token) for fraud prevention and to avoid double-processing purchases. **We do not store your credit card number or full payment details** — all payment processing is handled by Apple, Google, or RevenueCat.

### Crash & Diagnostic Logs
The App collects error logs (stack traces and application state at the time of a crash) and may upload them to our cloud storage to help us diagnose issues. These logs contain error messages and code references but do not include audio or the content of your transcripts. They may include your account identifier and application version.

If you submit feedback through the App, you have the option to attach a diagnostic log. This log may include backend request records associated with your account from around the time of the issue.

### App Preferences
Your theme preference (light/dark/system) is stored locally on your device only and is never transmitted to our servers.

---

## 2. How We Use Your Information

We use the information we collect to:
- Authenticate you and maintain your account
- Provide real-time speech-to-text captioning and translation
- Store and display your session history
- Enforce subscription plan limits and track usage
- Process and verify in-app purchases
- Investigate crashes and improve app stability
- Respond to feedback and support requests

We do not sell your personal information. We do not use your audio or transcripts to train AI models.

---

## 3. Microphone & Audio Processing

Buzz requires microphone access to provide live captioning. When you start a session:

- Your device microphone is activated
- Audio is captured continuously and streamed in real time over an encrypted connection to our servers
- Our servers immediately forward the audio to a speech recognition provider for transcription
- **Audio is never written to disk** — it passes through server memory only and is discarded when the session ends

Audio sent for transcription is processed by one of the following providers, depending on the language you select:

- **[Deepgram](https://deepgram.com)** — English and multilingual sessions
- **[Gladia](https://www.gladia.io)** — multilingual and code-switching sessions
- **[Sarvam AI](https://www.sarvam.ai)** — Indic languages (Hindi, Tamil, Bengali, and others)
- **[Google Cloud Speech-to-Text](https://cloud.google.com/speech-to-text)** — select languages

Each provider processes audio solely to return a transcript. None of these providers use your audio to train their models without your explicit opt-in through their own terms. See Section 5 for links to their individual privacy policies.

---

## 4. AI Processing Disclosure

Buzz uses third-party AI systems for transcription and translation. Please be aware:

- Transcription and translation are performed by automated AI systems and may contain errors
- Audio is processed by one of the speech recognition providers listed in this policy
- Transcript text may be processed by one of the translation providers listed in this policy
- These providers may process your data in countries other than your own (see Section 9)
- We are not responsible for inaccuracies in AI-generated outputs

---

## 5. Third-Party Services

Buzz uses the following third-party services that may process your data:

| Service | Data Sent | Purpose | Privacy Policy |
|---|---|---|---|
| **Deepgram** | Audio stream | Speech-to-text transcription | [deepgram.com/privacy](https://deepgram.com/privacy) |
| **Gladia** | Audio stream | Speech-to-text (multilingual) | [gladia.io/privacy-policy](https://www.gladia.io/privacy-policy) |
| **Sarvam AI** | Audio stream; transcript text (translation) | Speech-to-text and translation (Indic languages) | [sarvam.ai/privacy](https://www.sarvam.ai/privacy) |
| **Google Cloud** | Audio stream; transcript text (translation) | Speech-to-text and translation (select languages) | [cloud.google.com/security/privacy](https://cloud.google.com/security/privacy) |
| **DeepL** | Transcript text | Translation | [deepl.com/privacy](https://www.deepl.com/privacy) |
| **Firebase (Google)** | Account info, session data | Authentication and database storage | [firebase.google.com/support/privacy](https://firebase.google.com/support/privacy) |
| **RevenueCat** | Account identifier, subscription state | Subscription management | [revenuecat.com/privacy](https://www.revenuecat.com/privacy) |
| **Apple App Store** | Purchase receipt token | In-app purchase verification | [apple.com/legal/privacy](https://www.apple.com/legal/privacy/) |
| **Google Play** | Purchase receipt token | In-app purchase verification | [policies.google.com/privacy](https://policies.google.com/privacy) |

---

## 6. Payments & Subscriptions

Buzz offers subscriptions (Basic, Pro) and prepaid credit packs via in-app purchase on iOS and Android.

- All payment transactions are processed by **[Apple App Store](https://www.apple.com/legal/privacy/)** (iOS) or **[Google Play](https://policies.google.com/privacy)** (Android)
- We use **[RevenueCat](https://www.revenuecat.com/privacy)** to manage subscription status and entitlements
- **We never receive or store your credit card number or full payment details**
- We store: your subscription plan type, expiry date, and a transaction reference ID used for purchase verification
- To cancel a subscription, do so directly through the App Store or Google Play; access continues until the current billing period ends

---

## 7. Data Retention

| Data Type | Retention |
|---|---|
| Audio | Never stored — discarded immediately after transcription |
| Transcripts & translations | Auto-deleted by plan tier (see below) |
| Session metadata & speaker labels | Deleted with the session |
| Account information | Until you delete your account |
| Usage tracking | Until you delete your account |
| Subscription & billing records | Until you delete your account |
| Crash & diagnostic logs | Stored in cloud storage; no automatic deletion schedule is currently in place |
| Feedback submissions & attached logs | Stored in cloud storage; no automatic deletion schedule is currently in place |

### Session Transcript Retention by Plan

| Plan | History kept for |
|---|---|
| Free | 7 days after the session ends |
| Basic | 30 days after the session ends |
| Pro | 90 days after the session ends |

Sessions older than the plan limit are automatically and permanently deleted, including all associated transcript segments, speaker labels, and cloud exports.

You can delete any session at any time from within the App.

---

## 8. Data Security

We take the following measures to protect your data:

- All data is transmitted over encrypted connections (HTTPS/TLS)
- Transcript text is encrypted at rest using AES-256 encryption before being stored in our database
- Access to our backend requires a verified authentication token for every request
- Third-party API credentials are stored as server-side environment variables and are never exposed to the App
- Payment processing is handled entirely by Apple, Google, and RevenueCat — your payment details never reach our servers

No system is completely secure. If you believe your data has been compromised, please contact us immediately.

---

## 9. International Data Transfers

Buzz uses providers that may process your data outside your country of residence:

- **[Deepgram](https://deepgram.com/privacy)** and **[Google](https://cloud.google.com/security/privacy)** are US-based and process data in the United States
- **[DeepL](https://www.deepl.com/privacy)** is based in Germany and processes data within the European Union
- **[Gladia](https://www.gladia.io/privacy-policy)** and **[Sarvam AI](https://www.sarvam.ai/privacy)** — refer to their individual privacy policies for current details on processing regions
- **[Firebase (Google Cloud)](https://firebase.google.com/support/privacy)** stores account and session data in Google-managed data centers
- Our backend servers are hosted on **[Railway](https://railway.com/legal/privacy-policy)**, which may process request metadata in accordance with their privacy policy

By using the App, you acknowledge that your data may be transferred to and processed in countries that may have different data protection laws than your country of residence.

---

## 10. Your Rights

You may at any time:

- **Access** your session transcripts from within the App
- **Delete** individual sessions from within the App, or request full account deletion
- **Edit** individual transcript segments within the App

To request deletion of your entire account and all associated data, email **echobridge32226@gmail.com** with the subject line "Account Deletion Request." We will process your request within 7 days. Backups held by our infrastructure providers (Firebase / Google Cloud) may retain deleted data for up to 30 additional days before it is permanently purged.

If you are located in the European Union or California, you may have additional rights under the GDPR or CCPA/CPRA respectively. Contact us at the address below to make a request.

---

## 11. Children's Privacy

Buzz is not directed at children under 13. We do not knowingly collect personal information from anyone under 13. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.

---

## 12. Changes to This Policy

We may update this Privacy Policy from time to time. We will notify you of significant changes by updating the "Last updated" date at the top of this page. Continued use of the App after changes are posted constitutes your acceptance of the updated policy.

---

## 13. Contact

If you have questions or requests regarding this Privacy Policy, contact us at:

**echobridge32226@gmail.com**
