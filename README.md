# Angular CRUD App

This repository contains a full-stack CRUD application with:

- **Frontend:** Angular 20 + Bootstrap
- **Backend API:** .NET Core Minimal APIs

---

## Backend API (.NET Core Minimal APIs)

The backend is located in [`Backend/EmployeeDepartmentAPI`](Backend/EmployeeDepartmentAPI).

### Build & Run

1. **Navigate to the backend directory:**
   ```sh
   cd Backend/EmployeeDepartmentAPI
   ```

2. **Restore dependencies:**
   ```sh
   dotnet restore
   ```

3. **Build the project:**
   ```sh
   dotnet build
   ```

4. **Run the API:**
   ```sh
   dotnet run
   ```
   The API will be available at [http://localhost:5252](http://localhost:5252) (or as configured).

---

## Frontend (Angular)

The frontend Angular app is located in [`angular-crud-app`](angular-crud-app).

### Install dependencies

```sh
cd angular-crud-app
npm install
```

### Development server

```sh
npm start
```
or
```sh
ng serve
```
The app will be available at [http://localhost:4200](http://localhost:4200).

### Build

```sh
ng build
```

### Run Unit Tests

```sh
ng test
```

---

## API Endpoints

- `GET /api/departments` — List all departments
- `GET /api/employees` — List all employees
- `POST /api/employees` — Add a new employee
- `PUT /api/employees/{id}` — Update employee
- `DELETE /api/employees/{id}` — Delete employee

---

## Notes

- Ensure the backend is running before using the Angular app.
- CORS is enabled for `http://localhost:4200` by default.

---