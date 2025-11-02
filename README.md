# 🧩 Angular CRUD App — Employee & Department Management

This repository contains a **full-stack CRUD application** built with:

- **Frontend:** Angular 20 + Bootstrap 5  
- **Backend:** .NET 8 Minimal APIs + Entity Framework Core + SQL Server  

The project demonstrates a clean and modular CRUD implementation with a **one-to-many relationship** between **Departments** and **Employees**.

---

## 🧠 Overview

This app manages two entities:

### 🏢 Department
- Create, Read, Update, and Delete (CRUD) operations for Departments.  
- Each department can have **multiple employees**.

### 👨‍💼 Employee
- Full CRUD operations with API integration.  
- Uses a **reusable form component** — the same form is used for both **Add** and **Edit** operations.  
- Data is fetched from the backend API and displayed in a dynamic **Bootstrap table**.  
- Includes **delete confirmation modal** before removing an employee.

---

## ✨ Features

- 🔹 CRUD operations for **Departments** and **Employees**  
- 🔹 **One-to-many** relationship (1 Department → many Employees)  
- 🔹 **Reusable Reactive Form** for adding and editing employees  
- 🔹 **Delete confirmation modal** before removal  
- 🔹 Clean UI using **Bootstrap 5**  
- 🔹 API integration using **HttpClient**  
- 🔹 Organized Angular folder structure  
- 🔹 Toast notifications for success messages

---

## 🖼️ Screenshots

| Home Page | Departments | Employees | Employee Form | Delete Employee |
|------------|-------------|------------|----------------|----------------|
| ![Home](https://github.com/ashranhaider/angular-crud-app/blob/master/angular-crud-app/public/images/screenshots/home.png?raw=true) | ![Departments](https://github.com/ashranhaider/angular-crud-app/blob/master/angular-crud-app/public/images/screenshots/Departments.png?raw=true) | ![Employees](https://github.com/ashranhaider/angular-crud-app/blob/master/angular-crud-app/public/images/screenshots/employees.png?raw=true) | ![Form](https://github.com/ashranhaider/angular-crud-app/blob/master/angular-crud-app/public/images/screenshots/employee-form.png?raw=true) | ![Delete](https://github.com/ashranhaider/angular-crud-app/blob/master/angular-crud-app/public/images/screenshots/delete-employee.png?raw=true) |

---

## ⚙️ Backend API (.NET Core Minimal APIs)

The backend is located in [`Backend/EmployeeDepartmentAPI`](Backend/EmployeeDepartmentAPI).

### Build & Run

```bash
cd Backend/EmployeeDepartmentAPI
dotnet restore
dotnet build
dotnet run
```

The API will be available at [http://localhost:5252](http://localhost:5252).

---

## 💻 Frontend (Angular)

The frontend Angular app is located in [`angular-crud-app`](angular-crud-app).

### Setup & Run

```bash
cd angular-crud-app
npm install
npm start
```

The app runs at [http://localhost:4200](http://localhost:4200).

---

## 🧩 API Endpoints

| Method | Endpoint | Description |
|---------|-----------|-------------|
| GET | `/api/departments` | List all departments |
| POST | `/api/departments` | Add department |
| PUT | `/api/departments/{id}` | Update department |
| DELETE | `/api/departments/{id}` | Delete department |
| GET | `/api/employees` | List all employees |
| POST | `/api/employees` | Add employee |
| PUT | `/api/employees/{id}` | Update employee |
| DELETE | `/api/employees/{id}` | Delete employee |

---

## 📝 Notes

- Ensure the backend is running before launching the Angular app.  
- CORS is enabled for `http://localhost:4200` by default.  
- Modify database connection in `appsettings.json` if needed.  
- Screenshots are hosted inside the public folder and referenced using absolute GitHub URLs.

---
