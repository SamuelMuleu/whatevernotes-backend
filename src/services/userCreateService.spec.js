const UserCreateService = require('./UserCreateService');
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");



describe("UserCreateService", ()=>{

    it("user should be create", async () => {
        const user = {
            name: "user test",
            email: "user@test.com",
            password: "123"
        };
    
    
        const userRepositoryInMemory = new UserRepositoryInMemory();
        const userCreateService = new UserCreateService(userRepositoryInMemory);
        const userCreated = await userCreateService.execute(user);
    
    
        expect(userCreated).toHaveProperty("id");
    });
    


})

