

function Checkauth() {
    try {

        let user = localStorage.getItem("user");
        let auth = localStorage.getItem("auth");
        if (user && auth === "true") {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        return false;
    }

}

export default Checkauth