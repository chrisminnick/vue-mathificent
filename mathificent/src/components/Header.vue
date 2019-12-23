<template>
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Mathificent</a>
        <button class="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarText">
        <span class="navbar-toggler-icon"></span>
        </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
          <li class="nav-item">
              <router-link class="nav-link" href="/">Home</router-link>
          </li>
          <li class="nav-item">
              <router-link class="nav-link" href="/play">Play</router-link>
          </li>
              <div id="nav">

    </div>
            </ul>
          </div>
        </nav>
      </header>
</template>
<script>
export default {
    name: 'Header'
}
</script>