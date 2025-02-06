my-app/
├── src/
│ ├── config/
│ │ ├── config.ts # Konfigurasi umum aplikasi
│ │ └── sequelize.ts # Koneksi database menggunakan Sequelize
│ ├── models/
│ │ ├── user.ts
│ ├── modules/
│ │ ├── auth/
│ │ │ ├── controllers/
│ │ │ │ └── authController.ts # Controller untuk login, register, dll.
│ │ │ ├── graphql/
│ │ │ │ ├── resolvers/
│ │ │ │ │ └── authResolver.ts # Resolver GraphQL untuk autentikasi
│ │ │ │ └── schema.ts # Schema GraphQL untuk autentikasi
│ │ │ ├── services/
│ │ │ └── authService.ts # Logika bisnis untuk autentikasi
│ │ │  
│ │ ├── user/
│ │ │ ├── controllers/
│ │ │ │ └── userController.ts # Controller untuk operasi user
│ │ │ ├── graphql/
│ │ │ │ ├── resolvers/
│ │ │ │ │ └── userResolver.ts # Resolver GraphQL untuk user
│ │ │ │ └── schema.ts # Schema GraphQL untuk user
│ │ │ ├── services/
│ │ │ │ └── userService.ts # Logika bisnis untuk user
│ ├── middlewares/
│ │ ├── authMiddleware.ts # Middleware untuk otentikasi JWT
│ │ └── errorMiddleware.ts # Middleware untuk error handling global
│ ├── utils/
│ │ ├── jwtUtils.ts # Utilitas untuk menangani JWT
│ │ └── validationUtils.ts # Utilitas untuk validasi input
│ ├── tests/
│ │ ├── auth/
│ │ │ └── auth.test.ts # Unit tests untuk auth
│ │ ├── user/
│ │ │ └── user.test.ts # Unit tests untuk user
│ ├── routes/
│ │ ├── authRoutes.ts # Rute untuk autentikasi
│ │ └── userRoutes.ts # Rute untuk user
│ └── server.ts # Entry point aplikasi Express
├── .env # Konfigurasi environment (DB, JWT_SECRET, dll)
├── .gitignore # File ignore Git
├── package.json # Dependensi dan script npm
├── tsconfig.json # Konfigurasi TypeScript
└── README.md # Dokumentasi aplikasi
