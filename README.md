# Dillo Day Website

The official website for Dillo Day, the nation's largest student-run music festival. Built with Next.js, React, and styled-components.

## Overview

This website serves as the central hub for all things Dillo Day, featuring:

- Live festival schedule and lineup
- Artist information and details
- Interactive festival map
- Mobile app integration
- Ticket/wristband information
- Historical archive of past festivals
- Team and organization information

## Technologies

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: styled-components, Tailwind CSS
- **Animation**: Framer Motion
- **State Management**: React Hooks
- **Database**: Firebase Firestore
- **Analytics**: Google Analytics

## Key Features

- Responsive design optimized for all devices
- Real-time festival updates and notifications
- Interactive festival map with key locations
- Dynamic artist pages with social media integration
- Historical archive of past Dillo Days
- Team member showcase and organization structure
- Wristband distribution system
- Mobile app companion interface
- Merchandise store integration

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/dillo-day-website.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
.
├── app/                # Next.js app directory with pages and layouts
├── components/         # Reusable React components
├── constants/         # Static data and configuration
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and external clients
├── sections/         # Major page sections
└── types/            # TypeScript type definitions
```

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_STOREFRONT_TOKEN`: Token for merchandise store
- `NEXT_PUBLIC_COLLECTION_ID`: Store collection ID
- `FIREBASE_CONFIG`: Firebase configuration

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/your-feature`
5. Submit a Pull Request

## License

This project is proprietary and maintained by Mayfest Productions.

## Contact

For questions or support, please visit [support.dilloday.com](https://support.dilloday.com).
