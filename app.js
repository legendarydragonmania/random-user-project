import getUser from "./utils/fetchUsers.js";
import displayUsers from "./utils/displayUsers.js";
import { btn } from "./selections.js"

const showUser = async () => {
    const data = await getUser();
    displayUsers(data)
}

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);

