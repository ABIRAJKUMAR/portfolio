const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

/**
 * Send a contact inquiry to the Express backend API
 * @param {Object} payload - { name, email, subject, message }
 * @returns {Promise<{success: boolean, message: string, data?: any}>}
 */
export const sendContactMessage = async (payload) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || `Request failed with status ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error('API sendContactMessage Error:', error);
    throw error;
  }
};

/**
 * Check backend health status
 * @returns {Promise<{status: string, timestamp: string}>}
 */
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/health`);
    return await response.json();
  } catch (error) {
    console.warn('Backend health check failed:', error.message);
    return { status: 'offline', error: error.message };
  }
};
