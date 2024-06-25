

<template>
    <div>
        <h2 class="text-center">Login</h2>
        <form @submit.prevent="login" class="container">
            <div class="mb-3">
                <label for="Username" class="form-label">Ingresar Usuario</label>
                <input type="password" class="form-control" id="Username" placeholder="Username" v-model="username" required>
            </div>
            <div class="mb-3">
                <label for="Password" class="form-label">Ingrese su password</label>
                <input type="text" class="form-control" id="Password" placeholder="Password" v-model="password" required>
            </div>

            <div class="col-12">
                <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </div>
        </form>
        <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>

</template>

<style scoped>

</style>

<script setup>
    import {ref} from 'vue';
    import {useRouter} from 'vue-router';
    const username = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const router = useRouter();

    const login = () => {
        if (username.value === 'admin' && password.value === 'admin'){
            localStorage.setItem('user', JSON.stringify({role: 'admin'}));
            router.push('/admin-report');
        }else if (username.value === 'user' && password.value === 'user'){
            localStorage.setItem('user', JSON.stringify({role: 'user'}));
            router.push('/dashboard');
        }else {
            errorMessage.value = 'Usuario o contraseña incorrectos';
        }

    };
</script>