export const ADMIN_EMAIL = "budgetrealestate@gmail.com";
export const ADMIN_PASSWORD = "Admin@12345";
export const ADMIN_SESSION_KEY = "budget-realestate-admin-auth";

export function isAdminAuthenticated() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(ADMIN_SESSION_KEY) === "true";
}

export function loginAdmin(email, password) {
  const isValid = email === ADMIN_EMAIL && password === ADMIN_PASSWORD;

  if (isValid && typeof window !== "undefined") {
    window.sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  }

  return isValid;
}

export function logoutAdmin() {
  if (typeof window !== "undefined") {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
  }
}
