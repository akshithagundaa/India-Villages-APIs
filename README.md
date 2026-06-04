# India Villages API

## Overview

India Villages API is a REST API that provides hierarchical geographical data for Indian locations. It enables applications to search and retrieve village, subdistrict, district, and state information through a simple API interface.

The project is designed to support address autocomplete functionality and standardized address formatting for web applications, e-commerce platforms, logistics systems, and other location-based services.

## Features

- Village-level autocomplete search
- Hierarchical address lookup
- Standardized address formatting
- RESTful API architecture
- Fast search functionality
- Frontend integration support
- PostgreSQL database connectivity

## Technology Stack

### Backend
- Node.js
- Express.js
- PostgreSQL

### Frontend
- HTML
- JavaScript
- CSS

### Database
- PostgreSQL

## Project Structure

```
backend/
│
├── controllers/
│   └── locationController.js
│
├── routes/
│   └── locationRoutes.js
│
├── db/
│   └── db.js
│
├── app.js
├── server.js
├── package.json
└── package-lock.json

frontend/
│
└── index.html

data/
│
├── states.csv
├── districts.csv
├── subdistricts.csv
└── villages.csv
```

## API Endpoint

### Autocomplete Search

```http
GET /api/autocomplete?q=<search_text>
```

### Example Request

```http
http://localhost:3000/api/autocomplete?q=ha
```

### Example Response

```json
{
  "data": [
    {
      "value": "hadnal",
      "fullAddress": "hadnal, chikodi, belgaum, karnataka, India"
    }
  ]
}
```

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/india-villages-api.git
```

### Install Dependencies

```bash
npm install
```

### Start Server

```bash
node server.js
```

Server runs on:

```text
http://localhost:3000
```

## Use Cases

- Address autocomplete systems
- E-commerce checkout forms
- Logistics and delivery platforms
- Government service portals
- Location-based applications

## Future Enhancements

- API Key Authentication
- Rate Limiting
- User Management
- Analytics Dashboard
- SaaS Subscription Plans
- Redis Caching
- Cloud Deployment

## Author

Akshitha Gunda

## License

This project is developed for educational and capstone project purposes.
