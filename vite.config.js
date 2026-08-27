import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    // ---------- THAY ĐỔI ĐÂY ----------
    // Thay <username> và <repo-name> bằng thông tin thực tế của bạn
    base: "/k22-module1-law-firm-website/", // lưu ý có dấu "/" đầu và cuối
    // ----------------------------------
});
