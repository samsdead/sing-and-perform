export type ContactPayload = {
    name: string;
    email: string;
    phone?: string;
    message: string;
    preferredTime?: string;
  };
  
  export function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  export function validateContactPayload(payload: ContactPayload) {
    const errors: Record<string, string> = {};
  
    if (!payload.name || payload.name.trim().length < 2) {
      errors.name = "Please enter your name.";
    }
  
    if (!payload.email || !isValidEmail(payload.email)) {
      errors.email = "Please enter a valid email address.";
    }
  
    if (!payload.message || payload.message.trim().length < 10) {
      errors.message = "Please tell us a bit more (at least 10 characters).";
    }
  
    return {
      ok: Object.keys(errors).length === 0,
      errors
    };
  }
  