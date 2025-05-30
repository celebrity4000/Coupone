import axios from "axios";
import { API_URL } from "./index";

class UserInfo {
  private BASE_URL = API_URL + "/users";

  public async getUserInfo() {
    try {
      const response = await axios.get(`${this.BASE_URL}/userinfo`, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }

  public async updateUserInfo(data: any) {
    try {
      const response = await axios.put(`${this.BASE_URL}/userinfo`, data, {
        withCredentials: true,
      });
      return response.data;
    } catch (error: any) {
      console.error("Error updating data:", error);
      throw error;
    }
  }
}

const userInfoApi = new UserInfo();
export default userInfoApi;
