<template>
    <div class="sign-up">
        <h1>Sign Up</h1>
        <form @submit.prevent="handleSubmit">
            <div>
                <label for="username">Username:</label>
                <input type="text" v-model="username" id="username" required />
            </div>
            <div>
                <label for="email">Email:</label>
                <input type="email" v-model="email" id="email" required />
            </div>
            <div>
                <label for="password">Password:</label>
                <input type="password" v-model="password" id="password" required />
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            username: '',
            email: '',
            password: ''
        };
    },
    methods: {
        handleSubmit() {
            // Handle the sign-up logic here
            console.log('Username:', this.username);
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    }
};
</script>

<style scoped>
.sign-up {
    max-width: 400px;
    margin: 0 auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.sign-up h1 {
    text-align: center;
}
.sign-up div {
    margin-bottom: 1em;
}
.sign-up label {
    display: block;
    margin-bottom: 0.5em;
}
.sign-up input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}
.sign-up button {
    width: 100%;
    padding: 0.5em;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.sign-up button:hover {
    background-color: #0056b3;
}
</style>