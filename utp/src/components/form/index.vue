<template>
  <section class="bienvenido">
    <form class="formulario">
      <div class="form">
        <input type="email" class="form-control input-config" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar usuario">
        <input type="password" class="form-control input-config" id="exampleInputPassword1" placeholder="Ingresar contraseña">
      </div>
      <button type="submit" class="boton">Ingresar</button>
      <button type="submit" class="boton">Crear usuario</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Form',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .boton{
        margin-top: 10px;
        background-color: #ffbd59;
        text-align: center
    }
    
.input-config{
    margin-top: 20px;
    text-align: center;
    width: 250px;
}

.formulario{
    width: 100%;
    margin: 0 auto;
    display: flex;
    text-align: center;
    flex-direction: column;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: 120px;
}


@media (min-width: 768px) { 
    .formulario{
        width: 500px;
        text-align: center;
        font-size: 1rem;
        color:#fff;
        margin-top: 60px;
    }

      .boton{
        margin-top: 10px;
        background-color: #ffbd59;
        text-align: center
    }
}
</style>
