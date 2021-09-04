import { notification } from "antd";

export const notify_warning=(description)=>{
    notification["warning"]({
        message: "System",
        placement: "bottomRight",
        style: { background: "#ffe88c" },
        description: description,
    });
}
export const notify_success=(description)=>{
    notification["success"]({
        message: "System",
        placement: "bottomRight",
        style: { background: "#d2ffc7" },
        description: description,
      });
}