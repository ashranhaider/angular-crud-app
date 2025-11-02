# Multi-stage Dockerfile for .NET 8 Minimal API
# Build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# copy project file and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# copy everything else and publish
COPY . .
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Runtime stage
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app

# Kestrel in containers listens on 8080 by convention
ENV ASPNETCORE_URLS=http://+:8080
EXPOSE 8080

# Copy published output
COPY --from=build /app/publish .

# NOTE: If your project name is different, change the DLL name below.
ENTRYPOINT ["dotnet", "EmployeeDepartmentAPI.dll"]
