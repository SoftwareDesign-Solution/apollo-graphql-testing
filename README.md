# apollo-graphql-testing

## ✨ Beschreibung

Dieses Projekt ist eine moderne Anwendung, die mit React und Apollo entwickelt wurde, um GraphQL-Services zu testen und zu implementieren. Sie verwendet fortschrittliche Technologien und Tools zur Entwicklung, Testautomatisierung und Build-Optimierung.

---

## 🚀 Technologien

### **Frontend**

- **React (19.0.0)**: Framework zur Erstellung von Benutzeroberflächen.
- **React Hook Form (v7.54.2)**: Bibliothek zur Verwaltung von Formularen.
- **Tailwind CSS (v4.0.0)**: Dienstprogramm-basierter CSS-Framework für schnelle und reaktionsschnelle Designs.

### **GraphQL**

- **Apollo Client (v3.12.6)**: State-Management und GraphQL-Abfragen im Client.
- **Apollo Server (v4.11.3)**: GraphQL-Server zur Bereitstellung von APIs.
- **GraphQL (v16.10.0)**: Abfragesprache und Runtime zur API-Entwicklung.

### **Build- und Entwicklungs-Tools**

- **Nx (v20.3.2)**: Monorepo-Tool zur Verwaltung und Optimierung von Workspaces.
- **Vite (v5.0.0)**: Superschneller Entwicklungs- und Build-Server.
- **TypeScript (v5.6.2)**: Statische Typisierung für JavaScript.
- **ESBuild (v0.19.2)**: Hochleistungs-Bundler.
- **SWC**: Schneller JavaScript/TypeScript-Compiler.

### **Testing**

- **Vitest (v3.0.2)**: Testing-Framework für moderne Anwendungen.
- **Jest (v29.7.0)**: Testing-Framework für zuverlässige Unit- und Integrationstests.
- **Testing Library**:
  - React Testing Library (16.2.0)
  - Jest DOM (v6.6.3)
  - User Event (v14.6.0)

### **Linting & Code-Qualität**

- **ESLint (v9.8.0)**: Linting für konsistenten Code-Stil.
- **Prettier (v2.6.2)**: Automatische Code-Formatierung.
- **TypeScript-ESLint (v8.13.0)**: Linter für TypeScript.
- Plugins:
  - `eslint-plugin-react`
  - `eslint-plugin-react-hooks`
  - `eslint-plugin-jsx-a11y`
  - `eslint-plugin-import`

### **Weitere Abhängigkeiten**

- **PostCSS (v8.4.38)**: CSS-Tooling.
- **Autoprefixer (v10.4.13)**: Automatisches Hinzufügen von Browser-Präfixen.

---

## 🌐 Setup & Installation

1. **Repository klonen:**

    ```bash
    git clone https://github.com/SoftwareDesign-Solution/apollo-graphql-testing.git
    cd apollo-graphql-testing
    ```

2. **Abhängigkeiten installieren:**

    ```bash
    npm install
    ```

3. **Backend starten**

    ```bash
    npx nx serve server
    ```

4. **Client starten**

    ```bash
    npx nx serve client
    ```

5. **Tests ausführen:**

    ```bash
    npx nx test client
    npx nx test server
    ```

---

## 🔧 Features

- Vollständige Unterstützung für GraphQL-Services mit Apollo.
- Formularverwaltung mit React Hook Form.
- Moderne Styling-Optionen mit Tailwind CSS.
- Umfangreiches Testing-Setup mit Vitest und Testing Library.
- Optimierte Builds dank Vite und ESBuild.

---

## 🛠þ Entwicklungsskripte

- **Backend starten:**

    ```bash
    npx nx serve server
    ```

- **Client starten:**

    ```bash
    npx nx serve client
    ```

- **Client & Server starten:**

    ```bash
    npx nx run-many --all --target=serve --parallel
    ```

- **Backend builden:**

    ```bash
    npx nx build server
    ```

- **Client builden:**

    ```bash
    npx nx build client
    ```

- **Client & Server builden:**

    ```bash
    npx nx run-many --all --target=build --parallel
    ```

- **Backend testen:**

    ```bash
    npx nx test server
    ```

- **Client test:**

    ```bash
    npx nx serve client
    ```

- **Client & Server testen:**

    ```bash
    npx nx run-many --all --target=test --parallel
    ```

- **Linting:**

    ```bash
    npx nx lint
    ```

---

## 🔍 Verwendete Bibliotheken (Auszug)

### **Abhängigkeiten:**

- `@apollo/client`
- `@apollo/server`
- `graphql`
- `react`
- `react-dom`
- `react-hook-form`

### **DevDependencies:**

- `@nx/react`, `@nx/vite`
- `vite`, `esbuild`
- `jest`, `vitest`, `react-testing-library`
- `eslint`, `prettier`
- `typescript`, `ts-jest`

---

## 🙏 Beitrag

Wir freuen uns über Beiträge! Bitte eröffne ein [Issue](https://github.com/SoftwareDesign-Solution/apollo-graphql-testing/issues) oder erstelle einen Pull-Request.
