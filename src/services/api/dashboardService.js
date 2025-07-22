import dashboardMockData from '@/services/mockData/dashboard.json';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const dashboardService = {
  async getStats() {
    await delay(300);
    const data = dashboardMockData.stats;
    return { ...data };
  },

  async getNotifications() {
    await delay(200);
    const data = dashboardMockData.notifications;
    return [...data];
  },

  async getUserProfile() {
    await delay(250);
    const data = dashboardMockData.userProfile;
    return { ...data };
  },

  async markNotificationRead(id) {
    await delay(200);
    const notifications = dashboardMockData.notifications;
    const notification = notifications.find(n => n.Id === parseInt(id));
    if (notification) {
      notification.read = true;
      return { ...notification };
    }
    throw new Error('Notification not found');
  },

  async deleteNotification(id) {
    await delay(200);
    const notifications = dashboardMockData.notifications;
    const index = notifications.findIndex(n => n.Id === parseInt(id));
    if (index !== -1) {
      const deleted = notifications.splice(index, 1)[0];
      return { ...deleted };
    }
    throw new Error('Notification not found');
  },

  async updateUserProfile(id, profileData) {
    await delay(400);
    if (parseInt(id) !== dashboardMockData.userProfile.Id) {
      throw new Error('User not found');
    }
    
    const updatedProfile = {
      ...dashboardMockData.userProfile,
      ...profileData,
      Id: dashboardMockData.userProfile.Id // Prevent Id modification
    };
    
    // Update the mock data
    Object.assign(dashboardMockData.userProfile, updatedProfile);
    
    return { ...updatedProfile };
  }
};

export default dashboardService;