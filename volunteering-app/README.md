# Volunteering App

Welcome to the Volunteering App! This application is designed to connect volunteers with opportunities and provide a platform for managing events, user registrations, and feedback.

## Features

- **Responsive Design**: The app is built to be fully responsive, ensuring a seamless experience on both mobile and desktop devices.
- **User Authentication**: Supports Azure AD login and user registration.
- **Event Management**: Users can view, manage, and enroll in various volunteering events.
- **User Management**: Admins can manage user approvals and hierarchies.
- **Subscription Plans**: Users can choose from various subscription plans and make payments through integrated payment gateways.
- **Notifications**: Users receive notifications about events and updates.
- **Feedback System**: Users can provide feedback on events and experiences.
- **GDPR Compliance**: The app adheres to GDPR regulations, ensuring user data protection.

## Project Structure

The project is organized as follows:

```
volunteering-app
├── app
│   ├── layout.tsx
│   ├── page.tsx
│   ├── legal
│   │   ├── terms.tsx
│   │   └── privacy.tsx
│   ├── gdpr
│   │   └── compliance.tsx
│   ├── sponsorship
│   │   └── page.tsx
│   ├── notifications
│   │   └── page.tsx
│   ├── auth
│   │   ├── login.tsx
│   │   ├── register.tsx
│   │   └── azure-ad.tsx
│   ├── feedback
│   │   └── page.tsx
│   ├── subscription
│   │   ├── plans.tsx
│   │   └── payment.tsx
│   ├── approval
│   │   └── status.tsx
│   ├── users
│   │   └── management.tsx
│   ├── events
│   │   ├── index.tsx
│   │   └── [eventId].tsx
│   └── more
│       └── page.tsx
├── components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── NotificationBell.tsx
│   ├── ResponsiveContainer.tsx
│   └── ...
├── styles
│   ├── globals.scss
│   └── responsive.scss
├── public
│   └── favicon.ico
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with the Volunteering App, follow these steps:

1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd volunteering-app
   ```

2. **Install Dependencies**: 
   ```
   npm install
   ```

3. **Run the Development Server**: 
   ```
   npm run dev
   ```

4. **Open in Browser**: Navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.