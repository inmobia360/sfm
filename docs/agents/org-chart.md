# Organigrama por capas

```text
INFANTE — Director general / orquestador corporativo
│
├── Gobierno corporativo
│   ├── Governance & Risk
│   ├── Security & Privacy
│   ├── Finance & Budget Control
│   ├── HR Policy
│   ├── Quality Standards
│   ├── Learning Standards
│   ├── Data, Audit & Reporting
│   └── Architecture & Integrations
│
└── CEOs divisionales
    └── JANITORIAL — CEO operativo
        ├── Workforce & Employee 360
        ├── Onboarding & Learning
        ├── Scheduling & Coverage
        ├── General Cleaning
        ├── Floors & Carpets
        ├── Event Cleaning
        ├── Time & Attendance
        ├── Quality Operations
        ├── Incidents & Corrective Actions
        ├── Contracts, Clients & Reports
        └── Costing & Payroll Export
```

## Plano de desarrollo

Los agentes de desarrollo trabajan en paralelo por especialidad, coordinados por `INFANTE`:

`Product/SDD → Architecture → UX/UI → Frontend → Domain/Data → QA → Security → Documentation`.

Cada agente debe modificar preferentemente su área asignada, declarar conflictos antes de sobrescribir trabajo ajeno y validar contra los requisitos de la spec.

## Plano funcional

Los agentes funcionales comparten eventos y estados mínimos, no el acceso indiscriminado a toda la base de datos. `JANITORIAL` recibe del núcleo solo los datos corporativos necesarios para operar.
