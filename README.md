# Financial Analytics Dashboard

A comprehensive full-stack financial analytics application with interactive dashboards, transaction management, and advanced data visualization capabilities.

## Features

### 🔐 Authentication & Security
- JWT-based authentication with Supabase
- Secure user registration and login
- Row-level security for data protection
- Session management and automatic token refresh

### 📊 Financial Dashboard
- Interactive revenue vs expenses charts using Recharts
- Real-time financial metrics and KPIs
- Category-based transaction breakdowns
- Recent transactions overview with user profiles

### 💳 Transaction Management
- Comprehensive transaction table with pagination
- Advanced filtering by date, amount, category, and status
- Real-time search across all transaction fields
- Multi-column sorting with visual indicators
- Responsive design for all device sizes

### 📈 Data Visualization
- Line charts showing revenue trends over time
- Color-coded status indicators (Paid/Pending)
- Category-based visual distinction (Revenue/Expense)
- Interactive tooltips and hover states

### 📤 CSV Export System
- Configurable column selection for exports
- Automatic file download to user's browser
- Custom export modal with checkbox selection
- Date-stamped file naming convention

## Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** for modern, responsive styling
- **Recharts** for interactive data visualizations
- **React Router** for client-side routing
- **Lucide React** for consistent iconography
- **date-fns** for date formatting and manipulation

### Backend & Database
- **Supabase** for authentication and database
- **PostgreSQL** with Row Level Security (RLS)
- **Real-time subscriptions** for live data updates

### Design System
- **Dark theme** with professional color palette
- **Emerald green** accent colors for positive metrics
- **Red/Orange** colors for expenses and pending items
- **Consistent 8px spacing** system
- **Responsive breakpoints** for mobile-first design

## Getting Started

### Prerequisites
- Node.js 18+ installed
- Supabase account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd financial-analytics-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   - Create a new Supabase project
   - Copy your project URL and anon key
   - Create a `.env` file based on `.env.example`
   - Add your Supabase credentials

4. **Set up the database**
   - Navigate to the SQL editor in your Supabase dashboard
   - Run the migration script from `supabase/migrations/create_tables.sql`
   - This will create the necessary tables and insert sample data

5. **Start the development server**
   ```bash
   npm run dev
   ```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Database Schema

### Users Table
- `id` (UUID, Primary Key) - References auth.users
- `email` (Text) - User email address
- `full_name` (Text) - User's full name
- `avatar_url` (Text, Optional) - Profile picture URL
- `created_at` (Timestamp) - Account creation date

### Transactions Table
- `id` (Serial, Primary Key) - Unique transaction ID
- `date` (Timestamp) - Transaction date
- `amount` (Decimal) - Transaction amount
- `category` (Text) - Revenue or Expense
- `status` (Text) - Paid or Pending
- `user_id` (Text) - Associated user identifier
- `user_profile` (Text) - User profile image URL
- `description` (Text, Optional) - Transaction description
- `created_at` (Timestamp) - Record creation date

## API Endpoints

The application uses Supabase's auto-generated REST API:

- `GET /rest/v1/transactions` - Fetch transactions with filtering
- `POST /rest/v1/transactions` - Create new transaction
- `PATCH /rest/v1/transactions` - Update existing transaction
- `DELETE /rest/v1/transactions` - Delete transaction

All endpoints support:
- JWT authentication
- Row-level security
- Real-time subscriptions
- Advanced querying with filters, sorting, and pagination

## Features in Detail

### Authentication Flow
1. User registration with email and password
2. Email verification (optional)
3. JWT token generation and storage
4. Automatic session refresh
5. Secure logout with token cleanup

### Dashboard Analytics
- **Revenue Tracking**: Real-time revenue calculations
- **Expense Monitoring**: Categorized expense tracking
- **Profit Analysis**: Net profit calculations and trends
- **Transaction Volume**: Total transaction counts and growth

### Export Functionality
- **Column Selection**: Choose which fields to export
- **CSV Generation**: Client-side CSV creation
- **Auto Download**: Automatic file download trigger
- **File Naming**: Date-stamped file names for organization

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Tablet Support**: Adapted layouts for tablet screens
- **Desktop Enhanced**: Full-featured desktop experience
- **Accessibility**: WCAG compliant design patterns

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the GitHub repository or contact the development team.