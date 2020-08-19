const model = {};
model.currentUser = {}
model.saveData = (data) => {
    model.currentUser = {
        email : data.email,
        password : data.password
    }
}

