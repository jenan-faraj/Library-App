import axios from "axios";

const signUp = async (email, password) => {
  try {
    const response = await axios.post(
      `hAIzaSyAB3kF0wrxPpWDc_8UeUafWbqyHZiXjYLo`, // استبدلي YOUR_API_KEY بمفتاحك الفعلي
      {
        email,
        password,
        returnSecureToken: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error signing up:", error); // عرض الخطأ في الكونسول لمعرفة السبب
    throw error.response?.data?.error || { message: "An unknown error occurred." }; // إذا لم يوجد خطأ مخصص يرجع رسالة عامة
  }
};

export { signUp };
